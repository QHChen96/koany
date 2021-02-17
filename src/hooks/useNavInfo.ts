import { compareVersion } from '@/utils';
import Taro from '@tarojs/taro';
import { NavBarInfo } from '../../global';

const useNavInfo = ():[ NavBarInfo ] => {
  const app = Taro.getApp();
  if (app.navInfo) {
    return [{ ...app.navInfo }];
  } else {
    const sysInfo = Taro.getSystemInfoSync();
    const platform = sysInfo.platform,
      version = sysInfo.version,
      statusBarHeight = sysInfo.statusBarHeight,
      screenWidth = sysInfo.screenWidth,
      system = sysInfo.system,
      brand = sysInfo.brand,
      model = sysInfo.model,
      isSupportNav = compareVersion(version, "7.0.0") || 'devtools' === platform,
      capsuleMarginLeft = /ios/i.test(system) ? 7 : 10,
      capsuleMarginTop = /ios/i.test(system) ? 4 : 8,
      mainContentHeight = /ios/i.test(system) ? 44 : 46,
      navHeight = statusBarHeight + mainContentHeight;

    let capsuleHeight = 32, capsuleWidth = /ios/i.test(system) ? 87 : 96;
    if (/Android/i.test(system) && compareVersion(version, "7.0.0")) {
      const rect = Taro.getMenuButtonBoundingClientRect();
      capsuleHeight = rect.height;
      capsuleWidth = rect.width;
    }
    app.navInfo = {
      isSupportNav,
      navHeight,
      capsuleHeight,
      platform,
      version,
      system,
      screenWidth,
      statusBarHeight,
      mainContentHeight,
      capsuleWidth,
      capsuleMarginTop,
      capsuleMarginLeft,
      brand,
      model
    };
    app.systemInfo = sysInfo;
    return [{...app.navInfo}];
  }

}
export default useNavInfo;
