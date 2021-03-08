import React, { Fragment } from "react";
import { View, Image, Map, Text, Input } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";

const blockName = `koany-order-search-bar`

export interface SearchBarProps {
  navHeight?: number;
  keyWords?: string;
}

const SearchBar = ({
  navHeight=0
}: SearchBarProps) => {

  return (
    <Fragment>
      <View className={`${blockName}`}>
        <View className={`${blockName}__container`} >
          <View className={`${blockName}__readonly`}>
            <View className={`${blockName}__readonly-input`}>
              <Icon type="search" />
              <View className={`${blockName}__readonly-input-text`}>搜索我的订单</View>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  )
}

export default SearchBar;
