import { Icon } from '@/components';
import { View, Text, Image } from '@tarojs/components';
import React, { Fragment, useState } from 'react';
import './index.scss';

const blockName = `koany-smart-box`;

export interface HistoryWord {
  text: string;
  desc?: string;
}
export interface HotWord {
  text: string;
  icon?: string;
}
export interface SmartBoxProps {
  isActive?: boolean;
  navHeight?: number;
  keyword?: string;
  historyWords?: HistoryWord[];
  hotWords?: HotWord[];
}
const SmartBox: React.FC<SmartBoxProps> = ({
  isActive,
  navHeight=0,
  keyword='',
  children,
  historyWords=[],
  hotWords=[],
}) => {
  if (!isActive) {
    return null;
  }
  const [historyWordsVisible, setHistoryWordsVisible] = useState(true);
  const [hotWordsVisible, setHotWordsVisible] = useState(true);

  const handleClearHistory = () => {
    setHistoryWordsVisible(false);
  }
  const handleClickHistory = () => {}
  const handleClickHot = () => {}
  const handleToggleHotVisible = () => {
    setHotWordsVisible(!hotWordsVisible);
  }
  const handleMoreHots = () => {}
  return (
    <View className={`${blockName}`} style={`${navHeight > 0 ? `top: ${navHeight}px` : ''}`}>
      {
        !keyword && (
          <View className={`${blockName}-panel`}>
            {
              historyWords.length > 0 && (
                <Fragment>
                  <View className={`${blockName}-panel-title`}>
                    <Text>搜索历史</Text>
                    <View className={`${blockName}__clear-btn`} onClick={handleClearHistory}>
                      <Icon type="delete" />
                    </View>
                  </View>
                  <View className={`${blockName}-panel-content ${!historyWordsVisible ? `invisible` : ''}`}>
                    {
                      historyWords.map(item => (
                        <Fragment key={`history-word-${item.text}`}>
                          <Text className={`${blockName}-tag`} onClick={handleClickHistory}>{item.text}</Text>
                          <Text></Text>
                        </Fragment>
                      ))
                    }
                  </View>
                </Fragment>
              )
            }
            {
              hotWords.length > 0 && (
                <Fragment>
                  <View className={`${blockName}-panel-title`}>
                    <Text>搜索发现</Text>
                    <View className={`${blockName}__visible-btn`} onClick={handleToggleHotVisible}>
                      <Icon type="attention" />
                    </View>
                    <Text className={`${blockName}__title-btn ${!hotWordsVisible ? `${blockName}__title-btn-hide` : ''}`} onClick={handleMoreHots}>换一批</Text>
                  </View>
                  <View className={`${blockName}-panel-content ${blockName}__row-3`}>
                    {
                      hotWordsVisible && hotWords.map(item => (
                        <View className={`${blockName}-tag`} onClick={handleClickHot}>
                          <Text>{item.text}</Text>
                          { item.icon &&  <Image className={`${blockName}-tag-icon`} src={item.icon} />}
                        </View>
                      )) || (
                        <View className={`${blockName}__hidden-text`}>已隐藏搜索发现</View>
                      )
                    }
                  </View>
                </Fragment>
              )
            }
          </View>
        )
      }
      {children}
    </View>
  )
}


export default SmartBox;
