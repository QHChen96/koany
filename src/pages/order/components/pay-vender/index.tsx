import React, { useState } from "react";
import { View, Image, Text, Input } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";

const blockName = `koany-order-pay-vender`;

export interface PayVenderProps {

}

const PayVender = ({

}: PayVenderProps) => {

  const [numInputFocus, setNumInputFocus] = useState(false);

  let isCanEdit = true;

  const order = {
    shopName: "店主名称",
    products: [
      {
        spec: '热卖',
        num: 1,
        weight: '0.2kg',
        title: 'Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机Apple iPhone 12 Pro (A2408) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
        imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124144/10/14812/46574/5f86163cE7bdd2f14/91587f2ddb955545.jpg',
        price: {
          int: 100,
          decimal: "99"
        }
      },

    ]
  }

  const handleInputFocus = () => {}
  const handleProductQuantitySet = () => {}
  const handleInputClick = () => {}

  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__shop`}>
        <View className={`${blockName}__shop-name`}>
          <Icon className={`${blockName}__shop-icon`} type="shop" size={14} />
          {order.shopName}
        </View>
        <View className={`${blockName}__good-list`}>
          {
            order.products.map(product => (
              <View className={`${blockName}__good-item`}>
                {/* <View className={`${blockName}__good-item-head`}></View> */}
                <View className={`${blockName}__good-item-content`}>
                  <View className={`${blockName}__good-item-image-container`}>
                    <Image className={`${blockName}__good-item-image`} lazyLoad src={product.imageUrl} />
                  </View>
                  <View className={`${blockName}__good-item-info`}>
                    <View className={`${blockName}__good-item-name line-1`}>
                      <Text className={`${blockName}__good-item-name-text`}>{product.title}</Text>
                    </View>
                    <View className={`${blockName}__good-item-specs line-2`}>
                      { product.spec && <Text className={`${blockName}__good-item-spec-item`}>{product.spec}</Text> }
                      { product.weight && <Text className={`${blockName}__good-item-spec-item`}>重量：{product.weight};</Text> }
                    </View>
                    <View className={`${blockName}__good-item-sum`}>
                      <View className={`${blockName}__good-item-price`}>
                        ￥<Text className={`${blockName}__good-item-price-int`}>{product.price.int}</Text>.{product.price.decimal}
                      </View>
                      {
                        !isCanEdit && (
                          <View className={`${blockName}__good-item-num`}>
                            x{product.num}
                          </View>
                        ) || (
                          <View className={`${blockName}__good-item-num-picker`}>
                            <View className={`${blockName}__good-item-num-picker-sub`}>-</View>
                            <Input className={`${blockName}__good-item-num-picker-input`} onBlur={handleProductQuantitySet} onFocus={handleInputFocus} onClick={handleInputClick} maxlength={3} type="number" value={`${product.num}`}/>
                            <View className={`${blockName}__good-item-num-picker-add`}>+</View>
                          </View>
                        )
                      }
                      { numInputFocus && <View className={`${blockName}__good-item-num-picker-mask`}></View> }
                    </View>
                    <View className={`${blockName}__good-item-service`}>
                      <View className={`${blockName}__good-item-service-item`}>
                        <Icon className={`${blockName}__good-item-service-item-icon`} type="info" size={14} />
                        <Text className={`${blockName}__good-item-service-item-text`}>价格说明</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))
          }
        </View>
      </View>
    </View>
  )
}

export default PayVender;
