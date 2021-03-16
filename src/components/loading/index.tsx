import { View } from '@tarojs/components';
import React from 'react';

export interface LoadingProps {
  showLoading?: boolean;
  pageLoading?: boolean;
  btnLoading?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  showLoading,
  pageLoading,
  btnLoading
}) => {
  if (!showLoading) {
    return null;
  }
  return (
    <View className="overflow-hidden flex justify-center items-center">
      <View className="box-border inline-block animate-spin origin-top-center" style={{ width: 30, height: 15, border: `2px solid #e93b3d`, borderTop: 0, borderRadius: `0 0 15px 15px` }}></View>
    </View>
  )
}

export default Loading
