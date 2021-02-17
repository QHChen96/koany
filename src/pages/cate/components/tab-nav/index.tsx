import { ScrollView, View } from '@tarojs/components'
import React, { useState } from 'react'
import './index.scss'

export interface TabNavEntity {
  id: number | string;
  name: string;
}

export interface TabNavProps {
  scrollTop: number;
  tabNavs: TabNavEntity[];
  curIdx: number;
  onClick?: () => void;
}

const TabNav: React.FC<TabNavProps> = ({
  scrollTop,
  tabNavs=[],
  curIdx=0,
  onClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(curIdx);

  const handleClickTabNav = (idx: number) => {
    setCurrentIndex(idx);
  }

  return (
    <ScrollView className="absolute t-0 b-0 l-0" style={{ width: `180rpx`, backgroundColor: `#f8f8f8` }} scrollTop={scrollTop} scrollWithAnimation scrollY>
      {
        tabNavs.map((tab, index) => (
          <View className={`text-center bg-full bg-no-repeat ${index === currentIndex ? 'tab__item--cur' : ''}`} style={{ height: `50px`, lineHeight: `50px`, fontSize: `26rpx` }} key={`cate-tab-nav-${tab.id}`} onClick={() => handleClickTabNav(index)}>{tab.name}</View>
        ))
      }
    </ScrollView>
  )
}

export default TabNav