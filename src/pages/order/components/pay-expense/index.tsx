import React from "react";
import { View, Text } from '@tarojs/components';
import './index.scss';

const blockName = `koany-order-pay-expense`;

export interface PayExpenseProps {
  goodsPrice: number;
  freight?: number;
  totalPrice?: number;
}

const PayExpense = ({
  goodsPrice,
  freight=0,
  totalPrice=0
}: PayExpenseProps) => {

  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__item`}>
        <View className={`${blockName}__item-name`}>商品总额</View>
        <View className={`${blockName}__item-content`}>
          <Text className={`${blockName}__item-content-price black`}>￥{goodsPrice}</Text>
        </View>
      </View>
      <View className={`${blockName}__item`}>
        <View className={`${blockName}__item-name`}>运费</View>
        <View className={`${blockName}__item-content`}>
          {
            freight === 0 && (
              <Text className={`${blockName}__item-content-price red`}>免运费</Text>
            ) || (
              <Text className={`${blockName}__item-content-price black`}>￥{freight}</Text>
            )
          }
        </View>
      </View>
      <View className={`${blockName}__item ${blockName}__sum`}>
        <View className={`${blockName}__item-name`}></View>
        <View className={`${blockName}__item-content `}>
          总计：
          <Text className={`${blockName}__price`}>
            <Text className={`${blockName}__total-price`}>￥{totalPrice}</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default PayExpense;
