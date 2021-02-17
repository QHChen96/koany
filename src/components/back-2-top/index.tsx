import { View } from '@tarojs/components';
import React from 'react';

export interface Back2TopProps {
  onClick?: () => void;
}

const Back2Top: React.FC<Back2TopProps> = ({
  onClick
}) => {
  const handle2Top = () => {
    Taro.pageScrollTo({
      scrollTop: 0,
      duration: 0
    });
    onClick && onClick();
  }
  return (
    <View onClick={handle2Top}></View>
  );
}

export default Back2Top;