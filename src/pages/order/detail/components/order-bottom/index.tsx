import React from "react";
import { View } from '@tarojs/components';
import './index.scss';
import { navigateTo } from "@/common";

const blockName = `koany-order-detail-bottom`;

export interface OrderBottomProps {
}


const OrderBottom = ({
}: OrderBottomProps) => {

  const handles = [
    {
      name: '再次购买',
      type: 're-buy',
      btnStyle: 'red'
    },
    {
      name: '退款/售后',
      btnStyle: 'white'
    }
  ];

  const handleAction = (btn: any) => {
    if (btn.type === 're-buy') {
      navigateTo({
        url: '/pages/order/confirm/index'
      })
    }
  }
  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__placeholder`}></View>
      <View className={`${blockName}__container`}>
        <View className={`${blockName}__btns`}>
          {
            handles.map(item => (
              <View className={`${blockName}__btn ${blockName}__btn-${item.btnStyle}`} onClick={() => handleAction(item)}>
                {item.name}
              </View>
            ))
          }
          {
            handles.length > 3 && (
              <View className={`${blockName}__btn-more`}>
                更多
              </View>
            )
          }
        </View>
      </View>
    </View>
  )
}

export default OrderBottom;
