import React from 'react';
import { View } from '@tarojs/components';

export interface PageLoadingProps {
  showLoading?: boolean;
}

const PageLoading: React.FC<PageLoadingProps> = ({
  showLoading
}) => {
  if (!showLoading) {
    return null;
  }
    return (
      <View 
        className="fixed vertical-center text-center overflow-hidden"
        style={{ width: `256rpx`, height: `148rpx`, color: `#fff`, borderRadius: `8rpx`, opacity: .7 }}>
        <View className="my-0 mx-auto text-center" style={{ width: `200rpx`, height: `42rpx`, color: `#fff`, fontSize: `28rpx`, lineHeight: `42rpx`}}>加载中, 请稍后</View>
      </View>
    )
}

export default PageLoading;
