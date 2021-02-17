import React, { useState } from 'react';
import { View, Swiper, SwiperItem, Text, Image } from '@tarojs/components';
import { Icon } from '@/components';

export interface SearchBarProps {
  onToSearch?: (keyword: string) => void;
}

const searchWords: string[] = ['衣服', '裤子']

const SearchBar: React.FC<SearchBarProps> = ({
  onToSearch
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwiperChange = (event: any) => {
    setCurrentIndex(event.detail.current);
  }
  const handleToSearch = () => {
    onToSearch && onToSearch(searchWords[currentIndex]);
  }

  return (
    <View className="relative">
      <View className="flex items-center" style="height: 60rpx">
        <View style={{ width: `30rpx` }}></View>
        <View onClick={handleToSearch} className="relative min-w-0 flex-1">
          <View className="absolute inline-block l-0 vertical" style={{ padding: `20rpx`, zIndex: 10, paddingTop: `18rpx`, paddingRight: `0` }}>
            <Icon type="search" color="#8a8a8a"/>
          </View>
          <View className="relative overflow-hidden pointer-events-none" style={{ height: `60rpx`, lineHeight: `60rpx`, fontSize: `26rpx`, color: `#999`, backgroundColor: `#fff`, borderRadius: `200rpx`, textIndent: `72rpx`}}>
            <View className="absolute t-0 l-0 b-0 r-0"></View>
            <Swiper onChange={handleSwiperChange} className="w-full h-full" circular vertical current={currentIndex} duration={1000} indicatorDots={false} interval={3000}>
              {
                searchWords.map(word => (
                  <SwiperItem key={`search-word-${word}`}>
                    <Text className="block line-1" style={{ maxWidth: `500rpx` }}>{word}</Text>
                  </SwiperItem>
                ))
              }
            </Swiper>
          </View>
          <View className="inline-block absolute r-0 vertical" style={{ padding: `20rpx`, paddingTop: `18rpx` }}>
            <Icon type="scan" color="#8a8a8a"/>
          </View>
        </View>
        {/* <View>
          <Image></Image>
        </View>
        <View></View> */}
        <View style={{ width: `30rpx` }}></View>
      </View>
    </View>
  );
}

export default SearchBar;
