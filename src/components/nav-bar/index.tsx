import React, { useState, useEffect, useCallback } from 'react';
import { getCurrentPages } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components'
import NavBarBlackBack from '@/assets/images/navbar/navbar_back_black.png';
import NavBarWhiteBack from '@/assets/images/navbar/navbar_back_white.png';
import NavBarBlackHome from '@/assets/images/navbar/navbar_home_black.png';
import NavBarWhiteHome from '@/assets/images/navbar/navbar_home_white.png';
import NavBarBlackMenu from '@/assets/images/navbar/navbar_menu_black.png';
import NavBarWhiteMenu from '@/assets/images/navbar/navbar_menu_white.png';
import './index.scss';

import useNavInfo from '../../hooks/useNavInfo';
import Taro from '@tarojs/taro';

const blockName = 'koany-nav-bar';

const menuIcon = {
  'black-back': NavBarBlackBack,
  'white-back': NavBarWhiteBack,
  'black-home': NavBarBlackHome,
  'white-home': NavBarWhiteHome,
  'black-menu': NavBarBlackMenu,
  'white-menu': NavBarWhiteMenu,
};

export interface NavBarProps {
  capsuleType?: CapsuleType;
  title?: React.ReactNode | string;
  textColor?: string;
  background?: string;
  backgroundRGB?: string,
  opacity?: number | string,
  mainContentOpacity?: number | string;
  leftIconUrl?: string;
  rightIconUrl?: string;
  onBack?: () => void;
  onHome?: () => void;
}

interface NavBarData {
  capsuleType: CapsuleType,
  isSupportNav: boolean;
  navHeight: number;
  statusBarHeight: number;
  mainContentHeight: number;
  capsuleHeight: number;
  capsuleWidth: number;
  capsuleMarginLeft: number;
  capsuleMarginTop: number;
  capsuleStyle?: any;
  halfCapsuleWidth: number;
  triangleLeft: number;
  triangleTop: number;
  mainContentMargin: number;
  mainContentWidth: number;
  hasReturn: boolean;
  foreColor?: string;
  titlePaddingLeft: number;
  titleFontSize: number;
}

interface NavBarMenu {
  menuName: string;
  menuType: string;
  menuIcon: string,
  url: string;
}

type CapsuleType = 'full' | 'miniReturn' | 'menu' | 'miniMenu' | 'return' | 'none';
const menus: NavBarMenu[] = [
  {
    menuName: '首页',
    menuIcon: '',
    menuType: 'index',
    url: ''
  },
  {
    menuName: '个人中心',
    menuIcon: '',
    menuType: 'my',
    url: ''
  },
  {
    menuName: '我的收藏',
    menuIcon: '',
    menuType: 'fav',
    url: ''
  }
];

const calculateRGBA = (backgroundRGB: string, opacity: number | string = 1) => {
  return "rgba(" + (backgroundRGB || "255, 255, 255") + ", " + (opacity || "1.0") + ")";
}

const NavBar: React.FC<NavBarProps> = ({
  capsuleType='full',
  title,
  textColor='black',
  background:propsBackground,
  backgroundRGB='255, 255, 255',
  opacity=1,
  leftIconUrl,
  rightIconUrl,
  mainContentOpacity=1,
  onBack,
  onHome,
  children
}) => {
  const [background, setBackground] = useState(propsBackground || 'rgba(255, 255, 255, 1)');
  const [capsuleStyle, setCapsuleStyle] = useState<any>({});
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [navInfo] = useNavInfo();

  if (!navInfo.isSupportNav) {
    return null;
  }

  const [navBarData, setNavBarData] = useState<NavBarData>({
    capsuleType: capsuleType,
    isSupportNav: true,
    navHeight: 0,
    statusBarHeight: 0,
    mainContentHeight: 0,
    capsuleHeight: 0,
    capsuleWidth: 0,
    capsuleMarginLeft: 0,
    capsuleMarginTop: 0,
    halfCapsuleWidth: 0,
    triangleLeft: 0,
    triangleTop: 0,
    mainContentMargin: 0,
    mainContentWidth: 0,
    capsuleStyle: { background: 'rgba(255, 255, 255, 0.6)', border: '1rpx solid rgba(0, 0, 0, 0.08)' },
    foreColor: 'black',
    hasReturn: false,
    titlePaddingLeft: 0,
    titleFontSize: 0
  })

  useEffect(() => {
    const {
      capsuleMarginLeft,
      capsuleWidth,
      screenWidth,
      navHeight,
      system,
      capsuleHeight
    } = navInfo;
    let triangleLeft = capsuleMarginLeft + capsuleWidth * .725 - screenWidth / 750 * 16,
      triangleTop = navHeight - screenWidth / 750 * 16,
      mainContentWidth = 0,
      titlePaddingLeft = 0,
      titleFontSize = /ios/i.test(system) ? 34 : 32,
      halfCapsuleWidth = capsuleWidth / 2,
      mainContentMargin = capsuleWidth + capsuleHeight,
      _capsuleType = capsuleType,
      capsuleStyle = navBarData.capsuleStyle,
      hasReturn = getCurrentPages().length > 1;

    // isShowCapsule && (_capsuleType = 'full') || isHalfCapsule && (_capsuleType = 'miniReturn');

    'full' === _capsuleType ? mainContentWidth = screenWidth - 2 * (capsuleWidth + capsuleMarginLeft) :
      ['return', 'menu'].indexOf(_capsuleType) > -1 ?
        (
          titlePaddingLeft = mainContentMargin - (halfCapsuleWidth + capsuleMarginLeft),
          mainContentWidth = screenWidth - (capsuleWidth + capsuleMarginLeft) - (halfCapsuleWidth + capsuleMarginLeft),
          triangleLeft = capsuleMarginLeft + 0.5 * halfCapsuleWidth - screenWidth / 750 * 16
        ) : ['miniReturn', 'miniMenu'].indexOf(_capsuleType) > -1 ? (
          capsuleStyle = { paddingLeft: '4PX' } as any,
          titlePaddingLeft = mainContentMargin - ((halfCapsuleWidth = screenWidth / 750 * 40 + 8) + capsuleMarginLeft),
          mainContentWidth = screenWidth - (capsuleWidth + capsuleMarginLeft) - (halfCapsuleWidth + capsuleMarginLeft),
          triangleLeft = capsuleMarginLeft + 4 + 20 * screenWidth / 750 - 8 * screenWidth / 750 - 2) : (titlePaddingLeft = mainContentMargin,
          mainContentWidth = screenWidth - (capsuleWidth + capsuleMarginLeft));
          if (!propsBackground && backgroundRGB) {
            setBackground(calculateRGBA(backgroundRGB, opacity));
          }
          const c = 'white' === textColor ? "rgba(0, 0, 0, 0.17)" : "rgba(255, 255, 255, 0.6)";
          const b = 'white' === textColor ? "1rpx solid rgba(255, 255, 255, 0.22)" : "1rpx solid rgba(0, 0, 0, 0.08)";
          capsuleStyle = ["miniReturn", "miniMenu"].indexOf(_capsuleType) > -1 ? capsuleStyle : { ...capsuleStyle, background: c, border: b };
          setNavBarData({
            ...navInfo,
            halfCapsuleWidth,
            mainContentMargin,
            hasReturn,
            triangleLeft,
            triangleTop,
            titlePaddingLeft,
            mainContentWidth,
            titleFontSize,
            capsuleType: _capsuleType as CapsuleType,
            capsuleStyle,
            foreColor: (['black' , 'white'].indexOf(textColor)) > -1 ? textColor : 'black'
        });
  }, []);

  const handleReturn = () => {
    console.log('return')
    Taro.navigateBack();
    onBack && onBack();
  }
  const handleGoHome = () => {
    console.log('home')
    Taro.switchTab({
      url: '/page/index/index'
    });
    onHome && onHome();
  }

  const handleClickLeft = useCallback(
    () => {
      navBarData.hasReturn && handleReturn() || handleGoHome();
    },
    [navBarData.hasReturn],
  );

  const handleClickRight = useCallback(
    () => {
      setIsShowMenu(!isShowMenu);
    },
    [isShowMenu],
  );

  const handleClickMenuItem = () => {}

  const handleHideMenu = () => { setIsShowMenu(false) };

  useEffect(() => {

  }, [])
  return (
    <View className={`${blockName} fixed w-full t-0 c-black`} style={{ height: navBarData.navHeight }}>
      <View className={`${blockName}__status-bar`} style={{ height: navBarData.statusBarHeight, background: background }}></View>
      <View className={`${blockName}__container flex relative`} style={{ height: navBarData.mainContentHeight, background: background }}>
        {
          navBarData.capsuleType === 'full' && (
            <View
              className={`${blockName}__capsule flex items-center justify-center box-border z-top`}
              style={{
                width: navBarData.capsuleWidth,
                height: navBarData.capsuleHeight,
                borderRadius: navBarData.capsuleHeight,
                marginLeft: navBarData.capsuleMarginLeft,
                marginTop: navBarData.capsuleMarginTop,
                ...navBarData.capsuleStyle
              }}
             >
              <View
                className={`${blockName}__capsule-left relative flex items-center justify-center`}
                onClick={handleClickLeft}
                >
                {
                  navBarData.hasReturn && (
                    <Image className={`${blockName}__capsule-icon h-full w-full`} src={ leftIconUrl || menuIcon[`${navBarData.foreColor}-back`]  } />
                  ) || (
                    <Image className={`${blockName}__capsule-icon h-full w-full`} src={ leftIconUrl || menuIcon[`${navBarData.foreColor}-home`]  } />
                  )
                }
              </View>
              <View className={`${blockName}__capsule-middle`}></View>
              <View
                className={`${blockName}__capsule-right relative flex items-center justify-center`}
                onClick={handleClickRight}
                >
                <Image className={`${blockName}__capsule-icon h-full w-full`} src={ rightIconUrl || menuIcon[`${navBarData.foreColor}-menu`]  } />
              </View>
            </View>
          ) || (
            (navBarData.capsuleType === 'return' || navBarData.capsuleType === 'miniReturn') && (
              <View
                className={`${blockName}__half-capsule z-top`}
                style={{
                  width: navBarData.halfCapsuleWidth,
                  height: navBarData.capsuleHeight,
                  borderRadius: navBarData.capsuleHeight,
                  marginLeft: navBarData.capsuleMarginLeft,
                  marginTop: navBarData.capsuleMarginTop,
                  ...navBarData.capsuleStyle
                }}
                >
                <View className={`${blockName}__half-capsule-left relative flex items-center justify-center h-full`} onClick={handleClickLeft}>
                  {
                    navBarData.hasReturn && (
                      <Image className={`${blockName}__half-capsule-icon`} src={ leftIconUrl || menuIcon[`${navBarData.foreColor}-back`]  } />
                    ) || (
                      <Image className={`${blockName}__half-capsule-icon`} src={ leftIconUrl || menuIcon[`${navBarData.foreColor}-home`]  } />
                    )
                  }
                </View>
              </View>
            )
          ) || (
            (navBarData.capsuleType === 'menu' || navBarData.capsuleType === 'miniMenu') && (
              <View
                className={`${blockName}__half-capsule z-top`}
                style={{
                  width: navBarData.halfCapsuleWidth,
                  height: navBarData.capsuleHeight,
                  borderRadius: navBarData.capsuleHeight,
                  marginLeft: navBarData.capsuleMarginLeft,
                  marginTop: navBarData.capsuleMarginTop,
                  ...navBarData.capsuleStyle
                }}
                onClick={handleClickRight}
                >
                <View className={`${blockName}__half-capsule-right relative flex items-center justify-center h-full`}>
                  <Image className={`${blockName}__half-capsule-icon`} src={ rightIconUrl || menuIcon[`${navBarData.foreColor}-menu`]  } />
                </View>
              </View>
            )
          )
        }
        <View
          className={`${blockName}__main-content flex-grow text-center overflow-hidden overflow-ellipsis whitespace-nowrap`}
          style={{ marginRight: navBarData.mainContentMargin, maxWidth: navBarData.mainContentWidth, height: navBarData.mainContentHeight, opacity: mainContentOpacity }}
          >
          {
            title && (
              <View
                className={`${blockName}__main-content-title font-medium`}
                style={{ marginTop: navBarData.capsuleMarginTop, paddingLeft: navBarData.titlePaddingLeft, fontSize: `${navBarData.titleFontSize}rpx`, color: navBarData.foreColor }}
              >{title}</View>
            ) || (
              children
            )
          }
        </View>
      </View>
      {
        isShowMenu && (
          <View className={`${blockName}__menu fixed t-0 b-0 l-0 r-0 h-full w-full z-top`} onClick={handleHideMenu} onTouchMove={handleHideMenu}>
            <View className={`${blockName}__menu-triangle relative w-0 h-0 bg-transparent z-top`} style={{ marginLeft: navBarData.triangleLeft, marginTop: navBarData.triangleTop }}></View>
            <View className={`${blockName}__menu-container`}>
              {
                menus.map(menu => (
                  <View onClick={handleClickMenuItem} className={`${blockName}__menu-item`} key={menu.menuName}>
                    <Image className={`${blockName}__menu-item-icon`} src={menu.menuIcon} />
                    <Text className={`${blockName}__menu-item-name`}>{menu.menuName}</Text>
                  </View>
                ))
              }
            </View>
          </View>
        )
      }
    </View>
  );
}

export default NavBar;
