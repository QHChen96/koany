import { Loading, Icon } from '@/components';
import { View, Text, ScrollView } from '@tarojs/components';
import React, { Fragment, useState } from 'react';
import './index.scss';

const blockName = 'koany-bottom-bar';

export interface CartSummary {
  price: number;
  cashback: number;
  checkedNum: number;
  checkedAll: boolean;
}
export interface BottomBarProps {
  hidden?: boolean;
  summary: CartSummary;
  editable: boolean;
  showQuickClearBtn?: boolean;
  onEditCheck: () => void;
  onFavorite: () => void;
  onGotoPay: () => void;
  onQuickClear: () => void;
  onRemove: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({
  hidden,
  summary,
  editable,
  onFavorite,
  onGotoPay,
  onQuickClear,
  onRemove,
  onEditCheck
}) => {
  if (hidden) {
    return null;
  }
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading pageLoading />
  }
  const [showSumDetail, setShowSumDetail] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const orderList: any[] = [];
  const summaryDetails: any[] = [];
  const [checkedAll, setCheckedAll] = useState(false);

  const handleHideOrderList = () => {
    setShowOrderPopup(false);
  }
  const handleOrderBtnClick = () => {
    onGotoPay && onGotoPay();
  }

  const handleCheckedAll = () => {
    setCheckedAll(!checkedAll);
    onEditCheck && onEditCheck();
  }
  const handleShowQuickClear = () => {
    onQuickClear && onQuickClear();
  }
  const handleMoveFav = () => {
    onFavorite && onFavorite();
  }
  const handleRemoveSelected = () => {
    onRemove && onRemove();
  }
  const handleGotoPay = () => {
    onGotoPay && onGotoPay();
  }
  return (
    <View className={`${blockName}`}>
      {
        !editable && (
          <View className={`flex fixed z-bottom b-0 l-0 r-0 items-center black-26 bg-white box-shadow-bottom `} style={{ height: `98rpx`, }}>
            <View onClick={handleCheckedAll} className="relative h-full text-right black-26 flex justify-end items-center" style={{ width: `136rpx`, fontSize: `24rpx` }}>
              {
                !checkedAll && (
                  <Icon type="round" size={20} />
                ) || (
                  <Icon type="round_check_fill" color="#f2270c" size={20} />
                )
              }
              <Text style={{ marginLeft: `8rpx` }}>全选</Text>
            </View>
            <View className="relative flex flex-1 justify-center overflow-hidden items-end word-break-all flow-column" style={{ marginLeft: `24rpx` }}>
              <View className="flex flex-row items-end overflow-hidden word-break-all" style={{ fontSize: `30rpx` }}>总计:
                <Text className="flex-1 black" style={{ fontSize: `32rpx` }}>￥{summary.price}</Text>
              </View>
              {
                (summary.cashback > 0) && (
                  <View className="black" style={{ fontSize: `20rpx` }}>已优惠:
                    <Text>￥{summary.cashback}</Text>
                  </View>
                )
              }
            </View>
            <View onClick={handleGotoPay} className="bottom-btn red" hoverClass="opacity-30" hoverStayTime={400}>去结算
              <Text className="text">{summary.checkedNum > 99 ? 99 : summary.checkedNum}</Text>
            </View>
          </View>
        ) || (
          <View className={`edit-bar flex fixed z-bottom b-0 l-0 r-0 items-center black-26 bg-white box-shadow-bottom`} style={{ height: `98rpx`, }}>
            <View onClick={handleCheckedAll} className={`checkbox relative h-full text-right black-26  flex justify-end items-center`} style={{ width: `136rpx`, fontSize: `24rpx` }}>
              {
                !checkedAll && (
                  <Icon type="round" size={20} />
                ) || (
                  <Icon type="round_check_fill" color="#f2270c" size={20} />
                )
              }
              <Text style={{ marginLeft: `8rpx` }}>全选</Text>
            </View>
            <View className="btns flex flex-1 justify-end items-center" style={{ fontSize: `24rpx`, margin: `0 36rpx` }}>
              <View onClick={handleShowQuickClear} className="quick-clear" hoverClass="opacity-30">
                快速清理
              </View>
              <View onClick={handleMoveFav} className="edit-btn" hoverClass="opacity-30">移至收藏</View>
              <View onClick={handleRemoveSelected} className="edit-btn red" hoverClass="opacity-30">删除</View>
            </View>
          </View>
        )
      }
      {
        showSumDetail && (
          <View className="popup">
            <View className="mask"></View>
            <View className="content">
              <View className="header">
                <View className="title">金额明细</View>
                <View className="close"></View>
              </View>
              <ScrollView className="body" scrollY>
                {
                  summaryDetails.map(item => (
                    <View className="item" key={`summary-detail-item-${item.id}`}>
                      <View className="head">
                        <Text className="title">{item.title}</Text>
                        <Text className="price">{item.price}</Text>
                      </View>
                      <View className="desc">{item.desc}</View>
                    </View>
                  ))
                }
              </ScrollView>
            </View>
          </View>
        )
      }
      {
        showOrderPopup && (
          <View className="modal">
            <View className="mask"></View>
            <View className="content">
              <View className="header">
                <View className="title">请分开结算以下商品</View>
              </View>
              <View className="body">
                {
                  orderList.map(item => (
                    <View className="item" key={`order-list-item-${item.id}`}>
                      <View className={`checkbox ${item.checked ? 'checked' : ''}`}></View>
                      <View className="summary">{item.name} {item.num}件</View>
                    </View>
                  ))
                }
              </View>
              <View className="footer">
                <View onClick={handleHideOrderList} className="btn default">返回</View>
                <View onClick={handleOrderBtnClick} className="btn primary">结算</View>
              </View>
            </View>
          </View>
        )
      }
    </View>
  )
}

export default BottomBar;