import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { useNavInfo } from '@/hooks'
import './index.scss'
import { NavBar } from '@/components'
import TopBanner from './components/top-banner'
import OrderItems from './components/order-items'
import OrderSummary from './components/order-summary'

const blockName = 'koany-order-detail'

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo()

  return (
    <View className={`${blockName}`}>
      <NavBar capsuleType="full" opacity={0} />
      <TopBanner navHeight={navInfo.navHeight} />
      <OrderItems />
      <OrderSummary />
    </View>
  )
}
