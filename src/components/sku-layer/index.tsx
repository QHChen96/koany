import { View, ScrollView, Image, Text, Input } from '@tarojs/components';
import React from 'react';
import classnames from 'classnames';
import { Icon } from '@/components';
import './index.scss';

const blockName = `koany-product-sku-layer`;

export interface SkuInfoEntity {
  imageUrl: string;
  price: {
    integer: string;
    decimal: string;
  },
  discountInfo: {
    discountName: string;
    price: {
      integer: string;
      decimal: string;
    }
  },
  originalPrice: {
    integer: string;
    decimal: string;
  },
  goodsNum: number,
  skuName?: string;
  skuProps: {
    title: string;
    skuPropValues: {
      name: string;
      checked?: boolean;
    }[];
  }[],
  stock: number;
}

export interface SkuLayerProps {
  show?: boolean;
  showAnim?: boolean;
  info: SkuInfoEntity;
  className?: string;
  supportTab?: boolean;
  onClose?: () => void;
}

const SkuLayer: React.FC<SkuLayerProps> = ({
  show,
  className,
  showAnim=true,
  supportTab=true,
  info,
  onClose,
}) => {
  if (!show) {
    return null;
  }

  const handleClose = () => {
    onClose && onClose();
  }

  return (
    <View onTouchMove={() => {}} className={`${blockName}`} catchMove>
      <View catchMove onClick={handleClose} className={classnames(`${blockName}__mask`, show && `${blockName}__mask--show`, showAnim && `${blockName}__mask--anim`)} ></View>
      <View catchMove className={classnames(`${blockName}__main`, show && `${blockName}--show`, className, !supportTab && `${blockName}--no-tab`)}>
        <View className={classnames(`${blockName}__header`)}>
          <View className={classnames(`${blockName}__header-img`)}>
            <Image className={classnames(`${blockName}__header-image`)} mode="aspectFill" src={info.imageUrl}></Image>
          </View>
          <View className={classnames(`${blockName}__header-info`)}>
            <View className={classnames(`${blockName}__header-price`)}>
              <View className={classnames(`${blockName}__header-price-container`)}>
                <View className={classnames(`${blockName}__header-price-main-content`)}>
                  <Text className={`${blockName}__yen`}>￥</Text>
                  <Text className={`${blockName}__int`}>{info.price.integer}</Text>
                  <Text className={`${blockName}__decimal`}>.{info.price.decimal}</Text>
                </View>
                <View className={classnames(`${blockName}__header-price-tag-content`)}>
                  {/* <View className={classnames(`${blockName}__header-discount`)}>
                    {info.discountInfo.discountName}
                    <Text className={`${blockName}__header-discount-price-mark`}></Text>
                    <Text className={`${blockName}__header-discount-price`}>{info.discountInfo.price.integer}.{info.discountInfo.price.decimal}</Text>
                  </View> */}
                </View>
                <View className={classnames(`${blockName}__header-price-double-container`)}>
                  <View className={classnames(`${blockName}__header-price-double-original`)}>
                    <Text className={`${blockName}__yen`}>￥</Text>
                    <Text className={`${blockName}__int`}>{info.originalPrice.integer}</Text>
                    <Text className={`${blockName}__decimal`}>.{info.originalPrice.decimal}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className={classnames(`${blockName}__header-spec`)}>
              <View className={classnames(`${blockName}__header-spec-label`)}>
                已选
              </View>
              <Text className={classnames(`${blockName}__header-spec-num`)}>{info.skuName && `${info.skuName}，` || ''}{info.goodsNum}个</Text>
            </View>
          </View>
          <View onClick={handleClose} className={classnames(`${blockName}__header-close`)}>
            <Icon className={classnames(`${blockName}__header-close-icon`)}type="close" />
          </View>
        </View>
        <ScrollView scrollY className={classnames(`${blockName}__body`)}>
          <View className={classnames(`${blockName}__body-content`)}>
            <View className={classnames(`${blockName}__panel`)}>
              {
                info.skuProps.map(prop => (
                  <View className={classnames(`${blockName}__panel-item`)}>
                    <View className={classnames(`${blockName}__label`)}>{prop.title}</View>
                    <View className={classnames(`${blockName}__list`)}>
                      {
                        prop.skuPropValues.map(propValue => (
                          <View className={classnames(`${blockName}__list-item`, propValue.checked && `${blockName}__list-item--cur`)}>{propValue.name}</View>
                        ))
                      }
                    </View>
                  </View>
                ))
              }
              <View className={classnames(`${blockName}__num`)}>
                <View className={classnames(`${blockName}__num-name`)}>
                  数量
                  <Text className={classnames(`${blockName}__num-stock`)}>库存仅剩{info.stock}件</Text>
                </View>
                <View className={classnames(`${blockName}__num-picker`)}>
                  <View className={classnames(`${blockName}__num-picker-sub`)}>
                    <Text className={classnames(`${blockName}__num-picker-sub-text`)}></Text>
                  </View>
                  <Input className={classnames(`${blockName}__num-picker-input`)} maxlength={4} type="number" value={`${info.goodsNum}`}></Input>
                  <View className={classnames(`${blockName}__num-picker-add`)}>
                    <Text className={classnames(`${blockName}__num-picker-add-text`)}></Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View className={classnames(`${blockName}__btn`)}>
          <View className={classnames(`${blockName}__btn-confirm`)}>
            确定
          </View>
        </View>
      </View>
    </View>
  );
};


export default SkuLayer;
