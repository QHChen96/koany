import React, { Fragment } from 'react'
import { View } from '@tarojs/components'
import { useNavInfo } from '@/hooks'
import './index.scss'
import { NavBar } from '@/components'
import TopBanner from './components/top-banner'
import OrderItems from './components/order-items'
import OrderSummary from './components/order-summary'
import OrderBottom from './components/order-bottom'
import DeleteState from './components/delete-state'

const blockName = 'koany-order-detail'

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo()
  let isExist = true;
  return (
    <View className={`${blockName}`}>
      <NavBar capsuleType="full" opacity={0} />
      {
        isExist && (
          <Fragment>
            <TopBanner navHeight={navInfo.navHeight} />
            <OrderItems />
            <OrderSummary />
            <OrderBottom />
          </Fragment>
        ) || (
          <DeleteState />
        )
      }
    </View>
  )
}
