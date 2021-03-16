import React, { useState } from "react";
import { View, Image, Map, Text, Input } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";

const blockName = `koany-order-detail-bottom`;

export interface OrderBottomProps {
}


const OrderBottom = ({
}: OrderBottomProps) => {

  const handles = [
    {
      name: '再次购买',
      btnStyle: 'red'
    },
    {
      name: '退款/售后',
      btnStyle: 'white'
    }
  ]
  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__placeholder`}></View>
      <View className={`${blockName}__container`}>
        <View className={`${blockName}__btns`}>
          {
            handles.map(item => (
              <View className={`${blockName}__btn ${blockName}__btn-${item.btnStyle}`}>
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
