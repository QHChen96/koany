import Taro from '@tarojs/taro';
import { SystemInfo } from '../../global';

const useSystemInfo = ():[ SystemInfo ] => {
  const app = Taro.getApp();
  if (!app._systemInfo_) {
    const sysInfo = Taro.getSystemInfoSync();
    const _systemInfo_ = {
      platform: sysInfo.platform,
      version: sysInfo.version,
      statusBarHeight: sysInfo.statusBarHeight,
      screenWidth: sysInfo.screenWidth,
      system: sysInfo.system,
      brand:  sysInfo.brand,
      model: sysInfo.model,
      isIOS: /ios/i.test(sysInfo.system),
      isAndroid: /Android/i.test(sysInfo.system),
    }
    app._systemInfo_ = _systemInfo_
  }
  return [{ ...app._systemInfo_ }]
}

export default useSystemInfo;