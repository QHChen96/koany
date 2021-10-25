import { compareVersion } from '@/utils';
import Taro from '@tarojs/taro';
import { useSystemInfo } from '.';
import { NavBarInfo } from '../../global';

const useNavInfo = ():[ NavBarInfo ] => {
  const app = Taro.getApp();
  if (!app._navInfo_) {
    const [ sysInfo ] = useSystemInfo();
    const rect = Taro.getMenuButtonBoundingClientRect();
    const platform = sysInfo.platform,
      version = sysInfo.version,
      statusBarHeight = sysInfo.statusBarHeight,
      screenWidth = sysInfo.screenWidth,
      system = sysInfo.system,
      brand = sysInfo.brand,
      model = sysInfo.model,
      isSupportNav = compareVersion(version, "7.0.0") || 'devtools' === platform,
      capsuleMarginLeft = sysInfo.isIOS ? 7 : 10,
      capsuleMarginTop = sysInfo.isIOS ? 4 : 8,
      mainContentHeight = sysInfo.isIOS ? 44 : 46,
      navHeight = statusBarHeight + mainContentHeight,
      windowWidth = sysInfo.windowWidth,
      capsuleRight = rect.right || 368,
      height = sysInfo.isIPX ? 24 : 48,
      capsuleTop = rect.top || height,
      capsuleHeight = rect.height || 32,
      capsuleWidth =  rect.width || 0;

    app._navInfo_ = {
      navbarLeft: windowWidth - capsuleRight,
      navbarTop: height - statusBarHeight,
      navbarHeight: capsuleHeight,
      isSupportNav,
      navHeight,
      platform,
      version,
      system,
      screenWidth,
      statusBarHeight,
      mainContentHeight,
      capsuleHeight,
      capsuleWidth,
      capsuleMarginTop,
      capsuleMarginLeft,
      capsuleRight,
      capsuleTop,
      windowWidth,
      brand,
      model
    } as NavBarInfo;
  }
  return [{ ...app._navInfo_ }];
}
export default useNavInfo;
