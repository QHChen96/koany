import React, { useState } from 'react';
import { Swiper, SwiperItem, View, Image } from '@tarojs/components';
import { ImageLoader } from '@/components';

export interface CarouselProps {
  autoplay?: boolean;
  carousels?: CarouselEntity[];
}

export interface CarouselEntity {
  id: number;
  imgUrl: string;
}

const defaultCarousels: CarouselEntity[] = [
  {
    id: 1,
    imgUrl: 'https://imgcps.jd.com/ling4/100008348530/5omL5py66L6-5Lq6/5omL5py65aW95bqXIA/p-5d91a4f642dd5b7c7d52cbc4/4a58e5f4/cr/s1125x690/q70.jpg'
  },
  {
    id: 2,
    imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/123624/24/2195/99979/5ec3a165E12b276e2/2e5b8a2606fbabfe.jpg'
  },
  {
    id: 3,
    imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/150492/18/17797/147569/6017ce43Ef2034605/c75881da2197138e.jpg'
  }
];

const Carousel: React.FC<CarouselProps> = ({
  autoplay=true,
  carousels=defaultCarousels
}) => {
  const [swiperCurrent, setSwiperCurrent] = useState(0);

  const handleItem = () => {}
  const handleSwiperChange = (event: any) => { setSwiperCurrent(event.detail.current); }

  return (
    <View className="relative my-0 mx-auto box-shadow-1" style={{ width: `702rpx`, height: `220rpx`, borderRadius: `24rpx` }}>
      <Swiper className="relative w-full h-full overflow-hidden bg-black bg-opacity-5" style={{ borderRadius: `24rpx` }} circular autoplay={autoplay} indicatorDots={false} interval={5000} onChange={handleSwiperChange}>
        {
          carousels.map(item => (
            <SwiperItem className="w-full h-full overflow-hidden bg-black bg-opacity-5" onClick={handleItem}>
              <Image className="w-full h-full overflow-hidden" src={item.imgUrl} mode="aspectFill"/>
            </SwiperItem>
          ))
        }
        {
          carousels.length === 0 && <SwiperItem className="w-full h-full overflow-hidden bg-black bg-opacity-95"></SwiperItem>
        }
      </Swiper>
      {
        carousels.length > 0 && (
          <View className="absolute l-0 r-0 text-center" style={{ bottom: '24rpx', height: `6rpx`, fontSize: 0 }}>
            {
              carousels.map((item, idx) => (
                <View className={`inline-block`} style={{ margin: `0 5rpx`, width: idx === swiperCurrent ? `24rpx` : `16rpx`, height: `6rpx`, background: idx === swiperCurrent ? `#fff` : `hsla(0,0%,100%,.4)`, borderRadius: `3rpx` }} key={`carousel-dot-${item.id}`}></View>
              ))
            }
          </View>
        )
      }
      {/* <ImageLoader images={ carousels.map(item => item.imgUrl) } /> */}
    </View>
  );
}

export default Carousel;
