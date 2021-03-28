import { Icon } from '@/components';
import { View, Text } from '@tarojs/components';
import React, { useState } from 'react';
import './index.scss';
import { navigateTo } from '@/common';

const blockName = `koany-product-bottom-bar`;

export interface BottomBarProps {}

const BottomBar: React.FC<BottomBarProps> = () => {

  const tips: any = {
    content: ''
  }
  const cartInfo: any = {
    num: 10
  };

  const handleToCart = () => {
    navigateTo({
      url: '/pages/cart/index'
    })
  }
  const handleAddCart = () => {}
  const handleAddFavor = () => {}
  const handleJustBuy = () => {
    navigateTo({
      url: '/pages/order/confirm/index'
    })
  }
  const handleShare = () => {}
  return (
    <View className={`${blockName}`}>
      { tips && tips.content && <View className={`${blockName}__tips`}>{tips.content}</View> }
      <View className={`${blockName}__option`}>
        <View className={`${blockName}__option-box`}>
          <View onClick={handleShare} className={`${blockName}__option-item `}>
            <View className={`${blockName}__option-item-icon`}>
              <Icon size={20} type="share" />
            </View>
            <Text className={`${blockName}__option-item-text`}>分享</Text>
          </View>
          <View onClick={handleAddFavor} className={`${blockName}__option-item `}>
            <View className={`${blockName}__option-item-icon`}>
              <Icon size={20} type="favor" />
            </View>
            <Text className={`${blockName}__option-item-text`}>收藏</Text>
          </View>
          <View onClick={handleToCart} className={`${blockName}__option-item ${blockName}__cart`}>
            <View className={`${blockName}__option-item-icon`}>
              <Icon size={20} type="cart" />
            </View>
            <Text className={`${blockName}__option-item-text`}>购物车</Text>
            {
              cartInfo.num > 0 && <View className={`${blockName}__option-item-badge`}>{`${cartInfo.num > 99 ? '99+' : cartInfo.num}`}</View>
            }
            <View className={`badge-ani`}>{cartInfo.add ? `+${cartInfo.add}` : ''}</View>
          </View>
          <View onClick={handleAddCart} className={`${blockName}__option-item ${blockName}__btn ${blockName}__add-cart`}>
            加入购物车
          </View>
          <View onClick={handleJustBuy} className={`${blockName}__option-item ${blockName}__btn ${blockName}__just-buy`}>
            立即购买
          </View>
        </View>

      </View>
    </View>
  );
};


export default BottomBar;
