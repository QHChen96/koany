import React, { useState } from "react";
import { View, Image, Map, Text, Input } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";

const blockName = `koany-order-detail-summary`;

export interface OrderSummaryProps {
}


const OrderSummary = ({
}: OrderSummaryProps) => {
  const [open, setIsOpen] = useState(false);

  const order = {
    totalPriceTitle: '实付金额：',
    totalPrice: "￥100",
    totals: [
      {
        title: '商品总额',
        money: "￥100"
      },
      {
        title: '运费',
        money: "￥0"
      },
    ]
  }
  const summaryList = [
    {
      title: '订单编号',
      content: '10000000000'
    },
    {
      title: '下单时间',
      content: '2021-03-08 22:00:00'
    },
    {
      title: '支付时间',
      content: '2021-03-08 22:00:00'
    }
  ];

  const handleChangeOpen = () => {
    setIsOpen(!open)
  }
  return (
    <View className={`${blockName}`}>
      {
        open && (
          <View className={`${blockName}__container`}>
            <View className={`${blockName}__order-summary`}>
              {
                summaryList.map(summary => (
                  <View className={`${blockName}__order-summary-line`}>
                    <Text className={`${blockName}__order-summary-title`}>{summary.title}</Text>
                    <View className={`${blockName}__order-summary-content`}>
                      {summary.content}
                    </View>
                  </View>
                ))
              }
            </View>
            <View className={`${blockName}__total`}>
              {
                order.totals.map(item => (
                  <View className={`${blockName}__total-item`}>{item.title}
                    <Text className={`${blockName}__total-price`}>{item.money}</Text>
                  </View>
                ))
              }
              <View className={`${blockName}__total-bottom`}>
                {order.totalPriceTitle}
                <Text className={`${blockName}__total-price`}>{order.totalPrice}</Text>
              </View>
            </View>
            <View className={`${blockName}__more`} onClick={handleChangeOpen}>
              <View className={`${blockName}__more-text`}>收起详细信息</View>
              <Icon className={`${blockName}__more-icon`} type="fold" size={13} />
            </View>
          </View>
        ) || (
          <View className={`${blockName}__container`}>
            <View className={`${blockName}__order-summary`}>

              <View className={`${blockName}__order-summary-line`}>
                <Text className={`${blockName}__order-summary-title`}>{summaryList[0].title}</Text>
                <View className={`${blockName}__order-summary-content`}>
                  {summaryList[0].content}
                  <View className={`${blockName}__copy`}>复制</View>
                </View>
                <View className={`${blockName}__inline-total`}>
                  {order.totalPriceTitle}
                  <Text className={`${blockName}__inline-price`}>{order.totalPrice}</Text>
                </View>
              </View>
            </View>
            <View className={`${blockName}__more`}>
              <View className={`${blockName}__more-text`} onClick={handleChangeOpen}>
                展开详细信息
              </View>
              <Icon className={`${blockName}__more-icon`} type="unfold" size={13} />
            </View>
          </View>
        )
      }
    </View>
  )
}

export default OrderSummary;
