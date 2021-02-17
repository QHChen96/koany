import React, { useState } from 'react'
import { View, Text, ScrollView, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import { Icon, Loading, NavBar, ErrRetry } from '@/components'
import TabNav from './components/tab-nav'
import { useNavInfo } from '@/hooks'
import CateBanner from './components/cate-banner'

const blockName = `koany-cate`;

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo();
  
  const [level1ScrollTop, setLevel1ScrollTop] = useState(0);
  const [level2ScrollTop, setLevel2ScrollTop] = useState(0);
  const [searchWordIdx, setSearchWordIdx] = useState(0);

  const [curIdx, setCurIdx] = useState(0);
  const tabNavs = [
    { id: 1, name: '热门推荐' },
    { id: 2, name: '袜子' },
    { id: 3, name: '帽子' },
    { id: 4, name: '裤子' },
    { id: 5, name: '衣服' },
    { id: 6, name: '围巾' },
    { id: 7, name: '男装' },
    { id: 8, name: '女装' },
    { id: 9, name: '男鞋' },
    { id: 10, name: '女鞋' },
  ];
  const cateList: any[] = [
    { id: 11, keyword: '畅销推荐', cateList: [{ id: 111, name: '棉服', image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg' }, { id: 112, name: 'T恤', image: 'https://img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg' }, { id: 113, name: '风衣', image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg' }] },
    { id: 12, keyword: '潮流前线', cateList: [{ id: 121, name: '卫衣', image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg' }, { id: 122, name: '牛仔裤', image: 'https:////img20.360buyimg.com/focus/s140x140_jfs/t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg' }] },

  ];
  const searchWords: string[] = ['衣服', '零食', '牛牛牛'];
  const error = { isError: false, errMsg: '出错了' };

  const banners = [{
    id: 1,
    image: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/164494/30/5676/266349/601d786fEe829ccdc/2d3058069b0d6da8.jpg'
  }, {
    id: 2,
    image: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/125045/29/15943/280309/5f90cd04E1da92468/7f6a4ff47534dd06.jpg'
  }, {
    id: 3,
    image: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/166015/29/6464/93282/601d0a14E08a4758b/8a2f6cb573ac57e6.jpg'
  }]

  const handleTabClick = () => {}
  const handleScroll = () => {}
  const handleTouchStart = () => {}
  const handleTouchEnd = () => {}
  const handleTouchMove = () => {}
  const handleSearchBar = () => {}


  return (
    <View className={`${blockName}`}>
      <NavBar capsuleType="none">
        <View className={`${blockName}-nav inline-block h-full`}>
          <View className={`${blockName}-nav__row flex flex-row items-center h-full`}>
            <View className={`${blockName}-nav__title text-center font-medium`} style={{ fontSize: `32rpx`, width: `75rpx`, margin: `0 42rpx 0 22rpx` }}>分类</View>
            <View onClick={handleSearchBar} className={`${blockName}-nav__search-bar bg-black text-center bg-opacity-5 flex item-center opacity-65`} style={{ fontSize: `28rpx`, width: `360rpx`, borderRadius: `32rpx`, height: `64rpx`, lineHeight: `64rpx` }}>
              <View className={`${blockName}-nav__search-bar-icon inline-block self-center item-center`} style={{ marginLeft: `24rpx`, marginRight: `16rpx`, paddingTop: `6rpx` }}>
                <Icon type="search" />
              </View>
              <View className={`${blockName}-nav__search-bar-words block flex-1 overflow-hidden pointer-events-none`}>
                <Swiper className={`h-full w-full block overflow-hidden overflow-ellipsis whitespace-nowrap w-full`} style={{ height: `62rpx` }} current={searchWordIdx} circular vertical indicatorDots={false} duration={1000}>
                  {
                    searchWords.map(searchWord => (
                      <SwiperItem key={`cate-search-word-${searchWord}`}>
                        <View className={`overflow-hidden block overflow-ellipsis whitespace-nowrap text-left`}>{searchWord}</View>
                      </SwiperItem>
                    ))
                  }
                </Swiper>
              </View>
            </View>
          </View>
        </View>
      </NavBar>
      <View className="absolute r-0 b-0 l-0 bg-white" style={{ top: navInfo.navHeight }}>
        <TabNav onClick={handleTabClick} curIdx={curIdx} scrollTop={level1ScrollTop} tabNavs={tabNavs}></TabNav>
        <ScrollView className="absolute r-0 b-0 t-0" style={{ width: `570rpx` }} onScroll={handleScroll} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} scrollY={true} scrollTop={level2ScrollTop} enableBackToTop>
          <View className="relative" style={{ top: `50%` }}>
            <Loading showLoading={false} />
          </View>
          {
            error.isError && (
              <View className="err-tips">
                <ErrRetry errMsg={error.errMsg} />
              </View>
            )
          }
          <View className="relative min-h-full box-border" style={{ padding: `0 0 80rpx 24rpx` }}>
            {/* <View className="flex overflow-hidden items-center box-border" style={{ height: `66rpx`, padding: `40rpx 0` }}></View> */}
            <CateBanner entries={banners} />
            <View style={{ marginTop: `24rpx`, marginRight: `24rpx` }}>
              {
                cateList.map((item, cateIdx) => (
                  <View style={{ borderRadius: `24rpx`, boxShadow: `0rpx 10rpx 20rpx 0rpx rgba(0,0,0,.03)`, marginBottom: cateIdx === (item.length - 1) ? 0 : '24rpx' }} key={`cate-item-${item.id}`}>
                    <View className="font-bold" style={{ fontSize: `26rpx`, lineHeight: `26rpx`, padding: `24rpx 0 12rpx 24rpx` }}>{item.keyword}</View>
                    <View className="flex flex-wrap" style={{ padding: `0 3rpx` }}>
                      {
                        item.cateList.map(subItem => (
                          <View className="relative box-border text-center overflow-hidden" style={{ width: `33.33%`, padding: `12rpx 21rpx 24rpx` }} key={`sub-cate-item-${subItem.id}`}>
                            {/* <View></View> */}
                            <View className="relative" style={{ paddingTop: `100%` }}>
                              <Image className="absolute t-0 l-0 w-full h-full" lazyLoad mode="aspectFill" src={subItem.image} />
                            </View>
                            <View className="font-bold" style={{ marginTop: `12rpx`, lineHeight: `22rpx`, fontSize: `22rpx` }}>{subItem.name}</View>
                          </View>
                        ))
                      }
                     
                    </View>
                  </View>
                ))
              }
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )

}

