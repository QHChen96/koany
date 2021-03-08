import { ScrollView, View, Text } from '@tarojs/components';
import React, { Fragment, useState } from 'react';

const blockName = `koany-address-layer`;
export interface AddressLayerProps {
  title?: string;
}

const AddressLayer: React.FC<AddressLayerProps> = ({
  title
}) => {
  const [isShowAddrLayer, setIsShowAddrLayer] = useState(false);
  const [loading, setLoading] = useState(false);
  const lbs:any = {};
  const addrLayerList: any[] = [];
  const scrollTop = 0;
  const addrReadOnly: any[] = [];
  const hasError = false;
  const hotsotcities: any[] = [];
  const list: any[] = [];
  const menus: any[] = [];
  const subMenus: any[] = [];
  const handleClose = () => {}
  const noscroll = () => {}
  const handleClickOtherAddrBtn = () => {}
  const handleSwitchAddress = () => {}
  const handleClickReadOnlyAddr = () => {}
  const handleRefresh = () => {}
  const handleClickListItem = () => {}
  const handleClickHotItem = () => {}
  const handleClickMenu = () => {}
  const handleClickSubMenu = () => {}
  return (
    <View>
      <View onClick={handleClose} onTouchMove={noscroll}></View>
      {
        isShowAddrLayer && (
          <View onTouchMove={noscroll}>
            <View>
              <View onClick={handleClose}>返回</View>
              <View>{title}</View>
              <View onClick={handleClose}></View>
            </View>
            <ScrollView scrollY>
              <View></View>
              {
                lbs.show && (
                  <View>
                    <View className="left">
                      <View>
                          <View></View>
                          { lbs.tag && <View>{lbs.tag}</View>}
                          <View>{lbs.addrTitle || lbs.shortAddr}</View>
                      </View>
                      {
                        lbs.addressName && <View >{lbs.addressName}</View>
                      }
                    </View>
                    <View className="right">
                      <View className="icon_reload"></View>
                      <Text>重新定位</Text>
                    </View>
                  </View>
                )
              }
              <View onClick={handleClickOtherAddrBtn} className="lbs_group" >
                <View className="left">
                  <View className="lbs_line">
                    <View className="icon_addr"></View>
                    <View className="lbs_tag">当前定位</View>
                    <View className="lbs_title">点击定位当前地址</View>
                  </View>
                </View>
                <View className="right lbs_btn">
                <View className="icon_reload"></View>
                  <Text>重新定位</Text>
                </View>
              </View>
              {
                addrLayerList.length > 0 && (
                  <View className="list_group" >
                    { addrReadOnly.length > 0 && <View className="group_title">可配送地址</View>}
                    {
                      addrLayerList.map(item => (
                        <View onClick={handleSwitchAddress} className="list_item">
                          <View className="item_checkbox "></View>
                          <View className="item_txt line2">{item.addrfull}</View>
                        </View>
                      ))
                    }
                  </View>
                )
              }
              {
                addrReadOnly.length > 0 && (
                  <View className="list_group disabled">
                    <View className="group_title">不可配送地址</View>
                    {
                      addrReadOnly.map(item => (
                        <View onClick={handleClickReadOnlyAddr} className="list_item">
                          <View className="item_checkbox disable"></View>
                          <View className="item_txt line2">{item.addrfull}</View>
                        </View>
                      ))
                    }
                  </View>
                )
              }
            </ScrollView>
            <View onClick={handleClickOtherAddrBtn} className="footer">
              <View className="btn">选择其他地址</View>
            </View>
          </View>
        )
      }
      {
        !hasError && (
          <View className="tabs">
            {
              menus.map(item => (
                <View onClick={handleClickMenu} className="tabs_item" >{item.name} </View>
              ))
            }
          </View>
        )
      }
      {
        !hasError && (
          <View className="tabs">
            {
              subMenus.map(item => (
                <View onClick={handleClickSubMenu} className="tabs_item" >{item.name} </View>
              ))
            }
          </View>
        )
      }
      <ScrollView scrollY onTouchMove={noscroll} className="body" scrollTop={scrollTop}>
        <View className="xloading" hidden={!loading}></View>
        {
          hasError && (
            <View onClick={handleRefresh} className="error_retry">
              <Text>查询信息失败，试试</Text>
              <View className="button">刷新</View>
            </View>
          ) || (
            <Fragment>
              {
                hotsotcities.length > 0 && (
                  <Fragment>
                    <View className="hot_title">{'热门城市'}</View>
                    <View className="hot_list">
                      {
                        hotsotcities.map(item => (
                          <View onClick={handleClickHotItem} className="hot_item" data-area-id="{{item.areaId}}" >{item.name}</View>
                        ))
                      }
                    </View>
                  </Fragment>
                )
              }
              {
                list.map(item => (
                  <View onClick={handleClickListItem} className="list_item">{item.name}</View>
                ))
              }
            </Fragment>
          )
        }
      </ScrollView>
      <View className="opacity_mask"></View>
    </View>
  )
}

export default AddressLayer;
