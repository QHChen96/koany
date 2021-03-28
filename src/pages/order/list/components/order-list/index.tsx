import React, { Fragment } from "react";
import { View, Text, Image } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";
import { navigateTo } from "@/common";

const blockName = `koany-order-list`;

export interface OrderListProps {
  navHeight?: number;
}

const OrderList = ({
  navHeight=0
}: OrderListProps) => {

  const images = [
    {
      imageUrl: 'https://img12.360buyimg.com/n2/s240x240_jfs/t1/152047/22/13495/120347/5ffbf3edEc4eb33d5/82829d4ff153f083.jpg'
    },
    {
      imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/148767/39/18017/86358/5fd32ff0E5ca41721/d885f7c401dfa557.jpg'
    },
    {
      imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/131861/4/12262/28027/5f867087E0c113ea8/0f9028ec73b8ff33.jpg'
    },
    {
      imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124144/10/14812/46574/5f86163cE7bdd2f14/91587f2ddb955545.jpg'
    }
  ];
  const tabsData = [
    {
      id: 1,
      shopInfo: {
        shopName: '店主名称'
      },
      totalPrice: 100,
      stateInfo: {
        stateName: '待付款',
        warning: true,
        showDelete: false,
        stateTip: '支付剩余时间04小时59分'
      },
      handles: [
        {
          name: '去支付',
          type: 'pay',
          btnType: 'red'
        }
      ],
      orderItems: [
        {
          id: 1,
          title: 'Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
          imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/148767/39/18017/86358/5fd32ff0E5ca41721/d885f7c401dfa557.jpg',
          amount: 1
        }
      ]
    },
    {
      id: 2,
      totalPrice: 100,
      stateInfo: {
        stateName: '已完成',
        showDelete: true,
      },
      shopInfo: {
        shopName: '店主名称'
      },
      handles: [
        {
          name: '再次购买',
          type: 're-buy',
          btnType: 'red-border'
        }
      ],
      orderItems: [
        {
          id: 1,
          title: 'Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
          imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/148767/39/18017/86358/5fd32ff0E5ca41721/d885f7c401dfa557.jpg',
          amount: 1
        },
        {
          id: 2,
          title: 'Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
          imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/148767/39/18017/86358/5fd32ff0E5ca41721/d885f7c401dfa557.jpg',
          amount: 1
        },
        {
          id: 3,
          title: 'Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
          imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/131861/4/12262/28027/5f867087E0c113ea8/0f9028ec73b8ff33.jpg',
          amount: 1
        },
        {
          id: 4,
          title: 'Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
          imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124144/10/14812/46574/5f86163cE7bdd2f14/91587f2ddb955545.jpg',
          amount: 2
        }
      ]
    }
  ];

  const handleToDetail = () => {

    navigateTo({
      url: '/pages/order/detail/index'
    })
  }

  const handleAction = (btn: any) => {
    if (btn.type === 'pay') {
      navigateTo({
        url: '/pages/order/detail/index'
      })
    } else if (btn.type === 're-buy') {
      navigateTo({
        url: '/pages/order/confirm/index'
      })
    }
  }

  return (
    <View className={`${blockName}`}>
      {
        tabsData.map(item => (
          <View className={`${blockName}__item`}>
            <View className={`${blockName}__item-header`}>
              <View className={`${blockName}__item-shop-title`}>
                <Icon color="#262626;" className={`${blockName}__item-shop-title-icon`} type="shop" />
                <Text className={`${blockName}__item-shop-title-text`}>{item.shopInfo.shopName}</Text>
              </View>
              <View className={`${blockName}__item-order-state ${item.stateInfo.warning ? `red` : ''}`}>{item.stateInfo.stateName}</View>
              {
                item?.stateInfo?.showDelete && (
                  <Fragment>
                    <View className={`${blockName}__split`}></View>
                    <View className={`${blockName}__item-order-del`}>
                      <Icon color="#999" type="delete" size={16} />
                    </View>
                  </Fragment>
                )
              }
            </View>
            <View className={`${blockName}__item-body`} onClick={handleToDetail}>
                {
                  item.orderItems.length > 1 && (
                    <View className={`${blockName}__item-content`}>
                      {
                        item.orderItems.map((orderItem, orderItemIdx) => (
                          <Fragment key={`order-list-good-${item.id}-${orderItem.id}`}>
                            {
                              orderItemIdx <= 2 && (
                                <View className={`${blockName}__item-content-cover`}>
                                  <Image className={`${blockName}__item-content-img`} src={orderItem.imageUrl} />
                                  <View className={`${blockName}__item-content-img-tag`}>x{orderItem.amount || 1}</View>
                                </View>
                              )
                            }
                            {
                              orderItemIdx === 3 && (
                                <View className={`${blockName}__item-content-more`}>
                                  <View className={`${blockName}__item-content-more-text`}>查看更多</View>
                                  <Icon className={`${blockName}__item-content-more-icon`} type="round-right-fill" size={13} />
                                </View>
                              )
                            }
                          </Fragment>
                        ))
                      }
                    </View>
                  ) || (
                    <Fragment>
                      {
                        item.orderItems.map(orderItem => (
                          <View className={`${blockName}__item-content`} id={`order-list-good-${item.id}-${orderItem.id}`}>
                            <View className={`${blockName}__item-content-cover`}>
                              <Image className={`${blockName}__item-content-img`} src={orderItem.imageUrl} />
                            </View>
                            <View className={`${blockName}__item-content-product`}>
                              <View className={`${blockName}__item-content-product-title line-2`}>{orderItem.title}</View>
                            </View>
                            <View className={`${blockName}__item-content-num`}>x{orderItem.amount || 1}</View>
                          </View>
                        ))
                      }
                    </Fragment>
                  )
                }
              <View className={`${blockName}__total-bar`}>
                <View className={`${blockName}__total-bar-payment`}>
                  待付
                  <Text className={`${blockName}__total-bar-price`}>￥{item.totalPrice}</Text>
                </View>
              </View>
            </View>
            <View className={`${blockName}__btns`}>
              {
                item.handles.map(btn => (
                  <View className={`${blockName}__btn ${blockName}__btn-${btn.btnType}`} onClick={() => handleAction(btn)}>
                    {btn.name}
                  </View>
                ))
              }
              {
                (item?.stateInfo?.stateTip &&
                  <View className={`${blockName}__btn-time`}>
                    <Icon className={`${blockName}__btn-time-icon`} type="time" size={13} />
                    <View className={`${blockName}__btn-time-text`}>{item.stateInfo.stateTip}</View>
                  </View>
                ) ||
                (
                  item.handles.length > 3 && (
                    <View className={`${blockName}__btn-more`}>
                      更多
                    </View>
                  )
                )
              }
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default OrderList;
