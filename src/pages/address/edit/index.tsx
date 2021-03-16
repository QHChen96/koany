import React, { useState, Fragment, useEffect } from 'react'
import { View, Text, Input, Textarea, CoverView, CoverImage, Switch, ScrollView } from '@tarojs/components'
import './index.scss'
import { AddressLayer, Icon, Popup, PayConfirmButton } from '@/components';
import TagInput from './components/tag-input';
import Taro from '@tarojs/taro';

const blockName = 'koany-address-edit';

export interface AddressEntity {
  isDefault: boolean;
  checked: boolean;
  name: string;
  mobile: string;
  label: string;
  addressFull: string;
}

export default (): React.ReactNode => {

  const [mobilePrefix, setMobilePrefix] = useState('86');
  const [showAreaCodePopup, setShowAreaCodePopup] = useState(false);
  const [type, setType] = useState('add');
  const addressInfo = {
    name: "",
    mobile: "",
    areaCode: "86",
    addressNames: [],
    addressDetail: '',
    label: '家'
  };

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: '新增收货地址'
    })
  }, [])

  const hotAreaCodes = [
    {
      code: '86',
      name: '中国大陆'
    }
  ]
  const areaCodes = [
    {
      code: '86',
      name: '中国大陆'
    }
  ];
  const myLabel = '常用';

  const addrSniffText = '';
  const showEditAddrLocation = true;
  const isAddrComplete = false;
  const showAddrErrTip = true;

  const handleInput = () => {}
  const handleClear = () => {}
  const handleMobileFocus = () => {}
  const handleClickLocation = () => {}
  const handleClickDetailInput = () => {}
  const handleClickTag = () => {}
  const handleChangeDefault = () => {}
  const handleAddrSniffInput = () => {}
  const handleClearAddrSniffText = () => {}
  const handleClickSniff = () => {}
  const handleConfirm = () => {}
  const handleDel = () => {}
  const handleAreaCodePopupClose = () => {}
  const handleClickAreaCode = (param: string) => {
    setMobilePrefix(param);
  }
  const handleClickMyLabel = () => {}
  return (
    <Fragment>
      <View className={`${blockName}`}>
        <View className={`${blockName}__form-group`}>
          <View className={`${blockName}__form-item`}>
            <View className={`${blockName}__item`}>收货人</View>
            <View className={`${blockName}__name`}>
              <Input className={`${blockName}__form-item-input`} value={addressInfo.name} onInput={handleInput} type="text" placeholder="姓名" placeholderStyle="color:#ccc" maxlength={50} />
            </View>
            { addressInfo.name && <Icon className={`${blockName}__clear`} onClick={handleClear} type="close" /> }
          </View>
          <View className={`${blockName}__form-item`}>
            <View className={`${blockName}__item`}>联系方式</View>
            <View className={`${blockName}__prefix`}>
              +{mobilePrefix}
              <View className={`${blockName}__prefix-more`} />
            </View>
            <View className={`${blockName}__mobile`}>
              <Input className={`${blockName}__form-item-input`} onFocus={handleMobileFocus} value={addressInfo.mobile} onInput={handleInput} type="number" placeholder="手机号码" placeholderStyle="color:#ccc" maxlength={50} />
            </View>
            { addressInfo.mobile && <Icon className={`${blockName}__clear`} onClick={handleClear} type="close" /> }
          </View>
          <View className={`${blockName}__form-item ${blockName}__form-item-area`}>
            <View className={`${blockName}__item`}>所在地区</View>
            <View className={`${blockName}__other`}>
              {
                addressInfo.addressNames.length > 0 && (
                  `${addressInfo.addressNames.join(` `)}`
                ) || (
                  <Text style={{ color: '#ccc' }}>省市区县、乡镇等</Text>
                )
              }
            </View>
            {/* <View className={`${blockName}__tips`}>请补充县/区信息</View> */}
            {
              showEditAddrLocation && (
                <View onClick={handleClickLocation} className={`${blockName}__form-item-location`}>
                  <Icon size={15} type="location" className={`${blockName}__form-item-location-icon`} />
                  定位
                </View>
              ) || (
                <Icon type="right" className={`${blockName}__form-item-icon`} />
              )
            }
          </View>
          <View className={`${blockName}__form-item ${blockName}__form-item-addr-detail`}>
            <View className={`${blockName}__item`}>详细地址</View>
            <View className={`${blockName}__other`}>
              {/* <CoverView className={`${blockName}___form-item-addr-detail-tip`}>
                <CoverImage className={`${blockName}___form-item-addr-detail-tip-image`} src="https://img12.360buyimg.com/img/s208x56_jfs/t1/150114/6/15527/1352/5fbc98a3Ea9f41b47/eb29888a3da2d019.png" />
                <CoverView className={`${blockName}___form-item-addr-detail-tip-text`}>记得完善门牌号</CoverView>
              </CoverView> */}
              <Textarea value={addressInfo.addressDetail} className={`${blockName}__detail-addr`} autoHeight onClick={handleClickDetailInput} onInput={handleInput} maxlength={100} placeholder="街道、楼牌号等" placeholderClass={`${blockName}__detail-addr-placeholder`} showConfirmBar={false} />
            </View>
            { addressInfo.addressDetail && <Icon className={`${blockName}__clear`} onClick={handleClear} type="close" /> }
          </View>
          <View className={`${blockName}__form-item`}>
            <View className={`${blockName}__item`}>地址标签</View>
            <View className={`${blockName}__tags`}>
              <Text className={`${blockName}__tags-tag ${addressInfo.label === '公司' && `${blockName}__tags-tag-cur`}`} onClick={handleClickTag}>公司</Text>
              <Text className={`${blockName}__tags-tag ${addressInfo.label === '学校' && `${blockName}__tags-tag-cur`}`} onClick={handleClickTag}>学校</Text>
              <Text className={`${blockName}__tags-tag ${addressInfo.label === '家' && `${blockName}__tags-tag-cur`}`} onClick={handleClickTag}>家</Text>
              {
                !myLabel && (
                  <Text className={`${blockName}__tags-tag ${blockName}__plus-tag`}>
                    <Text className={`${blockName}__plus`}></Text>
                  </Text>
                )
              }
              {
                myLabel && (
                  <Fragment>
                    {
                      addressInfo.label !== myLabel && (
                        <View className={`${blockName}__tags-tag-wrap`}>
                          <TagInput value={myLabel} isEdit={false} />
                          <Text className={`${blockName}__tags-close`}></Text>
                        </View>
                      ) || (
                        <Text className={`${blockName}__tags-tag`} onClick={handleClickMyLabel}>{myLabel}</Text>
                      )
                    }
                  </Fragment>
                )
              }
            </View>
          </View>
        </View>
        <View className={`${blockName}__address-addon`}>
          <View className={`${blockName}__sniff-addr`}>
            <View className={`${blockName}__sniff-addr-title`}>智能识别地址:</View>
            <View className={`${blockName}__sniff-addr-content`}>
              {addrSniffText}
              <Text style="color:#CCCCCC">粘贴整段文字如:</Text>
            </View>
            {/* <Textarea onInput={handleAddrSniffInput} autoHeight placeholder="粘贴整段文字如" placeholderStyle="color:#CCCCCC" value={addrSniffText} maxlength={121} cursorSpacing={40}></Textarea> */}
            <View className={`${blockName}__sniff-addr-actions`}>
              {
                addrSniffText.length > 0 && (
                  <Fragment>
                    <View onClick={handleClearAddrSniffText} className={`${blockName}__sniff-addr-clear`}>清空</View>
                    <View onClick={handleClickSniff} className={`${blockName}__sniff-addr-confirm`}>识别</View>
                  </Fragment>
                )
              }
            </View>
          </View>
          <View className={`${blockName}__address-default`}>
            <View className={`${blockName}__address-default-content`}>
              <View className={`${blockName}__address-default-title`}>设置为默认地址</View>
              <View className={`${blockName}__address-default-tip`}>提醒:每次下单会默认推荐使用该地址</View>
            </View>
            <Switch className={`${blockName}__address-default-checkbox`} onClick={handleChangeDefault}></Switch>
          </View>
        </View>
        <View className={`${blockName}__op`}>
          <View className={`${blockName}__op-btn`}>
            <PayConfirmButton className={`${blockName}__button`} onClick={handleConfirm}>{type === 'add' ? `保存并使用该地址` : `确认`}</PayConfirmButton>
            { type !== 'add' && <PayConfirmButton className={`${blockName}__button`} onClick={handleDel} type="default">{`删除地址`}</PayConfirmButton> }
          </View>
        </View>
      </View>
      <AddressLayer />
      {
        showAreaCodePopup && (
          <Popup onClose={handleAreaCodePopupClose} title="电话区号" >
            <View className={`${blockName}__area-code-container`}>
              <View className={`${blockName}__hot-title`}>常用区号</View>
              <View className={`${blockName}__hot-cities`}>
                {
                  hotAreaCodes.map(item => (
                    <View onClick={() => handleClickAreaCode(item.code)} className={`${blockName}__hot-city ${mobilePrefix === item.code && `${blockName}__hot-city--on`}`}>{item.name} +{item.code}</View>
                  ))
                }
              </View>
              <ScrollView className={`${blockName}__area-code-list`} scrollY>
                {
                  areaCodes.map(item => (
                    <Fragment>
                      <View className={`${blockName}__area-code-item-group`}></View>
                      <View className={`${blockName}__area-code-item ${addressInfo.areaCode === item.code && `${blockName}__area-code-item--on`}`} onClick={() => handleClickAreaCode(item.code)}>{item.name} +{item.code}</View>
                    </Fragment>
                  ))
                }
              </ScrollView>
            </View>
          </Popup>
        )
      }
    </Fragment>
  );
}
