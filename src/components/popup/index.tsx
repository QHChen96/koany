import { View, Text } from '@tarojs/components';
import React from 'react';

const blockName = `koany-popup`;

export interface PopupProps {
  zIndex?: number;
  title?: string;
  rule?: string;
  onClose?: () => void;
  onClickRule?: () => void;
}

const Popup: React.FC<PopupProps> = ({
  zIndex,
  title,
  rule,
  onClose,
  onClickRule,
  children
}) => {

  const handleClose = () => {
    onClose && onClose();
  }
  const handleClickRule = () => {
    onClickRule && onClickRule();
  }

  return (
    <View className={`${blockName}`} catchMove>
      <View className={`${blockName}__mask`} style={`${zIndex && `z-index:${zIndex};`}`} catchMove></View>
      <View className={`${blockName}__wrap`} style={`${zIndex && `z-index:${zIndex};`}`} catchMove>
        {
          title && (
            <View className={`${blockName}__title`}>
              <Text className={`${blockName}__text`}>{title}</Text>
              { rule && <View onClick={handleClickRule} className={`${blockName}__rule`}>使用规则</View> }
              <View className={`${blockName}__close`} onClick={handleClose}></View>
            </View>
          )
        }
        <View className={`${blockName}__content`} style={`${zIndex && `z-index:${zIndex+1};`}`} catchMove>
          {children}
        </View>
      </View>
    </View>
  )
}

export default Popup
