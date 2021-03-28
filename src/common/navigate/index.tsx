import Taro, { getApp, getCurrentPages, navigateBack as goBack } from "@tarojs/taro"
import querystring from 'querystring';

export interface NavigateToOptions {
  url?: string;
  method?: 'navigateToByForce' | 'switchTab' | 'redirectTo' | 'navigateTo';
  params?: any;
  success?: (res: any) => void;
  fail?: (res: any) => void;
}
const cache = new Map();
// tab 导航页
const TAB_URLS = [
  'pages/my/index',
  'pages/index/index',
  'pages/cart/index',
  'pages/cate/index',
];
// H5链接白名单
const H5_WHITE_LIST = [];

const LIMIT = 5;

function resolveUrl(url: string): { url: string; params: any } {

  return {
    url: '',
    params: {}
  }
}

export const navigateTo = ({
  url="",
  method='navigateTo',
  params={},
  success,
  fail
}: NavigateToOptions) => {
  let _method: string = method;
  let _url = url;
  let _params = { ...params };
  // 跳H5
  if (/^(https?:)?\/\//i.test(url)) {
    _url = '/pages/h5/index';
  } else {
    TAB_URLS.indexOf(url) != -1 && (_method = 'switchTab');
    if (_method === 'switchTab') {
      getApp().event.emit('wxapp:switchTab')
    } else {

      const pages = getCurrentPages();
      // _method === 'navigateTo' && pages.length >= LIMIT - 3 && (_method = 'redirectTo')
      _method === 'navigateToByForce' && (_method = 'navigateTo')
      let lastPage = pages.length > 1 ? pages[pages.length - 2] : null;
      if (lastPage && lastPage.data && lastPage.data.autoNavBack) {
        const route = lastPage.route || lastPage.__route__;
        if (typeof lastPage.canAutoNavBack === 'function' ? lastPage.canAutoNavBack(route, url) : route === url) {
          _method = 'navigateBack'
        }
      }
      _method === 'navigateTo' && pages.length === LIMIT && (_method = 'redirectTo');
    }
  }
  const qs = querystring.stringify(_params);
  Taro[_method]({
    url: _url + "?" + qs,
    fail,
    success,
  })
}

export interface NavigateBackOptions {
  complete?: (res: any) => void;
  delta?: number;
  fail?: (res: any) => void;
  success?: (res: any) => void;
}
export const navigateBack = (options?: NavigateBackOptions) => {
  if ((getCurrentPages() || []).length <= 1) {
    navigateTo({
      url: '/pages/index/index',
      method: 'redirectTo'
    })
    return;
  }
  goBack({
    ...(options || {})
  });
}


