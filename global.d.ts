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

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

export interface NavBarInfo {
  isSupportNav: boolean;
  navHeight: number;
  statusBarHeight: number;
  capsuleHeight: number;
  capsuleMarginTop: number;
  mainContentWidth: number;
  mainContentHeight: number;
  capsuleWidth: number;
  halfCapsuleWidth: number;
  capsuleMarginLeft: number;
  screenWidth: number;
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
