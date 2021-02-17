import React, { Fragment, useState } from 'react';
import { Swiper, SwiperItem, View, Image } from '@tarojs/components';

export interface CateBannerEntity {
  id: number | string;
  image: string;
}

export interface CateBannerProps {
  entries: CateBannerEntity[];
}

const CateBanner: React.FC<CateBannerProps> = ({
  entries=[]
}) => {
  if (!entries.length) {
    return null;
  }
  const [curIdx, setCurIdx] = useState(0);
  const handleClickBanner = () => {}
  const handleSwiperChange = (event: any) => {
    setCurIdx(event.detail.current);
  }
  return (
    <View className="relative overflow-hidden box-shadow-banner" style={{ margin: `34rpx 24rpx 0 0`, paddingTop: `37.7%`, borderRadius: `24rpx` }}>
      {
        entries.length === 1 && (
          <View className="absolute t-0 l-0 w-full h-full">
            <Image className="block w-full h-full" src={entries[0].image}></Image>
          </View>
        )
      }
      {
        entries.length > 1 && (
          <Fragment>
            <Swiper className="absolute t-0 l-0 w-full h-full" onChange={handleSwiperChange} style={{ borderRadius: `24rpx` }} autoplay circular interval={6000}>
              {
                entries.map(item => (
                  <SwiperItem onClick={handleClickBanner} key={`cate-banner-img-${item.id}`}>
                    <Image className="block w-full h-full" src={item.image}></Image>
                  </SwiperItem>
                ))
              }
            </Swiper>
            <View className="absolute l-0 r-0 text-center" style={{ height: `6rpx`, fontSize: 0, bottom: '5px' }}>
              {
                entries.map((item, index) => (
                  <View className={`inline-block bg-black bg-opacity-40 ${index === curIdx ? 'bg-white' : ''}`} key={`cate-banner-dot-${item.id}`} style={{ margin: `0 3rpx`, width: index === curIdx ? `24rpx` : `16rpx`, height: `6rpx`, borderRadius: `3rpx`, transition: `all .2s` }}></View>
                ))
              }
            </View>
          </Fragment>
        )
      }
    </View>
  );
}

export default CateBanner;