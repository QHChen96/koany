import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { NavBar } from '@/components'
import { useNavInfo } from '@/hooks'
import OrderAddress from '../components/order-address'
import PayVender from '../components/pay-vender'
import PayBtnBar from '../components/pay-btn-bar'
import PayExpense from '../components/pay-expense'

const blockName = 'koany-order-confirm'

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo();

  return (
    <View className={`${blockName}`}>
      <NavBar capsuleType="miniReturn" title="确认订单" />
      <View className={`${blockName}__container`} style={{ position: 'relative', top: `${navInfo.navHeight}px` }}>
        <View className={`${blockName}__address`} style={{ top: `${navInfo.navHeight}px` }}>
          <OrderAddress />
        </View>
        <View className={`${blockName}__content`}>
          <PayVender />
          <View className={`${blockName}__summary`}>
            <PayExpense goodsPrice={100} totalPrice={100} />
          </View>
          <View className={`${blockName}__buy-notice`}>
            购买商品需同意<Text className="red">《用户购买须知》</Text>
            <View className={`checkbox`}></View>
          </View>
          <PayBtnBar money={100} />
        </View>
      </View>
    </View>
  )
}
