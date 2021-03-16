import React, { useState, useCallback, Fragment } from "react";
import { View, Text, ScrollView, Input } from '@tarojs/components';
import './index.scss';
import { AddressLayer, Dialog, Icon } from "@/components";

const blockName = `koany-order-address-dialog`;

export interface AddressDialogProps {
  show?: boolean;
  address?: AddressInfoEntity;
  onClose: () => void;
}

export interface AddressInfoEntity {
  name?: string;
  mobile?: string;
  addressNames?: string[];
  addrDetail?: string;
}

export interface AddressInfoErrorEntity {
  name?: string;
  mobile?: string;
  addressNames?: string;
  addrDetail?: string;
}

const AddressDialog = ({
  show=false,
  address={
    name: '',
    mobile: '',
    addressNames: [],
    addrDetail: ''
  },
  onClose
}: AddressDialogProps) => {
  if (!show) {
    return null;
  }
  const [isShow, setIsShow] = useState(show);
  const [scrollTop, setScrollTop] = useState(0);
  const [focusKeys, setFocusKeys] = useState<string[]>([]);
  const [showAddressLayer, setShowAddressLayer] = useState(false);

  const errors: AddressInfoErrorEntity = {

  }

  const formatAddressNames = useCallback((params?: string[]) => {
    return params && params?.join(' ') || '';
  }, [address.addressNames]);

  const mobilePrefix = "+86";

  const handleCancel = () => {
    onClose && onClose();
  }
  const handleConfirm = () => {}
  const handleInputFocus = () => {}
  const handleInputBlur = () => {}
  const handleInput = () => {}
  const handleClickArea = () => {
    setShowAddressLayer(true);
  }

  const handleClickAddrDetail = () => {
    setFocusKeys([...focusKeys, 'addrDetail'])
  }
  const handleCloseAddressLayer = () => {
    setShowAddressLayer(false);
  }
  return (
    <Fragment>
      <View className={`${blockName}`}>
        <Dialog onCancel={handleCancel} onConfirm={handleConfirm} cancelText="取消" confirmText="确认提交" show={isShow} showCancel showConfirm title="完善收货地址">
          <ScrollView scrollTop={scrollTop} scrollY>
            <View className={`${blockName}__import-addr-content`}>
              <View className={`${blockName}__import-addr-item`}>
                <View className={`${blockName}__import-addr-item-info`}>
                  <View className={`${blockName}__import-addr-item-key`}>姓名</View>
                  <View className={`${blockName}__import-addr-item-value`}>
                    <Input onFocus={handleInputFocus} onBlur={handleInputBlur} onInput={handleInput} placeholder={`姓名`} value={address.name} />
                  </View>
                </View>
                { errors.name && <View className={`${blockName}__error-tips`}>{errors.name}</View> }
              </View>
              <View className={`${blockName}__import-addr-item ${blockName}__import-addr-item-mobile`}>
                <View className={`${blockName}__import-addr-item-info`}>
                  <View className={`${blockName}__import-addr-item-key`}>联系方式</View>
                  {/* <View className={`${blockName}__import-addr-item-mobile-prefix`}>
                    {mobilePrefix}<Text style="margin: 0 4px">-</Text>
                  </View> */}
                  <View className={`${blockName}__import-addr-item-value`}>
                    <Input onFocus={handleInputFocus} onBlur={handleInputBlur} onInput={handleInput} placeholder={`手机号码`} value={address.mobile} />
                  </View>
                </View>
                { errors.mobile && <View className={`${blockName}__error-tips`}>{errors.mobile}</View> }
              </View>
              <View onClick={handleClickArea} className={`${blockName}__import-addr-item ${blockName}__pay-arrow`}>
                <View className={`${blockName}__import-addr-item-info`}>
                  <View className={`${blockName}__import-addr-item-key`}>所在地区</View>
                  <View className={`${blockName}__import-addr-item-value`}>
                    <View>{formatAddressNames(address.addressNames)}</View>
                  </View>
                </View>
                { errors.addressNames && <View className={`${blockName}__error-tips`}>{errors.addressNames}</View> }
              </View>
              <View className={`${blockName}__import-addr-item`}>
                <View className={`${blockName}__import-addr-item-info`}>
                  <View className={`${blockName}__import-addr-item-key`}>详细地址</View>
                  {
                    focusKeys.indexOf('addrDetail') <= -1 && (
                      <View onClick={handleClickAddrDetail} className={`${blockName}__import-addr-item-value`} style={`${address.addrDetail ? '':'color: #888'}`}>楼栋楼层或房间号</View>
                    ) || (
                      <Input onFocus={handleInputFocus} onBlur={handleInputBlur} onInput={handleInput} className={`${blockName}__import-addr-item-value`} placeholder={`楼栋楼层或房间号`} focus={true} maxlength={100} />
                    )
                  }
                </View>
                { errors.addrDetail && <View className={`${blockName}__error-tips`}>{errors.addrDetail}</View> }
              </View>
            </View>
          </ScrollView>
        </Dialog>
      </View>
      <AddressLayer show={showAddressLayer} onClose={handleCloseAddressLayer}/>
    </Fragment>
  )
}

export default AddressDialog;
