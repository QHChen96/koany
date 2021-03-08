import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { NavBar } from '@/components'
import { useNavInfo } from '@/hooks'
import './index.scss'
import SearchBar from './components/search-bar'
import OrderTabs from './components/order-tabs'
import OrderList from './components/order-list'

const blockName = 'koany-order'

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo()

  return (
    <View className={`${blockName}`}>
      <NavBar capsuleType="full" title="我的订单"></NavBar>
      <View style={{ marginTop: navInfo.navHeight }}>
        <SearchBar navHeight={navInfo.navHeight} />
        <OrderTabs />
        <View className={`${blockName}__container`}>
          <View className={`${blockName}__container-inner`}>
            <View className={`${blockName}__item`}>
              <OrderList />
            </View>
          </View>
        </View>
      </View>
    </View>
  )

}
