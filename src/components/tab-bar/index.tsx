import React, { useState } from 'react';
import { View, Image } from '@tarojs/components';
import { TabInfo } from '../../../global';

const blockName = 'koany-tab-bar';

export interface TabBarProps {}

const tabs: TabInfo[] = [];

const TabBar: React.FC<TabBarProps> = () => {
  const [selected, setSelected] = useState(0);

  const handleSwitchTab = (index: number) => {}

  return (
    <View className={`${blockName}`}>
      {
        tabs.map((tab, index) => (
          <View className={`${blockName}__item`} key={`tab-${tab.text}`}>
            <View className={`${blockName}__item-inner`} onClick={ () => handleSwitchTab(index) }>
              {
                selected === index && (
                  <Image className={`${blockName}__item-icon`} src={tab.selectedIconPath} />
                ) || (
                  <Image className={`${blockName}__item-icon`} src={tab.iconPath} />
                )
              }
              <View className={`${blockName}__item-text`} style={{ color: selected === index ? tab.selectedColor : tab.color }}></View>
            </View>
          </View>
        ))
      }
    </View>
  );
}

export default TabBar;
