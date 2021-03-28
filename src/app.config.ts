export default {
  pages: [
    'pages/cart/index',
    'pages/index/index',
    'pages/item/index',
    'pages/my/index',
    'pages/address/list/index',
    'pages/address/edit/index',
    'pages/order/confirm/index',
    'pages/order/detail/index',
    'pages/order/list/index',
    'pages/cate/index',
    'pages/search/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#ff0000',
    borderStyle: 'white',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tab-bar/home.png',
        selectedIconPath: 'assets/images/tab-bar/home-on.png'
      },
      {
        pagePath: 'pages/cate/index',
        text: '分类',
        iconPath: 'assets/images/tab-bar/cate.png',
        selectedIconPath: 'assets/images/tab-bar/cate-on.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: 'assets/images/tab-bar/cart.png',
        selectedIconPath: 'assets/images/tab-bar/cart-on.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: 'assets/images/tab-bar/my.png',
        selectedIconPath: 'assets/images/tab-bar/my-on.png'
      }
    ]
  }
}
