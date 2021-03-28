import React, { Fragment, useState, useEffect } from 'react'
import { View, Text, Image, Button  } from '@tarojs/components';
import { Icon, NavBar, SkuLayer } from '@/components';
import { useNavInfo } from '@/hooks';
import './index.scss'
import FocusSlide from './components/focus-slide';
import { usePageScroll, useReady } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import { SkuInfoEntity } from '@/components/sku-layer';
import BottomBar from './components/bottom-bar';
import Specific from './components/specific';
import { navigateTo } from '@/common';



const blockName = `koany-item`;

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo();
  const [isShowShare, setIsShowShare] = useState(false);
  const [navTabsShow, setNavTabsShow] = useState(false);
  const [isShowSkuLayer, setIsShowSkuLayer] = useState(false);
  const [screenInfo, setScreenInfo] = useState({
    windowHeight: 'auto',
    windowWidth: '100%'
  });
  const [customNavOpacity, setCustomNavOpacity] = useState(0);
  const [navBgOpa, setNavBgOpa] = useState<string>("0.00");
  const [navCur, setNavCur] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const searchBarHeight = navInfo.capsuleHeight ? navInfo.capsuleHeight : 32;
  const searchBarMarginTop = navInfo.capsuleMarginTop ? navInfo.capsuleMarginTop : 0;
  const isNotchScreen = (navInfo.navHeight - navInfo.mainContentHeight) >= 44 || "android" == navInfo.platform && (navInfo.navHeight - navInfo.mainContentHeight) > 24;

  useEffect(() => {
    const systemInfo = Taro.getApp().systemInfo;
    if (systemInfo) {
      setScreenInfo({
        windowHeight: `${systemInfo.windowHeight}px`,
        windowWidth: `${systemInfo.windowWidth}px`,
      });
    }
  }, [])

  const navTabs = [
    { name: '商品' },
    { name: '详情' },
    { name: '推荐' },
  ];

  const product: any = {
    priceInfo: {
      int: "100",
      decimal: "99"
    },
    // afterDiscount: {
    //   prevText: '',
    //   priceLabel: '折后',
    //   price: 19.9
    // }
    ad: {
      text: '【新年新气象】M1部分型号下单赠希捷1TB移动硬盘、绿联拓展坞、腾讯视频会员，以旧换新至高补贴3000元更多优惠请点击 '
    },
    title: 'Apple MacBook Pro 13.3 新款八核M1芯片 8G 256G SSD 深空灰 笔记本电脑 轻薄本 MYD82CH/A',
    skuName: '深空灰，新款八核M1芯片8G 256G',
    goodsNum: 1,
    address: '某某省某某市某某区某某街道',
    weightValue: '2.287kg',
    images:  [
      {
        imageUrl: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/125393/39/18221/47832/5fab078dEbc040aa5/590d4034236f65ef.jpg'
      }, {
        imageUrl: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/136152/21/15495/85147/5fab0790E6403ea7a/579cb58bd6e0b20c.jpg'
      }, {
        imageUrl: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/127809/11/18239/103587/5fab0792E8b18868e/9f3829930ccadfe2.jpg'
      }, {
        imageUrl: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/130487/20/15717/33301/5fab07b9Ec39bc30d/552e59206e4d701e.jpg'
      }, {
        imageUrl: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/131859/16/15567/37006/5fab07bcE7d64d0aa/ea0fd2e2ab0cf5d9.jpg'
      }
    ],
    intro: {
      content: [
        {
          type: 'img',
          imageUrl: '//img12.360buyimg.com/cms/jfs/t1/145164/13/13839/611488/5faafb07E60381b71/68e3c4ceb81a0e1e.jpg',
        },
        {
          type: 'img',
          imageUrl: '//img12.360buyimg.com/cms/jfs/t1/145164/13/13839/611488/5faafb07E60381b71/68e3c4ceb81a0e1e.jpg',
        }
      ],
      specs: {
        tips: '',
        packInfo: 'MacBook Pro 61W USB?C 电源适配器 USB-C 充电线 (2 米)三包凭证（保修卡）*1',
      },
      specifics: [
        {
          content: ['商品编号','1000000000']
        },
        {
          title: '显示器',
        },
        {
          content: ['屏幕尺寸', '13.3英寸'],
        },
        {
          content: ['物理分辨率', '2560 x 1600']
        }
      ]
    }
  };

  const handleChangeSku = () => {}
  const handleNavTabChange = (curIndex) => {
    setNavCur(curIndex);
  }
  const handleChangeNavBg = (top: number) => {
    const t = top > 0 ? top : 0;
    if (t <= 187) {
      setNavBgOpa((t / 187).toFixed(2));
    } else {
      Number(navBgOpa) <= 1 && setNavBgOpa("1");
    }
  }

  usePageScroll(res => {
    const top = res.scrollTop;
    handleChangeNavBg(top);
  });

  const handleToSearch = () => {
    navigateTo({
      url: `/pages/search/index`
    })
  }

  const handleSwitchSku = () => {
    setIsShowSkuLayer(true);
  }
  const handleCloseSkuLayer = () => {
    setIsShowSkuLayer(false);
  }

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
  }

  return (
    <View className={`${blockName}`}>
      <NavBar opacity={navBgOpa}>
        <View onClick={handleToSearch} className={`${blockName}__search-bar`} style={{ height: `${searchBarHeight}px`, marginTop: `${searchBarMarginTop}px` }}>
          <Icon size={16} className={`${blockName}__search-bar-icon`} type="search"/>
          <Text className={`${blockName}__search-bar-text`}>搜索商品</Text>
        </View>
      </NavBar>
      {
        navTabsShow && (
          <View >
            <View className={`${blockName}__nav-tab`} style={{ opacity: customNavOpacity, top: navInfo.navHeight }}>
              {
                navTabs.length > 0 && (
                  navTabs.map((tab, index) => (
                    <View onClick={() => handleNavTabChange(index)} className={`${blockName}__nav-tab-item ${navCur === index ? `${blockName}__nav-tab-item-cur` : ``}`} key={`item-nav-tab-item-${tab.name}`}>
                      <Text className={`${blockName}__nav-tab-text`}>{tab.name}</Text>
                    </View>
                  ))
                )
              }
            </View>
          </View>
        )
      }
      <View style={{ backgroundColor: '#f2f2f2' }}>
        <View>
          <View className={`${blockName}__detail`} style={{ top: `${scrollTop}px` }}>
            {/* { isNotchScreen && <View style={{ height: `${navInfo.statusBarHeight}px` }}></View> } */}
            <FocusSlide slideImages={product.images} isSupportNav={navInfo.isSupportNav} navHeight={navInfo.navHeight} statusBarHeight={navInfo.statusBarHeight} isNotchScreen={isNotchScreen} />
            <View className={`${blockName}__desc`}>
              <View className={`${blockName}__price common_margin_left common_padding_bottom`}>
                <View className={`${blockName}__price-area`}>
                  <View className={`${blockName}__price-main`}>
                    <View className={`${blockName}__price-main-content red`}>
                      {
                        !product.priceInfo && (
                          <Text className="empty">暂无定价</Text>
                        ) || (
                          <Fragment>
                            <Text className={`${blockName}__price-yen`}>￥</Text>{product.priceInfo.int}<Text className={`${blockName}__price-yen`}>.{product.priceInfo.decimal}</Text>
                          </Fragment>
                        )
                      }
                    </View>
                    {
                      product.afterDiscount && (
                        <View className={`${blockName}__after-discount`}>
                          {product.afterDiscount.prevText}
                          <Text className={`${blockName}__after-discount-mask`}>{product.afterDiscount.priceLabel}</Text>
                          <Text className={`${blockName}__after-discount-price`}>{product.afterDiscount.price}</Text>
                        </View>
                      )
                    }
                  </View>
                </View>
              </View>
              <View className={`${blockName}__title-container common_margin_left common_padding_bottom`}>
                <View className={`${blockName}__title`}>
                  <View className={`${blockName}__title-name common_padding_right`}>
                    <Text selectable>{product.title}</Text>
                  </View>
                </View>
              </View>
              {
                product.ad.text && (
                  <View className={`common_padding_bottom`}>
                    <View className={`${blockName}__ad common_margin_left common_padding_right line-2`}>
                      <Text className={`${blockName}__ad-text`}>{product.ad.text}</Text>
                    </View>
                  </View>
                )
              }
            </View>
            <View className={`${blockName}__choice margin_top`} >
              <View onClick={handleSwitchSku} className={`common_margin_left common_padding_column flex_col`} style={{ minHeight: 21 }}>
                <View className="flex_row">
                  <Text className="flex_l common_floor_title">已选</Text>
                  <Text className="flex_c line1 common_content_text" >{product.skuName}, {product.goodsNum}个</Text>
                  <View className="item-more" >
                    <Icon type="right" />
                  </View>
                </View>
              </View>
              <View className="common_margin_left split-line"></View>
              <View className="common_margin_left common_padding_column" >
                <View className="flex_row">
                  <Text className="flex_l common_floor_title">送至</Text>
                  <Text className="flex_c line1 common_content_text" >{product.address}</Text>
                  <View className="item-more" >
                    <Icon type="right" />
                  </View>
                </View>
              </View>
              {/* {
                product.weightValue && (
                  <Fragment>
                    <View className="common_margin_left split-line"></View>
                    <View className="common_margin_left common_padding_column" >
                      <View className="flex_row">
                        <Text className="flex_l common_floor_title">重量</Text>
                        <Text className="flex_c line1 common_content_text" >{product.weightValue}</Text>
                      </View>
                    </View>
                  </Fragment>
                )
              } */}
            </View>
            <Specific intro={product.intro} />
            <View className={`${blockName}__bottom`}></View>
          </View>
          <BottomBar />
        </View>
      </View>
      <SkuLayer show={isShowSkuLayer} onClose={handleCloseSkuLayer} info={skuInfo}></SkuLayer>
      {
        isShowShare && (
          <View>
            <View></View>
            <View>
              <Button>分享商品给好友</Button>
              <View>生成分享海报</View>
              <View>取消</View>
            </View>
          </View>
        )
      }
    </View>
  )

}

