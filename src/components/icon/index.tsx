import React from 'react';
import { View } from '@tarojs/components';

export interface IconProps {
  type: string;
  size?: number;
  color?: string;
}
const Icon: React.FC<IconProps> = ({
  type,
  size=15,
  color='#333333'
}) => {
  return (
    <View className={`inline-block iconfont icon-${type}`} style={{ fontSize: size, color: color }}></View>
  );
}

export default Icon;
