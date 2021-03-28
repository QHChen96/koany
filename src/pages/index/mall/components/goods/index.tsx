import React from 'react';
import { View, Image } from '@tarojs/components';
import './index.scss';

const blockName = `koany-index-goods`;

export interface GoodsProps {
  hidden?: boolean;
  list?: GoodsEntity[];
}

export interface GoodsEntity {
  imageUrl: string;
  name: string;
  price: {
    integer: number;
    decimal: string;
  };
  refPrice?: {
    integer: number;
    decimal: string;
  };
  tag?: string;
}

const Goods: React.FC<GoodsProps> = ({
  hidden,
  list=[]
}) => {
  if (hidden) {
    return null;
  }

  return (
    <View className={`${blockName}`} >
      <View className={`${blockName}__title`}></View>
      <View className={`${blockName}__body`}>
        {
          ['', ''].map((colItem, colIndex) => (
            <View className={`${blockName}__list`}>
              {
                list.map((item, index) => (
                  index % 2 == colIndex && (
                    <View className={`${blockName}__item`}>
                      <View className={`${blockName}__cover`}>
                        <Image className={`${blockName}__cover-image`} lazyLoad mode="widthFix" src={item.imageUrl} />
                      </View>
                      <View className={`${blockName}__info`}>
                        <View className={`${blockName}__name`}>{item.name}</View>
                        <View className={`${blockName}__price`}>
                          <View className={`${blockName}__price-content`}>
                            ￥
                            <View className={`${blockName}__price-content-num`}>{item.price.integer}</View>
                            <View>.{item.price.decimal}</View>
                            { item.tag && <View className={`${blockName}__price-tag`}>{item.tag}</View> }
                          </View>
                        </View>
                        {
                          item.refPrice && (
                            <View className={`${blockName}__price-old ${blockName}__price-old--through`}>
                              ￥{item.refPrice.integer}
                              <View>.{item.refPrice.decimal}</View>
                            </View>
                          )
                        }
                      </View>
                    </View>
                  )
                ))
              }
            </View>
          ))
        }
      </View>
    </View>
  );
}

export default Goods;
