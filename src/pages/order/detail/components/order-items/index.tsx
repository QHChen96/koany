import React, { useState } from "react";
import { View, Image, Map, Text, Input } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";
import Taro from '@tarojs/taro';
import { navigateTo } from "@/common";

const blockName = `koany-order-detail-item`;

export interface OrderItemsProps {

}

const OrderItems = ({

}: OrderItemsProps) => {

  const shop = {
    shopName: '店主名称',
    shopTotal: 2,
    productList: [
      {
        imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124144/10/14812/46574/5f86163cE7bdd2f14/91587f2ddb955545.jpg',
        amount: 1,
        title: 'Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
        price: {
          int: 100,
          decimal: "99"
        },
        specSkuDescList: ['磨砂黑', '2T']
      },
      {
        imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124144/10/14812/46574/5f86163cE7bdd2f14/91587f2ddb955545.jpg',
        amount: 1,
        title: 'Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
        price: {
          int: 100,
          decimal: "99"
        },
        specSkuDescList: ['磨砂黑', '2T']
      }
    ]
  }

  const handleToDetail = () => {
    navigateTo({
      url: '/pages/item/index'
    })
  }

  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__goods`}>
        <View className={`${blockName}__shop`}>
          <Icon className={`${blockName}__shop-icon`} type="shop" size={14} />
          <View className={`${blockName}__shop-name`}>
            <Text className={`${blockName}__shop-title`}>{shop.shopName}</Text>
          </View>
          <Text className={`${blockName}__shop-desc`}>共计 {shop.shopTotal} 件商品</Text>
        </View>
        {
          shop.productList.map(good => (
            <View className={`${blockName}__good`} onClick={handleToDetail}>
              <View className={`${blockName}__good-item`}>
                <View className={`${blockName}__good-cover`}>
                  <Image className={`${blockName}__good-cover-img`} src={good.imageUrl}></Image>
                </View>
                <View className={`${blockName}__good-content`}>
                  <View className={`${blockName}__good-info`}>
                    <View className={`${blockName}__good-info-name line-2`}>
                      {good.title}
                    </View>
                    <View>
                      {
                        good.specSkuDescList.map(skuDesc => (
                          <Text className={`${blockName}__good-sku-coll`} key={`order-items-sku-coll-${skuDesc}`}>
                            {skuDesc}
                          </Text>
                        ))
                      }
                    </View>
                  </View>
                  <View className={`${blockName}__good-price`}>
                    <Text className={`${blockName}__good-price-container`}>¥<Text className={`${blockName}__good-price-int`}>{good.price.int}</Text>.{good.price.decimal}</Text>
                    <Text className={`${blockName}__good-count`}>x {good.amount}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        }

      </View>


    </View>
  )
}

export default OrderItems;
