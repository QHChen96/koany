import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { NavBar } from '@/components'
import { NavBarInfo } from 'global'

const blockName = 'koany-search'

export default (): React.ReactNode => {

  const [navBarInfo, setNavBarInfo] = useState<NavBarInfo | null>(null);


  return (
    <View className={`${blockName}`}>
      <NavBar ></NavBar>
    </View>
  )

}
