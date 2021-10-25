declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace classnames {}

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}



export interface SystemInfo {
  platform: string;
  version: string;
  statusBarHeight: number;
  screenWidth: number;
  windowWidth: number;
  system: string;
  brand: string;
  model: string;
  isIOS: boolean;
  isAndroid: boolean;
  isIPX: boolean;
}
export interface NavBarInfo {
  navbarLeft: number;
  navbarTop: number;
  navbarHeight: number;
  isSupportNav: boolean;
  navHeight: number;
  statusBarHeight: number;
  mainContentWidth: number;
  mainContentHeight: number;
  halfCapsuleWidth: number;
  capsuleRight: number;
  capsuleTop: number;
  capsuleWidth: number;
  capsuleMarginLeft: number;
  capsuleHeight: number;
  capsuleMarginTop: number;
  screenWidth: number;
  windowWidth: number;
  brand: string;
  model: string;
  platform: string;
  version: string;
  system: string;
}
export interface TabInfo {
  text: string;
  pagePath: string;
  iconPath: string;
  selectedIconPath: string;
  color: string;
  selectedColor: string;
}
