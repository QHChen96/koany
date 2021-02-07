import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { NavBar } from '@/components'

const blockName = 'koany-my'

export default (): React.ReactNode => {


  return (
    <View className={`${blockName}`}>
      <NavBar title="我的"></NavBar>

    </View>
  );

};
