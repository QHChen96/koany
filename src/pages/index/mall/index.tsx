import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { NavBar } from '@/components';
import { useNavInfo } from '@/hooks';
import SearchBar from './components/search-bar';
import Carousel from './components/carousel';

const Mall = () => {
  const [navInfo] = useNavInfo();
  const config = {
    isShowLogo: false,
    logoImg: ''
  }
  const handleToSearch = async (keyword: string='') => {
    console.log(`keyword`, keyword)
    await Taro.navigateTo({
      url: `/pages/search/index?keyword=${keyword}`
    });
  }

  return (
    <View className="koany-mall">
      <View >
        <View className="fixed t-0 l-0 r-0 box-border bg-cover bg-no-repeat bg-bottom"
          style={{
            height: `${(navInfo.isSupportNav ? 750 * navInfo.navHeight / navInfo.screenWidth : 0) + 60}rpx`,
            paddingTop: `${(navInfo.isSupportNav ? 750 * navInfo.navHeight / navInfo.screenWidth : 0)}rpx`,
            zIndex: 100,
            backgroundImage: `url(//img13.360buyimg.com/ling/jfs/t1/122670/22/5934/10850/5efc4febEbc94e7b0/f670a981f23c7347.png)`
          }}>
          <NavBar capsuleType='none' opacity={"0"}>
            {
              config.isShowLogo && (
                <View className="vertical bg-no-repeat bg-full" style={{ width: 350, height: 66, left: 23 }}></View>
              ) || (
                <View className={`vertical-center bg-full block`} style={{ width: 165, height: 33 }}></View>
              )
            }
          </NavBar>
          <SearchBar onToSearch={handleToSearch} />
        </View>
      </View>
      <View
        className="relative"
        style={{
          paddingTop: `${(navInfo.isSupportNav ? 750 * navInfo.navHeight / navInfo.screenWidth : 0) + 60}rpx`,
          marginTop: `40rpx`
        }}>
        <View className="relative">
          <View
            className="absolute l-0 r-0 bg-no-repeat"
            style={{
              backgroundImage: `url(//img13.360buyimg.com/ling/jfs/t1/128047/10/6082/2613/5efc5414E80061862/45519d5f5f08bed3.png)`,
              height: `342rpx`,
              width: `750rpx`,
              top: `-122rpx`,
              backgroundSize: `750rpx 342rpx`
            }}>
          </View>
          <Carousel />
        </View>
      </View>
      {/* {商品数据} */}
    </View>
  );
}

export default Mall;
