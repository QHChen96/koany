import React from 'react';
import { View } from '@tarojs/components';

export interface IconProps {
  type: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}
const Icon: React.FC<IconProps> = ({
  type,
  size=16,
  color='',
  className='',
  onClick
}) => {

  const handleClick = () => {
    onClick && onClick();
  }
  return (
    <View
      className={`inline-block iconfont icon-${type} normal-case lh-1 ${className}`}
      style={`font-size: ${size}px; ${color ? `color:${color}` : ''}`}
      onClick={handleClick}>
    </View>
  );
}

export default Icon;
