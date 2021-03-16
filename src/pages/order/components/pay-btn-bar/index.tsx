import React, { useState } from "react";
import { View, Text } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";

const blockName = `koany-order-pay-btn-bar`;

export interface PayBtnBarProps {
  money: number;
}
export interface PayTypeEntity {
  title: string;
  type: string;
  icon: string;
  subTitle: string;
}

export type PayTypeMap = Record<string, PayTypeEntity>;


const defaultPayList: PayTypeEntity[] = [
  {
    title: '微信支付',
    type: 'wxpay',
    icon: 'weixinzhifu',
    subTitle: ''
  },
  {
    title: '支付宝',
    type: 'zfb',
    icon: 'zhifubao',
    subTitle: ''
  }
];

const PayBtnBar = ({
  money,

}: PayBtnBarProps) => {
  const [payList, setPayList] = useState(defaultPayList);
  const [selectedPay, setSelectedPay] = useState<PayTypeEntity>({
    title: '微信支付',
    type: 'wxpay',
    icon: 'weixinzhifu',
    subTitle: ''
  });
  const [payTypeMap, setPayTypeMap] = useState<PayTypeMap>({});

  useState(() => {
    const payMap = payList.reduce((ret, val) => {
      return { ...ret, [val.type]: val };
    }, {});
    setPayTypeMap(payMap);
  })

  let isCanPay = false;

  const handleSelectPay = (payType: string) => {
    setSelectedPay(payTypeMap[payType]);
  }
  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__pay-container`}>
        <View className={`${blockName}__pay-type-list`}>
          {
            payList.map(item => (
              <View className={`${blockName}__pay-type-item`} key={`order-confirm-pay-type=${item.type}`} onClick={() => handleSelectPay(item.type)}>
                <View className={`${blockName}__pay-type-name`}>
                  <Icon className={`${blockName}__pay-type-icon`} color={`green`} type={item.icon} />
                  {item.title}
                </View>
                <View className={`${blockName}__pay-type-tips`}>{item.subTitle}</View>
                <View className={`checkbox ${ selectedPay && selectedPay.type === item.type ? `checkbox--checked` : '' }`}></View>
              </View>
            ))
          }
          { }
          <View className={`${blockName}__pay-type-more`}>更多支付方式</View>
        </View>
      </View>
      <View className={`${blockName}__fixed-pay-bar`}>
        <View className={`${blockName}__fixed-pay-bar-inner`}>
          <View className={`${blockName}__fixed-pay-bar-content`}>
            <View className={`${blockName}__pay-title`}>
              总计: <Text className={`${blockName}__pay-price`}>￥{money}</Text>
            </View>
          </View>
          <View className={`${blockName}__fixed-pay-bar-btn`}>
            {
              money === 0 ? `提交订单` : `${selectedPay.title}`
            }
          </View>
        </View>
      </View>
    </View>
  )
}

export default PayBtnBar;
