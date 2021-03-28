import React, { Fragment, useState } from "react";
import { View, Text } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";
import AddressDialog, { AddressInfoEntity } from "../address-dialog";
import { navigateTo } from "@/common";

const blockName = `koany-order-address`;

export interface OrderAddressProps {

}

const OrderAddress = ({

}: OrderAddressProps) => {

  const [showAddressDialog, setShowAddressDialog] = useState(false);


  const addressInfo = {
    name: "陈总",
    phone: "187****8728",
    isDefault: true,
    // full: '',
    full: "广东广州天河区某某街道某某某某"
  }

  const importAddress: AddressInfoEntity = {
    name: '陈总',
    mobile: '18888888888',
    addressNames: ['广东省', '广州市', '天河区'],
    addrDetail: '某某街道某某村'
  }


  const handleCloseAddressDialog = () => {
    setShowAddressDialog(false);
  }


  const handleImportWxAddress = () => {
    setShowAddressDialog(true);
  }
  const handleToAddressPage = () => {
    navigateTo({
      url: '/pages/address/list/index',
      method: 'navigateToByForce'
    })
  }

  return (
    <Fragment>
      <View className={`${blockName}`}>
        <View className={`${blockName}__addr`} onClick={handleToAddressPage}>
          <View className={`${blockName}__container`}>
            {
              addressInfo.full && (
                <Fragment>
                  <View className={`${blockName}__user`}>
                    <Text className={`${blockName}__user-name`}>{addressInfo.name}</Text>
                    <Text className={`${blockName}__user-phone`}>{addressInfo.phone}</Text>
                  </View>
                  <View className={`${blockName}__full`}>
                    { addressInfo.isDefault && <Text className={`${blockName}__label ${blockName}__label-red`}>默认</Text> }
                    <Text className={`${blockName}__full-address`}>{addressInfo.full}</Text>
                  </View>
                  <Icon className={`${blockName}__more`} type={'right'} />
                </Fragment>
              ) || (
                <View className={`${blockName}__empty`}>
                  <Icon className={`${blockName}__empty-icon`} type="location_fill" />
                  <Text className={`${blockName}__empty-text`}>请添加收货地址</Text>
                  <View className={`${blockName}__wx-import`} onClick={handleImportWxAddress}>
                    {/* <Icon type="location" /> */}
                    <Text>获取微信地址</Text>
                  </View>
                </View>
              )
            }
          </View>
        </View>
      </View>
      <AddressDialog address={importAddress} show={showAddressDialog} onClose={handleCloseAddressDialog} />
    </Fragment>
  )
}

export default OrderAddress;
