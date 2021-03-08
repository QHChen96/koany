import { View, Button, Text, Image } from '@tarojs/components';
import React, { Fragment, useRef } from 'react';

const blockName = `koany-product-specific`;

import './index.scss';

export interface SpecificIntroEntity {
  content: { imageUrl: string; type: string; width: string; height: string; }[];
  specs: {
    tips?: string;
    packInfo?: string;
  },
  specifics?: { title?: string; contents: {key:string, value: string}[];}[];

}

export interface SpecificProps {
  intro: any;
}

const Specific: React.FC<SpecificProps> = ({
  intro
}) => {

  const imagesSizes = useRef({});

  const handleTouchEnd = () => {}
  const handleTouchStart = () => {}
  const handleClick = () => {}
  const handleImageLoad = (e, index) => {
    const width = e.detail.naturalWidth || e.detail.width;
    const height = e.detail.naturalHeight || e.detail.height;
    if (width > 400) {
      imagesSizes.current[index] = {
        width: 750,
        height: Math.round(750 * height / width)
      }
    }
  }
  return (
    <Fragment>
      <View className={`${blockName} margin_top`}>
        <View className={`${blockName}__item`}>
          <View className={`${blockName}__title radius-top common_padding_left`}>
            <View className={`common_module_title`}>详情</View>
          </View>
          <View className={`${blockName}__section-intro`}  onClick={handleClick} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>

          {
            intro.specs.packInfo && (
              <View className={`${blockName}__pack-list`}>
                <View className={`${blockName}__section-intro-title`}>包装清单</View>
                <View style={{ fontSize: `12px`, paddingLeft: `${36}rpx`, paddingRight: `${36}rpx`, color: '#999' }}>{intro.specs.packInfo}</View>
              </View>
            )
          }
          <View className={`${blockName}__section-intro-title`}>规格参数</View>
            <View className={`${blockName}__section-specs`}>
              { intro.specs.tips && <View className={`${blockName}__load-tips`}>{intro.specs.tips}</View> }
              <View className={`${blockName}__section-specs-content`}>
                {
                  intro.specifics && (
                    <View className={`${blockName}__specific`}>
                      <View className={`${blockName}__spec-table`}>
                        {
                          intro.specifics.map(specific => (
                            <View>
                              {
                                specific.title && (
                                  <View className={`${blockName}__spec-table-tr`}>
                                    <View className={`${blockName}__spec-table-td ${blockName}__spec-table-title`}>{specific.title}</View>
                                    <Text selectable className={`${blockName}__spec-table-td ${blockName}__spec-table-content`}></Text>
                                  </View>
                                )
                              }
                              {
                                specific.content && (
                                  <View className={`${blockName}__spec-table-tr ${blockName}__spec-table-line`} key={`product-spec-content-${specific.content[0]}`}>
                                    <View className={`${blockName}__spec-table-td ${blockName}__spec-table-label`}>{specific.content[0]}</View>
                                    <Text selectable className={`${blockName}__spec-table-td ${blockName}__spec-table-content`}>{specific.content[1]}</Text>
                                  </View>
                                )
                              }
                            </View>
                            )
                          )
                        }
                      </View>
                    </View>
                  )
                }
              </View>
            </View>

            <View className={`row_gray`}></View>

            <View className={`${blockName}__section-intro-title intro`}>商品介绍</View>
            {
              intro.content && (
                <View className={`${blockName}__content`}>
                  {
                    intro.content.map((item, idx) => (
                      <Fragment>
                        { item.imageUrl && <Image mode="widthFix" onLoad={(e) => handleImageLoad(e, idx)} className={`${blockName}__image`} src={item.imageUrl} style={{ width: imagesSizes.current[idx] && `${imagesSizes.current[idx].width}rpx`, height: imagesSizes.current[idx] && `${imagesSizes.current[idx].height}rpx` }} /> }
                        { item.value && <Text className={`${blockName}__p`}>{item.value}</Text> }
                      </Fragment>
                    ))
                  }
                </View>
              )
            }
            <View className={`row_gray`}></View>

            <View className={`${blockName}__section-service`}>
              {/* <View className={`${blockName}__section-intro-title`}>包装售后</View> */}
              <View className={`${blockName}__section-service-content`}>
                <View className={`${blockName}__header`}>
                  <Text>价格说明</Text>
                </View>
                <Text className={`${blockName}__p`}>1.销售价：是您最终决定是否购买商品的依据。</Text>
                <Text className={`${blockName}__p`}>2.划线价：商品展示的划横线价格为参考价。</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};


export default Specific;
