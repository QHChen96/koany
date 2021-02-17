import React, { Fragment, useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { Back2Top, NavBar } from '@/components'
import { useNavInfo } from '@/hooks'
import SearchBar from './components/search-bar'

const blockName = 'koany-search'

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo();

  return (
    <View className={`${blockName}`}>
      <NavBar >
        <SearchBar></SearchBar>
      </NavBar>
      <View className="search-header">
        <View className="search-bar"></View>
        <View className="top-area"></View>
        <View className="filter-bar"></View>
      </View>
      <View className="filter-panel"></View>
      <Fragment>
        <View className="top-category"></View>
        <View className="search-tips"></View>
        <View className="goods-list"></View>
        <View className="nomore">抱歉, 没有更多商品啦~</View>
        <View className="search-loading"></View>
        <View className="pagination"></View>
        <View className="retry"></View>
        <View className="search-empty"></View>
        <View className="related-keys">
          <View className="title">换个词搜搜</View>
          <View className="content"></View>
        </View>
      </Fragment>
      <View style={{ height: navInfo.navHeight }}></View>
      <View className="quick-nav"></View>
      <View className="horn"></View>
      <Back2Top></Back2Top>
      <View className="sku-switch"></View>
    </View>
  )

}
