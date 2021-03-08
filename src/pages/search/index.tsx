import React, { Fragment, useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { Back2Top, NavBar, Icon, ErrRetry } from '@/components';
import { useNavInfo } from '@/hooks'
import SearchBar from './components/search-bar'
import FilterBar from './components/filter-bar/index';
import FilterPanel from './components/filter-panel'
import GoodsList from './components/goods-list/index';

const blockName = 'koany-search'

const goodsList = [
  {
    id: 1,
    title: '瑞视达T1手机投影仪家用迷你全高清微型便携式无线3D家庭影院无屏电视办公迷你小型投影机支持1080P 无需网络同屏',
    imageUrl: 'https://img12.360buyimg.com/n2/s308x308_jfs/t1/152065/1/13661/68185/5ff567c5Edccf0fbe/3a3baaa9fd67bde3.jpg',
    tags: {
      price: [],
      title: [],
      picture: []
    },
    price: {
      value: ["299", "00"]
    },
    attrs: []
  },
  {
    id: 2,
    title: '佳能（Canon）EOS M50 微单相机  数码相机 微单套机 白色（15-45 微单镜头）Vlog相机 4K 视频拍摄',
    imageUrl: 'https://img13.360buyimg.com/n2/s240x240_jfs/t17254/247/1079311004/85545/19fdd9de/5abb066fN292999fd.jpg',
    tags: {
      price: [],
      title: [],
      picture: []
    },
    price: {
      value: ["4699", "00"]
    },
    attrs: []
  },
  {
    id: 3,
    title: 'BUBM 记忆棉鼠标垫护腕女手腕垫手托小号可爱创意简约硅胶笔记本电脑鼠标腕托滑鼠垫护手护腕垫男 JSM-B灰色',
    imageUrl: 'https://img14.360buyimg.com/n2/s240x240_jfs/t1/72452/30/2348/259404/5d09fc68Ec6a60d88/83a75ff27da79c58.jpg',
    tags: {
      price: [],
      title: [],
      picture: []
    },
    price: {
      value: ["29", "00"]
    },
    attrs: []
  },
  {
    id: 4,
    title: '卡罗特 CaROTE麦饭石不粘锅平底锅牛排煎锅煎饼锅煎蛋锅燃气灶电磁炉通用28cm',
    imageUrl: '//img14.360buyimg.com/n2/s270x270_jfs/t1/146805/36/1982/190967/5efee573E24eae58f/c9a21ab1abff7c4b.jpg',
    tags: {
      price: [],
      title: [],
      picture: []
    },
    price: {
      value: ["129", "00"]
    },
    attrs: []
  }
]


export default (): React.ReactNode => {
  const [navInfo] = useNavInfo();
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filterPanelVisible, setFilterPanelVisible] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [listMode, setListMode] = useState(1);
  const header: any = {
    height: 82
  };
  const isError = false;
  const relatedKeys = [];

  const handleSearchActive = (activeParam: boolean) => {
    console.log('active', activeParam);
    setIsActive(activeParam);
  }
  const handleSearch = (word: string) => {
    setKeyword(word);
    setIsActive(false);
  }
  const handleChangeMode = () => {
    if (listMode === 2) {
      setListMode(1);
    } else {
      setListMode(2);
    }
  }
  const handleFilter = () => {}
  const handleShowFilterPanel = () => {
    setFilterPanelVisible(true);
  }
  const handleHideFilterPanel = () => {
    setFilterPanelVisible(false);
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
        <FilterBar onMoreFilter={handleShowFilterPanel}>
          {
            navInfo.isSupportNav && (
              <View className="flex items-center" style={{ margin: `6px 6px 0` }} onClick={handleChangeMode}>
                {
                  listMode === 2 && (
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
      <FilterPanel
        visible={filterPanelVisible}
        navHeight={navInfo.navHeight}
        onHideMorePanel={handleHideFilterPanel}/>
      {
        !header.fixed && (
          <View style={{ height: `${header.height + navInfo.navHeight}px` }}></View>
        )
      }
      <Fragment>
        <GoodsList list={goodsList} listMode={listMode}></GoodsList>
        {
          !loading && <View className="nomore">抱歉, 没有更多商品啦~</View>
        }
        {
          loading && <View className="search-loading"></View>
        }
        {
          !loading && <View className="pagination"></View>
        }
        { isError && <ErrRetry></ErrRetry> }
        {
          !loading &&(!goodsList || !goodsList.length) && (
            <View className="search-empty">
              <View className="text">抱歉！暂无相关商品</View>
            </View>
          )
        }
        {
          !loading &&(relatedKeys && relatedKeys.length > 0) && (
            <View className="related-keys">
              <View className="title">换个词搜搜</View>
              <View className="content"></View>
            </View>
          )
        }
      </Fragment>
      <View style={{ height: navInfo.navHeight }}></View>
      <View className="horn"></View>
      <Back2Top></Back2Top>
      <View className="sku-switch"></View>
    </View>
  )

}
