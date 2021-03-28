import React, { Fragment, useState } from 'react';
import { View, Swiper, SwiperItem, Text, Image, ScrollView } from '@tarojs/components';
import { Icon } from '@/components';
import './index.scss';
import classnames from 'classnames';

const blockName = `koany-index-cate-bar`;

export interface CateBarProps {
  hidden?: boolean;
  curTabColor?: string;
  tabColor?: string;
  tabs?: CateTabEntity[];
  fixedbarHeight?: number;
}

export interface CateTabEntity {
  name: string;
  bgImageUrl?: string;


}

const CateBar: React.FC<CateBarProps> = ({
  hidden,
  curTabColor,
  tabColor,
  fixedbarHeight=0,
  tabs=[]
}) => {
  if (hidden) {
    return null;
  }
  const [isScroll, setIsScroll] = useState(true);
  const [curIdx, setCurIdx] = useState(0);
  const [showPanel, setShowPanel] = useState(false);
  const hasPanel = tabs.length > 5;

  const handleTouchMove = () => {}

  const handleTogglePanel = () => {
    setShowPanel(!showPanel);
  }
  const handleSwitchTab = (index: number) => {
    setCurIdx(index);
  }

  return (
    <View className={`${blockName}`} onTouchMove={handleTouchMove}>
      <View className={`${blockName}__tabs ${blockName}__tabs--${isScroll ? `scroll` : `flex`}`}>
        <View className={`${blockName}__tabs-scroll`}>
          <ScrollView className={`${blockName}__tabs-scroll-view`} scrollX scrollIntoView={`${blockName}__tabs-item-${curIdx === 0 ? 0 : curIdx -1}`}>
            <View className={`${blockName}__tabs-inner`}>
              {
                tabs.map((item, index) => (
                  <View onClick={() => handleSwitchTab(index)} className={`${blockName}__tabs-item`} id={`${blockName}__tabs-item-${index}`}>
                    { item.bgImageUrl && <Image className={`${blockName}__tabs-icon`} src={item.bgImageUrl} /> || null }
                    <View className={classnames(`${blockName}__tabs-name`, curIdx === index && `${blockName}__tabs-name--cur`)} style={{color: curIdx === index ? curTabColor : tabColor}}>{item.name}</View>
                  </View>
                ))
              }
            </View>
          </ScrollView>
        </View>
        {
          isScroll && (
            <Fragment>
              {
                hasPanel && (
                  <View onClick={handleTogglePanel} className={`${blockName}__tabs-toggle`}>
                    <View className={`${blockName}__tabs-toggle-icon ${showPanel ? `${blockName}__tabs-toggle-icon--up` : ''}`}></View>
                  </View>
                )
              }
              <View className={`${blockName}__panel ${showPanel ? `${blockName}__panel--show` : ''}`}>
                <View className={`${blockName}__panel-list`}>
                  <View className={`${blockName}__panel-item`}>全部分类</View>
                  {
                    tabs.map((item, index) => (
                      <View onClick={() => handleSwitchTab(index)} className={classnames(`${blockName}__panel-item`, `${blockName}__panel-item-link`, curIdx === index && `${blockName}__panel-item--cur`)} hoverClass={`${blockName}__panel-item--hover`} style={{ color: `#F2270C` }}>{item.name}</View>
                    ))
                  }
                </View>
                <View onClick={handleTogglePanel} className={`${blockName}__panel-mask`} style={{ top: `${fixedbarHeight}rpx` }}></View>
              </View>
            </Fragment>
          )
        }
      </View>
    </View>
  );
}

export default CateBar;
