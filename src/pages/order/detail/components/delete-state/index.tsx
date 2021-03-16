import React, { useState } from "react";
import { View, Image, Map, Text, Input } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";

const blockName = `koany-order-detail-delete-state`;

export interface DeleteStateProps {

}
const DeleteState = ({
}: DeleteStateProps) => {
  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__placeholder`}></View>
      <View className={`${blockName}__desc`}>
        <View className={`${blockName}__desc-main`}>查无此订单</View>
        <View className={`${blockName}__desc-small`}>订单无法查看或该订单已被删除</View>
      </View>
      <View className={`${blockName}__order-all`}>查看全部订单</View>
    </View>
  )
}

export default DeleteState;
