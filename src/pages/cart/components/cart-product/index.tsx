import { SliderView, Icon } from '@/components';
import { View, Image, Text } from '@tarojs/components';
import React from 'react';
import NumberPicker from '../number-picker';
import './index.scss';
import { navigateTo } from '@/common';

const blockName = `koany-cart-product`;

export interface Sku {
  maxBuyNum: number;
  minBuyNum: number;
  skuName: string;
}

export interface ProductLabel {
  image: string;
  height: number;
  width: number;

}
export interface CartProductEntity {
  image: string;
  name: string;
  cashBack: number;
  margin: number;
  labels: ProductLabel[];
  ext: CartProductExtEntity;
  actTitle?: string;
  actDesc?: string;
  hidePrice?: boolean;
  showPrice: number[];
  crossedPrice: number;
  num: number;
  mainSku: Sku;
  checked?: boolean;
}
export interface CartProductExtEntity {
  stockDesc: string;
}
export interface CartProductProps {
  editable: boolean;
  product: CartProductEntity;
  onChangeSku?: () => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  editable,
  product,
  onChangeSku
}) => {

  const handleToDetail = () => {
    navigateTo({
      url: '/pages/item/index'
    })
  }

  const handleChangeSku = () => {
    onChangeSku && onChangeSku();
  }

  return (
    <View className="goods z-1" style={{ paddingTop: `36rpx` }}>
      <SliderView pixels="rpx" moveMax={272} renderBtn={
        <View className="btns h-full flex flex-row items-stretch justify-center overflow-hidden" style={{ fontSize: `28rpx` }}>
          <View className="flex flex-1 white items-center justify-center" style={{ background: `linear-gradient(179deg,#ffba0d,#ffc30d 68%,#ffcf0d 98%)` }}>移至收藏</View>
          <View className="flex flex-1 white items-center justify-center" style={{ background: `linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c)` }}>删除</View>
        </View>
      }>
        <View className="main flex relative black-26" style={{ width: `100vw`, fontSize: `20rpx` }}>
          <View className={`checkbox ${product.checked ? `checkbox--checked` : ''} flex items-center`} style={{ height: `200rpx`, marginLeft: `36rpx`, marginRight: `18rpx` }}></View>
          <View onClick={handleToDetail} className="goods-image relative flex flex-initial flex-shrink-0  flex-col" style={{ paddingTop: `6rpx`, width: `200rpx`, minHeight: `220rpx` }}>
            <Image className="image box-shadow-img" style={{ width: `200rpx`, height: `200rpx`, borderRadius: `12rpx` }} lazyLoad mode="aspectFit" src={product.image} />
            {
              product.ext.stockDesc && (
                <View className="goods-stock text-center bg-black bg-opacity-50 white" style={{ fontSize: `24rpx`, lineHeight: `40rpx`, marginTop: `-40rpx`, borderRadius: `0 0 12rpx 12rpx` }}>
                  <Text className="desc invisible">{product.ext.stockDesc}</Text>
                </View>
              )
            }
          </View>
          <View className="goods-content flex-1 relative overflow-hidden" style={{ padding: `0 36rpx 0 24rpx` }}>
            <View onClick={handleToDetail} className="goods-name line-2" style={{ fontSize: `26rpx`, marginBottom: `12rpx` }}>
              {
                product.labels && product.labels.map(label => (
                  (label && label.image) && <Image className="tip" mode="heightFix" src={label.image} style={{ width: `${label.width}px`, height: `${label.height}px` }} />
                ))
              }
              { product.name }
            </View>
            <View className="goods-content-line flex items-center justify-between">
              <View onClick={handleChangeSku} className="goods-sku black-26 bg-black bg-opacity-5 flex flex-initial empty-display" style={{ borderRadius: `18rpx`, padding: `0 16rpx`, lineHeight: `36rpx`, minWidth: `160rpx`, margin: `0 0 8rpx`}}>
                <View className="line-1">{product.mainSku.skuName}</View>
                <View style={{ marginLeft: `auto` }}>
                  <Icon size={12} type="pull_down" color="black-26" />
                </View>
              </View>
            </View>
            <View className="goods-discount overflow-hidden empty-display" style={{ maxHeight: `45rpx`, lineHeight: `34rpx`, margin: `0 0 8rpx` }}>
              { product.cashBack > 0 && <Text className={`${blockName}__discount-item relative inline-block align-middle red`} style={{ maxWidth: `300rpx` }}>立减￥{product.cashBack}</Text> }
              { product.margin > 0 && <Text className={`${blockName}__discount-item relative inline-block align-middle red`}  style={{ maxWidth: `300rpx` }}>已降价￥{product.margin}</Text> }
            </View>
            {
              product.actDesc && (
                <View className="goods-act red empty-display" style={{ marginBottom: `8rpx`, lineHeight: `30rpx` }}>
                  <Text className="goods-act-title font-bold" style={{ marginRight: `12rpx` }}>{product.actTitle}</Text>{product.actDesc}
                </View>
              )
            }
            <View className="goods-price-box flex justify-between">
              {
                (product.hidePrice &&
                  <View className="goods-price">￥<Text className="large" style={{ fontSize: `36rpx` }}>待发布</Text></View>
                ) ||
                (
                  <View className="goods-price flex-initial red" style={{ fontSize: `24rpx` }}>
                    <View className="price inline-block" style={{ lineHeight: `54rpx`, marginRight: `10rpx` }}>
                      ￥<Text className="large" style={{ fontSize: `36rpx` }}>{product.showPrice[0]}</Text>.{product.showPrice[1]}
                    </View>
                    { product.crossedPrice && <View className="goods-price-del inline-block line-through grey-1" style={{ marginRight: `10rpx` }}>￥{product.crossedPrice}</View> }
                  </View>
                )
              }
              <NumberPicker className={`flex-initial flex-shrink-0 self-baseline`} num={product.num} max={product.mainSku.maxBuyNum} min={product.mainSku.minBuyNum} />
            </View>
          </View>
        </View>
      </SliderView>
    </View>
  );
};

export default CartProduct;
