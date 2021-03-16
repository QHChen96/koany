import React, { Component, Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import { useNavInfo } from '@/hooks'
import './index.scss'
import { SliderView } from '@/components'

const blockName = 'koany-address-list';

export interface AddressEntity {
  isDefault: boolean;
  checked: boolean;
  name: string;
  mobile: string;
  label: string;
  addressFull: string;
}

export default (): React.ReactNode => {
  const [navInfo] = useNavInfo();

  const addressList:AddressEntity[] = [
    {
      isDefault: true,
      checked: true,
      name: '陈总',
      mobile: '187****8728',
      label: '默认',
      addressFull: '广东省广州市天河区某某街道'
    },
    {
      isDefault: false,
      checked: false,
      name: '陈总',
      mobile: '187****8728',
      label: '家',
      addressFull: '广东省广州市天河区某某街道'
    }
  ];
  const handleSlideChange = () => {}
  const handleSetDefault = () => {}
  const handleRemove = () => {}
  const handleEditAddress = () => {}
  return (
    <View className={`${blockName}`}>
      {
        addressList.length > 0 && (
          <View className={`${blockName}__wrap`}>
            <View className={`${blockName}__list`}>
              {
                addressList.map(item => (
                  <Fragment>
                    <SliderView onOpen={handleSlideChange} moveMax={item.isDefault ? 65 : 135} renderBtn={
                      <View className={`${blockName}__list-buttons`}>
                        {!item.isDefault && <View onClick={handleSetDefault} className={`${blockName}__list-button ${blockName}__list-button--default`}>设为默认</View>}
                        <View onClick={handleRemove} className={`${blockName}__list-button ${blockName}__list-button--remove`}>删除</View>
                      </View>
                    }>
                      <View className={`${blockName}__list-item`}>
                        <View className={`checkbox ${item.checked && `checkbox--checked`}`}></View>
                          <View className={`${blockName}__list-item-detail`}>
                          <View className={`${blockName}__list-item-user`}>
                            <View className={`${blockName}__list-item-user-name`}>{item.name}</View>
                            <View className={`${blockName}__list-item-user-phone`}>{item.mobile}</View>
                          </View>
                          <View className={`${blockName}__list-item-addr`}>
                            {
                              item.isDefault && (
                                <View className={`${blockName}__list-item-label ${blockName}__list-item-label--red`}>
                                  <Text className={`${blockName}__list-item-label-text ${blockName}__list-item-label-text--red`}>默认</Text>
                                </View>
                              ) || (
                                <View className={`${blockName}__list-item-label`}>
                                  <Text className={`${blockName}__list-item-label-text`}>{item.label}</Text>
                                </View>
                              )
                            }
                            <Text className={`${blockName}__list-item-full`}>{item.addressFull}</Text>
                          </View>
                        </View>
                        <View onClick={handleEditAddress} className={`${blockName}__list-item-edit`}>编辑</View>
                      </View>
                    </SliderView>
                  </Fragment>
                ))
              }
            </View>
          </View>
        )
      }
      <View className={`${blockName}__placeholder`}></View>
      <View className={`${blockName}__add-addr`}>
        <View className={`${blockName}__add-addr-container`}>
          <View className={`${blockName}__add-addr-import-btn`}>
            微信导入
          </View>
          <View className={`${blockName}__add-addr-btn`}>新增收货地址</View>
        </View>
      </View>

    </View>
  )

}
