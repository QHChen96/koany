import React, { useState } from 'react';
import { Image, View, Text, ScrollView } from '@tarojs/components';
import './index.scss';
import classnames from 'classnames';

const blockName = `koany-cart-sku`;

export interface SkuPopupProps {
  show?: boolean;
  info?: SkuPopupEntity;
}

export interface SkuPopupEntity {
  imageUrl: string;
  price: {
    integer: number;
    decimal: string;
  }
}

const SkuPopup: React.FC<SkuPopupProps> = ({
  show,
  info
}) => {
  if (!show || !info) {
    return null;
  }

  const handleClose = () => {}

  return (
    <View className={classnames(`${blockName}`, `koany-popup`, show && `koany-popup-show`)} catchMove>
      <View onClick={handleClose} className="koany-popup__mask"></View>
      <View className="koany-popup__wrap">
        <View className="koany-popup__head">
          <Image className={`${blockName}__img`} mode="aspectFit" src={info.imageUrl} />
          <View className={`${blockName}__content`}>
            <View className={`${blockName}__price`}>
              ￥
              <Text>{info.price.integer}</Text>
              .{info.price.decimal}
            </View>
          </View>
          <View onClick={handleClose} className="koany-popup__head-close"></View>
        </View>
        <ScrollView scrollY className={"koany-popup__body"}>

        </ScrollView>
      </View>
    </View>
  );
}

export default SkuPopup;
