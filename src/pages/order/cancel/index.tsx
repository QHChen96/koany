import React, { Fragment, useState } from 'react'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

const blockName = 'koany-order-cancel'

export default (): React.ReactNode => {

  const topBarTitle = '';
  const refundRetainTip = '';
  const tips = [];
  const type = 'refund';
  const cancelInfo = {
    cancelReasons: [
      {
        checked: 1,
        cancelReason: '不想要了',
        childCancelReasons: [
          {
            checked: 1,
            cancelReason: '不想要了',
          }
        ]
      },
      {
        cancelReason: '多拍了'
      }
    ]
  }
  const cartInfo = {
    show: 1,
    cardId: '银行卡号',
    cardName: '开户名',
    cardBankName: '银行名称',
    contact: '联系人11',
    mobile: '联系人电话',
  };

  const curRefundReason = '';
  const curRefundMethod = '';
  const handleCloseBar = () => {}
  const handleBankCardInput = () => {}
  const handleGetCardBankInfo = () => {}
  const handleSetInputValue = () => {}
  const handleMobileInput = () => {}
  return (
    <View className={`${blockName}`}>
      {
        topBarTitle && (
          <View className={`${blockName}__top-bar`}>
            <View className={`${blockName}__top-bar-tip`}>{topBarTitle}</View>
            <View className={`${blockName}__top-bar-close`} onClick={handleCloseBar}></View>
          </View>
        )
      }
      <View className={`${blockName}__tip-bar ${blockName}__special`}>
        {
          tips.map((tip, index) => (
            <View className={`${blockName}__tip-item`}>{index + 1}. {tip}</View>
          ))
        }
      </View>
      {
        refundRetainTip && (
          <View className={`${blockName}__retain-tip`}>
            <View className={`${blockName}__mark`}>!</View>{refundRetainTip}
          </View>
        )
      }
      {
        type !== 'refund' && cancelInfo.cancelReasons.length > 0 && (
          <View className={`${blockName}__cancel-select-list`}>
            <View className={`${blockName}__title`}>请选择取消订单的原因(必须):</View>
            <View className={`${blockName}__reason-list`}>
              {
                cancelInfo.cancelReasons.map(item => (
                  <Fragment>
                    <View className={`${blockName}__reason-list-item ${item.checked === 1 && `${blockName}__selected`}`}>{item.cancelReason}</View>
                    {
                      item.childCancelReasons && (
                        <View className={`${blockName}__refund-item-tip`}>
                          <View className={`${blockName}__refund-child-item`}>
                            {
                              item.childCancelReasons.map(child => (
                                <View className={`${blockName}__child-item ${child.checked === 1 && `${blockName}__selected`}`}>{child.cancelReason}</View>
                              ))
                            }
                          </View>
                        </View>
                      )
                    }
                    <View className={`${blockName}__refund-item-tip`}>填错地址信息？无需取消订单，您可以试试修改地址</View>
                  </Fragment>
                ))
              }
            </View>
            <View className={`${blockName}__cancel-add-cart`}>
              <View className={`${blockName}__cancel-add-cart-cont`}>取消订单后，将本单商品放回购物车中</View>
              <View className={`${blockName}__cancel-add-cart-icon`}></View>
            </View>
          </View>
        )
      }
      {
        type === 'refund' && cancelInfo.cancelReasons.length > 0 && (
          <View className={`${blockName}__order-refund`}>
            <View className={`${blockName}__order-refund-item`}>
              <Text className={`${blockName}__order-refund-title`}>退款原因：</Text>
              <View className={`${blockName}__order-refund-content`}>{curRefundReason || '请选择退款原因'}</View>
            </View>
            <View className={`${blockName}__order-refund-item`}>
              <Text className={`${blockName}__order-refund-title`}>退款方式：</Text>
              <View className={`${blockName}__order-refund-content`}>{curRefundMethod || '请选择退款方式'}</View>
            </View>
            {
              cartInfo.show === 1 && (
                <Fragment>
                  <View className={`${blockName}__order-refund-item`}>
                    <Text className={`${blockName}__order-refund-title`}>银行卡号：</Text>
                    <View className={`${blockName}__order-refund-content`}>
                      <Input onBlur={handleGetCardBankInfo} onInput={handleBankCardInput} placeholder="请填写银行卡号" type="text" value={cartInfo.cardId} />
                    </View>
                  </View>
                  <View className={`${blockName}__order-refund-item`}>
                    <Text className={`${blockName}__order-refund-title`}>开户名：</Text>
                    <View className={`${blockName}__order-refund-content`}>
                      <Input onBlur={handleSetInputValue} maxlength={18} placeholder="请填写开户名" type="text" value={cartInfo.cardName} />
                    </View>
                  </View>
                  <View className={`${blockName}__order-refund-item`}>
                    <Text className={`${blockName}__order-refund-title`}>银行名称：</Text>
                    <View className={`${blockName}__order-refund-content`}>
                      {cartInfo.cardBankName}
                    </View>
                  </View>
                </Fragment>
              )
            }
            <View className={`${blockName}__order-refund-item`}>
              <Text className={`${blockName}__order-refund-title`}>联系人：</Text>
              <View className={`${blockName}__order-refund-content`}>
                <Input onBlur={handleSetInputValue} placeholder="请填写联系人" type="text" value={cartInfo.contact} />
              </View>
            </View>
            <View className={`${blockName}__order-refund-item`}>
              <Text className={`${blockName}__order-refund-title`}>联系方式：</Text>
              <View className={`${blockName}__order-refund-content`}>
                <Input onBlur={handleSetInputValue} onInput={handleMobileInput} placeholder="请填写联系方式" type="text" value={cartInfo.mobile} />
              </View>
            </View>

          </View>
        )
      }
      <View className={`${blockName}__btns`}>
        <Text className={`${blockName}__btn`}>取消</Text>
        <Text className={`${blockName}__btn`}>确认</Text>
      </View>

    </View>
  )
}
