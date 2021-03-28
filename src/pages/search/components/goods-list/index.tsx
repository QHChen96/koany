import { View, Image, Text } from '@tarojs/components';
import React, { Fragment } from 'react';
import './index.scss';
import { navigateTo } from '@/common';

const blockName = `koany-search-goods-list`;

export interface GoodsListProps {
  listMode?: number;
  list?: any[];
}

const GoodsList: React.FC<GoodsListProps> = ({
  listMode=2,
  list=[]
}) => {

  const handleToItem = () => {
    navigateTo({
      url: `/pages/item/index`
    })
  }

  return (
    <View className={`${blockName} ${blockName}__cols-${listMode}`}>
      {
        list.map(item => (
          <Fragment key={`search-goods-list-item-${item.id}`}>
            {
              <View className={`${blockName}__item`} onClick={handleToItem}>
                <View className={`${blockName}__item-cover bg-placeholder`}>
                  <Image className={`${blockName}__item-img`} lazyLoad src={item.imageUrl} />
                  {
                    item.tags.picture.map(tag => (
                      <Fragment key={`search-goods-list-item-tag-${tag.name}`}>
                        { tag.type === 'normal' && <View className={`${blockName}__cover-tips`}>{tag.text}</View> }
                      </Fragment>
                    ))
                  }
                </View>
                <View className={`${blockName}__item-info`}>
                  <View className={`${blockName}__item-flex`}>
                    <View className={`${blockName}__item-title line-2`}>
                      {
                        item.tags.title.map(tag => (
                          tag.imageUrl && <Image mode="heightFix" style={{ width: tag.width}} src={tag.imageUrl} key={`search-goods-list-item-title-tag-${tag.name}`} />
                        ))
                      }
                      {item.title}
                    </View>
                    {
                      item.attrs.length > 0 && (
                        <View className={`${blockName}__item-attrs`}>
                          {
                            item.attrs.map(attr => (
                              <View className={`${blockName}__word`}>{attr.name}</View>
                            ))
                          }
                        </View>
                      )
                    }
                  </View>
                  <View className={`${blockName}__item-price-area`}>
                    <View className={`${blockName}__item-price red`}>
                      {
                        (
                          item.price.type === 'hide' && <View>待发布</View>
                        ) ||
                        (
                          item.price.value && (
                            <View>
                              ￥<Text className={`int`}>{item.price.value[0]}</Text>{item.price.value[1] ? `.${item.price.value[1]}` : ''}
                            </View>
                          )
                        ) ||
                        (
                          <View>暂无报价</View>
                        )
                      }
                    </View>
                  </View>
                </View>
              </View>
            }
          </Fragment>
        ))
      }
    </View>
  );
}

export default GoodsList;
