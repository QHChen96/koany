import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components';
import React, { useState } from 'react';
import './index.scss';

const blockName = `koany-focus-slide`;

export interface ProductImageEntity {
  imageUrl: string;
}
export interface FocusSlideProps {
  isSupportNav?: boolean;
  navHeight?: number;
  statusBarHeight?: number;
  isNotchScreen?: boolean;
  slideImages?: ProductImageEntity[];
}

const FocusSlide: React.FC<FocusSlideProps> = ({
  isSupportNav,
  navHeight=0,
  statusBarHeight=0,
  isNotchScreen,
  slideImages=[]
}) => {

  const [slideIdx, setSlideIdx] = useState(0);
  const defaultImg = '';
  const handleSwiperChange = (e: any) => {
    setSlideIdx(e.detail.current);
  }
  return (
    <View className={`${blockName} relative`}>
      <View className={`${blockName}__cover ${isSupportNav ? 'no-gutter' : ''}`} style={{ marginTop: `${isNotchScreen ? statusBarHeight : navHeight - 5}px`}}>
        {
          slideImages.length > 0 && (
            <Swiper onChange={handleSwiperChange} className={`${blockName}__slide`} circular current={slideIdx} indicatorDots={false}>
              {
                slideImages.map(item => (
                  <SwiperItem className={`${blockName}__slide-item`}>
                    <Image className={`${blockName}__image`} mode="aspectFill" src={item.imageUrl || defaultImg} />
                  </SwiperItem>
                ))
              }
            </Swiper>
          ) || (
            <Swiper className={`${blockName}__slide`} indicatorDots={false}>
              <SwiperItem className={`${blockName}__slide-item`}>
                <Image className={`${blockName}__image`} mode="aspectFill" src={defaultImg} />
              </SwiperItem>
            </Swiper>
          )
        }
        {/* <View className={`${blockName}__tag`}>
          <View className={`${blockName}__tag-item`}>
            <Text>视频</Text>
          </View>
          <View className={`${blockName}__tag-item`}>
            <Text>图片</Text>
          </View>
        </View> */}
        <View className={`${blockName}__number`}>
          <Text className={`${blockName}__number-cur`}>{slideIdx + 1}</Text>/{slideImages.length}
        </View>
      </View>
    </View>
  );
};

export default FocusSlide;
