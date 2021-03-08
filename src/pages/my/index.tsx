import React from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import { Icon, NavBar } from '@/components'
import useNavInfo from '../../hooks/useNavInfo';
import Taro from '@tarojs/taro';

const blockName = 'koany-my'

export default (): React.ReactNode => {

  const [navInfo] = useNavInfo();

  const userInfo = {
    avatar: 'https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png',
    userName: '富贵的站主'
  }

  const handleToWaitPay = () => {
    Taro.navigateTo({
      url: '/pages/order/list/index'
    })
  }
  const handleToWaitDeliver = () => {
    Taro.navigateTo({
      url: '/pages/order/list/index'
    })
  }
  const handleToAfterSale = () => {
    Taro.navigateTo({
      url: '/pages/order/list/index'
    })
  }
  const handleToOrder = () => {
    Taro.navigateTo({
      url: '/pages/order/list/index'
    })
  }

  return (
    <View className={`${blockName}`}>
      <NavBar capsuleType="none" opacity="0" title="我的" textColor="white"></NavBar>
      <View className={`${blockName}__header`}>
        <View className={`${blockName}__user-info`} style={{ marginTop: navInfo.navHeight }}>
          <View className={`${blockName}__avatar-container`}>
            <View className={`${blockName}__avatar`}>
              <Image mode="aspectFill" className={`${blockName}__avatar-img`} src={userInfo.avatar} />
            </View>
          </View>
          <View className={`${blockName}__personal-container`}>
            <View className={`${blockName}__user-name`}>
              <Text className={`${blockName}__user-name-text`}>{userInfo.userName}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className={`${blockName}__order list-group list-cell`}>
        <View className={`${blockName}__order-items`}>
          <View className={`${blockName}__order-item`} onClick={handleToWaitPay}>
            <Icon className={`${blockName}__order-item-icon`} type="pay" size={32} />
            <Text className={`${blockName}__order-item-text`}>待付款</Text>
          </View>
          <View className={`${blockName}__order-item`} onClick={handleToWaitDeliver}>
            <Icon className={`${blockName}__order-item-icon`} type="deliver" size={32} />
            <Text className={`${blockName}__order-item-text`}>待收货</Text>
          </View>
          <View className={`${blockName}__order-item`} onClick={handleToAfterSale}>
            <Icon className={`${blockName}__order-item-icon`} type="sponsor" size={32} />
            <Text className={`${blockName}__order-item-text`}>退换/售后</Text>
          </View>
          <View className={`${blockName}__order-item`} onClick={handleToOrder}>
            <Icon className={`${blockName}__order-item-icon`} type="form" size={32} />
            <Text className={`${blockName}__order-item-text`}>全部订单</Text>
          </View>
        </View>
      </View>
      {/* <View className={`${blockName}__opt list-group list-cell`}>
        <View className={`${blockName}__opt-items`}>
          <View className={`${blockName}__opt-item`}>
            <Icon className={`${blockName}__opt-item-icon`} type="ditu" size={32} />
            <Text className={`${blockName}__opt-item-text`}>管理地址</Text>
          </View>
          <View className={`${blockName}__opt-item`}>
            <Icon className={`${blockName}__opt-item-icon`} type="shezhi" size={24} />
            <Text className={`${blockName}__opt-item-text`}>用户设置</Text>
          </View>
        </View>
      </View> */}
    </View>
  );

};
