import { ScrollView, View, Text } from '@tarojs/components';
import React, { Fragment, useState } from 'react';
import { ErrRetry } from '..';
import Icon from '../icon';
import './index.scss';

const blockName = `koany-address-layer`;
export interface AddressLayerProps {
  title?: string;
  show?: boolean;
  showBack?: boolean;
  showClose?: boolean;
  onClose?: () => void;
}

export interface LbsEntity {
  show: boolean;
  tag?: string;
  addrTitle?: string;
  shortAddr?: string;
  addressName?: string;
}

export interface AddrLayerEntity {
  addrFull: string;
}
export interface AddressItemEntity {
  name: string;
  active?: boolean;
}


const AddressLayer: React.FC<AddressLayerProps> = ({
  title,
  show=false,
  showBack,
  showClose,
  onClose
}) => {
  if (!show) {
    return null;
  }
  const [isShowAddrLayer, setIsShowAddrLayer] = useState<boolean>(show);
  const [isShowAddrPicker, setIsShowAddrPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const lbs:LbsEntity = {
    show: true,
    tag: '默认',
    addrTitle: '广东省广州市天河区',
    shortAddr: '',
    addressName: '某某小区'
  };
  const addrLayerList: AddrLayerEntity[] = [
    {
      addrFull: '广东省广州市天河区某某小区1'
    },
  ];
  const scrollTop = 0;
  const addrReadOnly: AddrLayerEntity[] = [
    {
      addrFull: '广东省广州市天河区某某小区2'
    },
  ];
  const hasError = false;
  const hotCities: AddressItemEntity[] = [
    {
      name: '广州',
      active: true
    },
    {
      name: '北京'
    },
    {
      name: '上海'
    },
    {
      name: '深圳'
    }
  ];
  const list: AddressItemEntity[] = [
    {
      name: '广州',
      active: true
    },
    {
      name: '深圳'
    },
    {
      name: '汕头'
    },
    {
      name: '潮州'
    }
  ];
  const menus: AddressItemEntity[] = [
    {
      name: '中国大陆',
      active: true
    }
  ];
  const subMenus: AddressItemEntity[] = [
    {
      name: '广东',
      active: true
    },
    {
      name: '广州市'
    },
    {
      name: '天河区'
    },
    {
      name: '请选择'
    }
  ];
  const handleClose = () => {
    setIsShowAddrLayer(false);
    setIsShowAddrPicker(false);
    onClose && onClose();
  }
  const noScroll = () => {}
  const handleClickLbsAddr = () => {}
  const handleClickOtherAddrBtn = () => {
    setIsShowAddrLayer(false);
    setIsShowAddrPicker(true);
  }
  const handleSwitchAddress = () => {}
  const handleClickReadOnlyAddr = () => {}
  const handleRefresh = () => {}
  const handleClickListItem = () => {}
  const handleClickHotItem = () => {}
  const handleClickMenu = () => {}
  const handleClickSubMenu = () => {}
  const handleClickAllArea = () => {}
  const handleClickPickerBack = () => {
    setIsShowAddrPicker(false);
    setIsShowAddrLayer(true);
  }
  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__mask ${show ? `${blockName}__mask--show` : '' }`} onClick={handleClose} onTouchMove={noScroll}></View>
      {
        isShowAddrLayer && (
          <View className={`${blockName}__wrap ${blockName}__layer ${show ? `${blockName}__wrap--show` : '' }`} onTouchMove={noScroll}>
            <View className={`${blockName}__header`}>
              <View className={`${blockName}__header-back ${showBack ? `` : `${blockName}__disabled`}`} onClick={handleClose}>
                <Icon className={`${blockName}__header-back-icon`} type="back" />
                返回
              </View>
              <View className={`${blockName}__header-title`}>{title}</View>
              <View className={`${blockName}__header-close ${showClose ? `` : `${blockName}__disabled`}`} onClick={handleClose}>
                <Icon className={`${blockName}__header-close-icon`} type="close" />
              </View>
            </View>
            <ScrollView className={`${blockName}__body ${addrReadOnly.length ? `${blockName}__body-bg-grey` : ''}`} scrollY>
              {/* <View></View> */}
              {
                lbs.show && (
                  <View className={`${blockName}__lbs-group`}>
                    <View className={`${blockName}__left`} onClick={handleClickLbsAddr}>
                      <View className={`${blockName}__lbs-line`}>
                          <Icon className={`${blockName}__lbs-icon`} type="location" />
                          { lbs.tag && <View className={`${blockName}__lbs-tag`}>{lbs.tag}</View>}
                          <View className={`${blockName}__lbs-title`}>{lbs.addrTitle || lbs.shortAddr}</View>
                      </View>
                      {
                        lbs.addressName && <View className={`${blockName}__lbs-line ${blockName}__lbs-area-name`}>{lbs.addressName}</View>
                      }
                    </View>
                    <View className={`${blockName}__right ${blockName}__lbs-btn`}>
                      <Icon className={`${blockName}__right-icon`} type="refresh" />
                      <Text className={`${blockName}__right-text`}>重新定位</Text>
                    </View>
                  </View>
                ) || (
                  <View onClick={handleClickOtherAddrBtn} className={`${blockName}__lbs-group`}>
                    <View className={`${blockName}__left`}>
                      <View className={`${blockName}__lbs-line`}>
                        <Icon className={`${blockName}__lbs-icon`} type="location" />
                        <View className={`${blockName}__lbs-tag`}>当前定位</View>
                        <View className={`${blockName}__lbs-title`}>点击定位当前地址</View>
                      </View>
                    </View>
                    <View className={`${blockName}__right ${blockName}__lbs-btn`}>
                      <Icon className={`${blockName}__right-icon`} type="refresh" />
                      <Text className={`${blockName}__right-text`}>定位</Text>
                    </View>
                  </View>
                )
              }
              {
                addrLayerList.length > 0 && (
                  <View className={`${blockName}__list-group`}>
                    { addrReadOnly.length > 0 && <View className={`${blockName}__list-group-title`}>可配送地址</View>}
                    {
                      addrLayerList.map(item => (
                        <View onClick={handleSwitchAddress} className={`${blockName}__list-item`}>
                          <View className={`${blockName}__list-item-checkbox`}></View>
                          <View className={`${blockName}__list-item-text`}>{item.addrFull}</View>
                        </View>
                      ))
                    }
                  </View>
                )
              }
              {
                addrReadOnly.length > 0 && (
                  <View className={`${blockName}__list-group`}>
                    <View className={`${blockName}__list-group-title`}>不可配送地址</View>
                    {
                      addrReadOnly.map(item => (
                        <View onClick={handleClickReadOnlyAddr} className={`${blockName}__list-item`}>
                          <View className={`${blockName}__list-item-checkbox`}></View>
                          <View className={`${blockName}__list-item-text`}>{item.addrFull}</View>
                        </View>
                      ))
                    }
                  </View>
                )
              }
            </ScrollView>
            <View onClick={handleClickOtherAddrBtn} className={`${blockName}__footer`}>
              <View className={`${blockName}__btn`}>选择其他地址</View>
            </View>
          </View>
        ) || (
          isShowAddrPicker &&
          <View className={`${blockName}__wrap ${blockName}__picker ${show ? `${blockName}__wrap--show` : ''}`}>
            <View className={`${blockName}__header`} onTouchMove={noScroll} catchMove>
              <View onClick={handleClickPickerBack} className={`${blockName}__header-back ${showBack || addrLayerList.length ? '' : `${blockName}__disabled`}`}>
                <Icon className={`${blockName}__header-back-icon`} type="back" />
                返回
              </View>
              <View className={`${blockName}__header-title`}>{title}</View>
              <View onClick={handleClose} className={`${blockName}__header-close ${showClose ? '' : `${blockName}__disabled`}`}>
                <Icon className={`${blockName}__header-close-icon`} type="close" />
              </View>
            </View>
            {
              !hasError && menus.length > 1 && (
                <View className={`${blockName}__tabs`}>
                  {
                    menus.map(item => (
                      <View onClick={handleClickMenu} className={`${blockName}__tabs-item ${item.active ? `${blockName}__tabs-item--active` : ``}`}>{item.name} </View>
                    ))
                  }
                </View>
              )
            }
            {
              !hasError && (
                <View className={`${blockName}__tabs`}>
                  {
                    subMenus.map(item => (
                      <View onClick={handleClickSubMenu} className={`${blockName}__tabs-item ${item.active ? `${blockName}__tabs-item--active` : ``}`}>{item.name} </View>
                    ))
                  }
                </View>
              )
            }
            <ScrollView scrollY onTouchMove={noScroll} className={`${blockName}__body`} scrollTop={scrollTop}>
              {/* <View className="xloading" hidden={!loading}></View> */}
              {
                hasError && (
                  <ErrRetry onRetry={handleRefresh} />
                ) || (
                  <Fragment>
                    {
                      hotCities.length > 0 && (
                        <Fragment>
                          <View className={`${blockName}__hot-title`}>{'热门城市'}</View>
                          <View className={`${blockName}__hot-list`}>
                            {
                              hotCities.map(item => (
                                <View onClick={handleClickHotItem} className={`${blockName}__hot-list-item ${item.active ? `${blockName}__hot-list-item--active` : ``}`}>{item.name}</View>
                              ))
                            }
                          </View>
                        </Fragment>
                      )
                    }
                    <View onClick={handleClickAllArea} className={`${blockName}__list-item`}>全部</View>
                    {
                      list.map(item => (
                        <View onClick={handleClickListItem} className={`${blockName}__list-item ${item.active ? `${blockName}__list-item--active` : ``}`}>{item.name}</View>
                      ))
                    }
                  </Fragment>
                )
              }
            </ScrollView>
            <View className={`${blockName}__opacity-mask`}></View>
          </View>
        )
      }
    </View>
  )
}

export default AddressLayer;
