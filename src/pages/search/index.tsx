import React, { Fragment, useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { Back2Top, NavBar, Icon } from '@/components'
import { useNavInfo } from '@/hooks'
import SearchBar from './components/search-bar'
import FilterBar from './components/filter-bar/index';

const blockName = 'koany-search'

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo();
  const [isActive, setIsActive] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [mode, setMode] = useState(0);

  const handleSearchActive = (activeParam: boolean) => {
    console.log('active', activeParam);
    setIsActive(activeParam);
  }
  const handleSearch = (word: string) => {
    setKeyword(word);
    setIsActive(false);
  }
  const handleChangeMode = () => {
    if (mode === 0) {
      setMode(1);
    } else {
      setMode(0);
    }
  }
  return (
    <View className={`${blockName}`}>
      <NavBar capsuleType="miniReturn">
        <SearchBar
          keyword={keyword}
          isActive={isActive}
          navHeight={navInfo.navHeight}
          onActive={handleSearchActive}
          onSearch={handleSearch}></SearchBar>
      </NavBar>
      <View className={`${blockName}__header ${blockName}__header-fixed`} style={{ marginTop: `${navInfo.navHeight}px` }}>
        {
          !navInfo.isSupportNav && (
            <SearchBar
              isActive={isActive}
              keyword={keyword}
              renderExtra={
                <View></View>
              }
              onActive={handleSearchActive}
              onSearch={handleSearch}
              renderAct={
                <View></View>
              }
            >
            </SearchBar>
          )
        }
        <FilterBar>
          {
            navInfo.isSupportNav && (
              <View className="flex items-center" style={{ margin: `6px 6px 0` }} onClick={handleChangeMode}>
                {
                  mode === 0 && (
                    <Icon size={20} type="cascades" />
                  ) || (
                    <Icon size={20} type="list" />
                  )
                }
              </View>
            )
          }
        </FilterBar>
      </View>

      <View className="filter-panel">

      </View>
      <Fragment>
        <View className="top-category"></View>
        <View className="search-tips"></View>
        <View className="goods-list"></View>
        <View className="nomore">抱歉, 没有更多商品啦~</View>
        <View className="search-loading"></View>
        <View className="pagination"></View>
        <View className="retry"></View>
        <View className="search-empty">
          <View className="text">抱歉！暂无相关商品</View>
        </View>
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
