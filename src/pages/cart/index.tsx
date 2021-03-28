import React, { Fragment, useRef, useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { NavBar, ErrRetry, Loading, Back2Top, PullRefresh, Icon, SkuLayer } from '@/components'
import { useNavInfo } from '@/hooks'
import BottomBar from './components/bottom-bar'
import CartProduct from './components/cart-product'
import TopBar from './components/top-bar'
import { getApp, usePageScroll } from '@tarojs/taro'
import { navigateTo } from '@/common'

const blockName = `koany-cart`;

export interface CartEntity {
  id: number;
  products: any[];
}

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo();
  const [editable, setEditable] = useState(false);
  const [addrFixed, setAddrFixed] = useState(false);
  const [showSkuLayer, setShowSkuLayer] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [pullRefreshStatus, setPullRefreshStatus] = useState('');
  const [back2TopVisabled, setBack2TopVisabled] = useState(false);
  const scrollTopRef = useRef(0);
  const noLogin = false;
  const isError = false;
  const isEmpty = false;

  const summary: any = {
    price: 50681.96
  };
  const address: string = '某某省某某市';
  const vender: any = {
    id: 1,
    name: '一个店',
    checkedAll: false,
    list: [
      {
        id: 1,
        products: [
          {
            id: 1,
            image: 'https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/139577/21/11787/471487/5f927d03Ea21203de/5ecca00d0b6169df.png',
            name: '我是一本书',
            cashBack: 0,
            margin: 0,
            labels: [],
            ext: {

            },
            hidePrice: false,
            showPrice: [ 100, 2 ],
            crossedPrice: 100,
            num: 10,
            mainSku: {
              minBuyNum: 1,
              maxBuyNum: 10,
              skuName: '颜色: 白'
            },
          },
          {
            id: 2,
            image: 'https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/139577/21/11787/471487/5f927d03Ea21203de/5ecca00d0b6169df.png',
            name: '我是一本书',
            cashBack: 10.01,
            margin: 10.01,
            labels: [],
            ext: {

            },
            hidePrice: false,
            showPrice: [ 100, 2 ],
            crossedPrice: 100,
            num: 10,
            mainSku: {
              minBuyNum: 1,
              maxBuyNum: 10,
              skuName: '颜色: 白'
            },
          },
          {
            id: 3,
            image: 'https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/139577/21/11787/471487/5f927d03Ea21203de/5ecca00d0b6169df.png',
            name: '我是一本书',
            cashBack: 10.01,
            margin: 10.01,
            labels: [],
            ext: {

            },
            hidePrice: false,
            showPrice: [ 100, 2 ],
            crossedPrice: 100,
            num: 10,
            mainSku: {
              minBuyNum: 1,
              maxBuyNum: 10,
              skuName: '颜色: 白'
            },
          },
          {
            id: 4,
            image: 'https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/139577/21/11787/471487/5f927d03Ea21203de/5ecca00d0b6169df.png',
            name: '我是一本书',
            cashBack: 10.01,
            margin: 10.01,
            labels: [],
            ext: {

            },
            hidePrice: false,
            showPrice: [ 100, 2 ],
            crossedPrice: 100,
            num: 1,
            mainSku: {
              minBuyNum: 1,
              maxBuyNum: 10,
              skuName: '颜色: 白'
            },
          },
          {
            id: 5,
            image: 'https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/139577/21/11787/471487/5f927d03Ea21203de/5ecca00d0b6169df.png',
            name: '我是一本书',
            cashBack: 10.01,
            margin: 10.01,
            labels: [],
            ext: {

            },
            hidePrice: false,
            showPrice: [ 100, 2 ],
            crossedPrice: 100,
            num: 10,
            mainSku: {
              minBuyNum: 1,
              maxBuyNum: 10,
              skuName: '颜色: 白'
            },
          }
        ]
      }
    ]
  };

  const skuInfo: SkuInfoEntity = {
    imageUrl: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/125393/39/18221/47832/5fab078dEbc040aa5/590d4034236f65ef.jpg',
    discountInfo: {
      discountName: '折后',
      price: {
        integer: "199",
        decimal: "99"
      }
    },
    goodsNum: 1,
    skuName: '天空灰',
    price: {
      integer: "299",
      decimal: "99"
    },
    originalPrice: {
      integer: "1999",
      decimal: "99"
    },
    stock: 10,
    skuProps: [
      {
        title: '颜色',
        skuPropValues: [
          {
            name: '白色',
            checked: true
          },
          {
            name: '红色'
          }
        ]
      },
      {
        title: '尺码',
        skuPropValues: [
          {
            name: '大',
            checked: true
          },
          {
            name: '小'
          }
        ]
      },
      {
        title: '尺码',
        skuPropValues: [
          {
            name: '大',
            checked: true
          },
          {
            name: '小'
          }
        ]
      },
      {
        title: '尺码',
        skuPropValues: [
          {
            name: '大',
            checked: true
          },
          {
            name: '小'
          }
        ]
      },
      {
        title: '尺码',
        skuPropValues: [
          {
            name: '大',
            checked: true
          },
          {
            name: '小'
          }
        ]
      },
      {
        title: '尺码',
        skuPropValues: [
          {
            name: '大',
            checked: true
          },
          {
            name: '小'
          }
        ]
      }
    ]
  };


  const handleFavorite = () => {}
  const handleGotoPay = () => {
    navigateTo({
      url: '/pages/order/confirm/index'
    })
  }
  const handleEditCheck = () => {}
  const handleQuickClear = () => {}
  const handleRemove = () => {}
  const handlePageScroll = (e: any) => {
    setScrollIndex(e.scrollTop);
    toggleTarBarFixed(e);
  }
  const handleTouchStart = () => {}
  const handleTouchEnd = () => {}
  const handleTouchMove = () => {}
  const handlePullRefreshClose = () => {
    setPullRefreshStatus('');
  }
  const handlePullRefreshOpen = () => {
    setPullRefreshStatus('open');
  }
  const handlePullRefresh = () => {
    setPullRefreshStatus('loading');
  }
  const handlePageTouchStart = () => {}
  const handlePageTouchEnd = () => {}
  const handlePageTouchMove = () => {}
  const handleEdit = () => {
    setEditable(!editable);
  }
  const toggleBack2Top = (e: any) => {
    const flag = e.scrollTop > (1 * getApp().systemInfo.screenHeight || 667);
    const r = back2TopVisabled !== flag;
    r && setBack2TopVisabled(flag)
    return !!r && flag;
  }
  const toggleTarBarFixed = (e: any) => {
    const scrollTop = e.scrollTop;
    const isTop = Math.abs(scrollTop - scrollTopRef.current) > 5;
    const isFixed = scrollTop < scrollTopRef.current && scrollTop > 100;
    const n = !editable && isFixed != addrFixed && isTop

    if (editable) {
      addrFixed && (scrollTopRef.current = 9999999);
      !addrFixed && (scrollTopRef.current = 0);
    } else {
      isTop && setAddrFixed(isFixed);
      isTop && (scrollTopRef.current = scrollTop);
      n && (isFixed !== addrFixed) && (setAddrFixed(n));
    }
  }

  usePageScroll(res => {
    handlePageScroll(res);
  });

  const handleChangeSku = () => {
    setShowSkuLayer(true);
  }

  const handleCloseSkuLayer = () => {
    setShowSkuLayer(false);
  }


  return (
    <View className={`${blockName} relative`}>
      <NavBar capsuleType="none">
        <View className="relative" style={{ marginTop: `${/ios/i.test(navInfo.platform) ? 4 : 8}px` }}>
          <Text className="font-medium " style={{ lineHeight: `${navInfo.capsuleHeight}px`, marginLeft: `${navInfo.capsuleWidth + navInfo.capsuleMarginLeft}px`, fontSize: `34rpx`, color: ` #000` }}>购物车</Text>
        </View>
      </NavBar>
      <PullRefresh
        enable={true}
        height={navInfo.mainContentHeight > 0 ? navInfo.mainContentHeight : 44 }
        marginTop={navInfo.statusBarHeight}
        onScroll={handlePageScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onOpen={handlePullRefreshOpen}
        onClose={handlePullRefreshClose}
        onLoading={handlePullRefresh}
        />
      <View style={{ height: navInfo.navHeight }}></View>
      <View className="z-10" onTouchStart={handlePageTouchStart} onTouchEnd={handlePageTouchEnd} onTouchMove={handlePageTouchMove}>
        <TopBar className="z-10" onEdit={handleEdit} addrFixed={false} editable={editable} navHeight={navInfo.navHeight} hidden={false}>
          <View className="inline-block" style={{ marginRight: `12rpx` }}>
            <Icon type="location" size={14} />
          </View>
          {address}
        </TopBar>
        {/* <Horn /> */}
        {
          noLogin && (
            <View>nologin 空</View>
          ) || (
            <Fragment>
              { isError && <ErrRetry /> }
              { isEmpty && (
                  <View>
                    <View></View>
                    <View>购物车空空如也, 去逛逛吧</View>
                  </View>
                )
              }
              <Fragment key={`cart-vender-item-${vender.id}`}>
                <View
                  className="vender bg-white w-full"
                  style={{ marginTop: `20rpx`, padding: `36rpx 0`, fontSize: `26rpx`, color: `#262626`, borderRadius: `20rpx` }}>
                  <View className="header w-full black-26 flex items-center" style={{ top: `calc(${addrFixed ? `88rpx + ` : `0px + `}${navInfo.navHeight}px)` }}>
                    <View className="inline-block" style={{ paddingLeft: `36rpx`, paddingRight: `18rpx` }}>
                      <View className={`checkbox ${vender.checkedAll ? `checkbox--checked` : ''}`}></View>
                    </View>
                    <View className="icon inline-block" style={{ marginLeft: `8rpx` }}></View>
                    <View className="name inline-block font-medium">{vender.name}</View>
                  </View>
                  <View className="freight"></View>
                  {
                    vender.list.map((item, index) => (
                      <View className={`goods-group ${index <= 0 ? 'first' : ''}`} key={`goods-group-${item.id}`} >
                        <View className="products">
                          {
                            item.products.map(product => (
                              <CartProduct onChangeSku={handleChangeSku} editable={editable} product={product} key={`cart-product-${product.id}`} />
                            ))
                          }
                        </View>
                      </View>
                    ))
                  }
                </View>
                <Loading btnLoading />
              </Fragment>
            </Fragment>
          )
        }
        <BottomBar summary={summary} editable={editable} hidden={false} onEditCheck={handleEditCheck} onFavorite={handleFavorite} onGotoPay={handleGotoPay}  onQuickClear={handleQuickClear} onRemove={handleRemove} />
        <View className="placeholder"></View>
      </View>
      <Loading showLoading={false} pageLoading />
      <Back2Top />
      <SkuLayer onClose={handleCloseSkuLayer} show={showSkuLayer} info={skuInfo} supportTab={false} />
    </View>
  );
}

