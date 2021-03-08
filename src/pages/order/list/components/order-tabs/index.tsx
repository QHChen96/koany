import React, { Fragment, useState } from "react";
import { View, Text, Image } from '@tarojs/components';
import './index.scss';

const blockName = `koany-order-tabs`;

export interface OrderTabsProps {
  navHeight?: number;
  currentType?: number;
}

const OrderTabs = ({
  navHeight=0,
  currentType=1
}: OrderTabsProps) => {

  const [type, setType] = useState(currentType);

  const tabs = [
    {
      type: 1,
      name: '全部'
    },
    {
      type: 2,
      name: '待支付'
    },
    {
      type: 3,
      name: '待发货'
    },
    {
      type: 4,
      name: '待收货'
    },
    {
      type: 5,
      name: '已完成'
    }
  ]

  const changeCurTab = (paramsType: number) => {
    setType(paramsType);
  }
  return (
    <Fragment>
      <View className={`${blockName}`}>
        <View className={`${blockName}__inner`}>
          <View className={`${blockName}__nav`}>
            {
              tabs.map(item => (
                <View onClick={() => changeCurTab(item.type)} className={`${blockName}__nav-item ${item.type === type ? `${blockName}__nav-item`:''}`} key={`order-tabs-item-type-${item.type}`}>
                  <View className={`${blockName}__nav-item-link`}>{item.name}</View>
                </View>
              ))
            }
          </View>
        </View>
      </View>
    </Fragment>
  )
}

export default OrderTabs;
