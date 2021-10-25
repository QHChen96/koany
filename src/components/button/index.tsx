import { CommonEvent, View } from '@tarojs/components';
import React from 'react';


export interface ButtonProps {
  onClick?: (event: CommonEvent) => void;
}
const blockName = `koany-button`;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children
}) => {
  const handleClick = (e: CommonEvent) => {
    Taro.pageScrollTo({
      scrollTop: 0,
      duration: 0
    });
    onClick && onClick(e);
  }
  return (
    <View className={} style={} onClick={ handleClick }>
      <View className="koany-button__wrap">
        {
          children && (
            <View className={classnames()}>
              { children }
            </View>
          )
        }
      </View>
    </View>
  );
}

export default Button;
