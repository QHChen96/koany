export default {
  pages: [

    'pages/index/index',
    'pages/cate/index',
    'pages/cart/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#e3e3e3',
    borderStyle: 'black',
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
        iconPath: 'assets/images/tab-bar/category.png',
        selectedIconPath: 'assets/images/tab-bar/category-on.png'
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
