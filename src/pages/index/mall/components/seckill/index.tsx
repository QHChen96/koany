import React from "react";
import { View, Text, ScrollView, Image } from '@tarojs/components';
import './index.scss';
import classNames from 'classnames';

const blockName = `koany-index-seckill`;

export interface SeckillProps {
  hideModule?: boolean;
  seckillTitle?: string;
  seckillBeginTime?: string;
  countdownHour?: string;
  countdownMinute?: string;
  countdownSecond?: string;
  seckillDes?: string;
}

const Seckill = ({
  hideModule,
  seckillTitle='秒杀',
  seckillBeginTime='08',
  countdownHour='01',
  countdownMinute='59',
  countdownSecond='59',
  seckillDes='更多'
}: SeckillProps) => {
  if (hideModule) {
    return null;
  }
  const seckillGoods = [

    { skuId: 1, label: '', price: 10, oldPrice: 20, image: 'https://img12.360buyimg.com/n2/s308x308_jfs/t1/152065/1/13661/68185/5ff567c5Edccf0fbe/3a3baaa9fd67bde3.jpg' },
    { skuId: 2, label: '', price: 10, oldPrice: 20, image: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124144/10/14812/46574/5f86163cE7bdd2f14/91587f2ddb955545.jpg' },
    { skuId: 3, label: '', price: 10, oldPrice: 20, image: 'https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/139577/21/11787/471487/5f927d03Ea21203de/5ecca00d0b6169df.png' },
    { skuId: 4, label: '', price: 10, oldPrice: 20, image: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124144/10/14812/46574/5f86163cE7bdd2f14/91587f2ddb955545.jpg' },
    { skuId: 5, label: '', price: 10, oldPrice: 20, image: 'https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/139577/21/11787/471487/5f927d03Ea21203de/5ecca00d0b6169df.png' },
    { skuId: 6, label: '', price: 10, oldPrice: 20, image: 'https://img12.360buyimg.com/n2/s308x308_jfs/t1/152065/1/13661/68185/5ff567c5Edccf0fbe/3a3baaa9fd67bde3.jpg' },
    { skuId: 7, label: '', price: 10, oldPrice: 20, image: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124144/10/14812/46574/5f86163cE7bdd2f14/91587f2ddb955545.jpg' },

  ];
  return (
    <View className={classNames(`${blockName}`)}>
      <View className={`${blockName}__floor-title`}>
        <View className={`${blockName}__floor-title__dt`}>{seckillTitle}</View>
        {
          seckillBeginTime && (
            <View className={`${blockName}__countdown`}>
              <View className={`${blockName}__countdown-text`}>{seckillBeginTime}点场</View>
              <View className={`${blockName}__countdown-time`}>
                { countdownHour && <Text className={`${blockName}__countdown-time-item`}>{countdownHour}:</Text> }
                { countdownMinute && <Text className={`${blockName}__countdown-time-item`}>{countdownMinute}:</Text> }
                { countdownSecond && <Text className={`${blockName}__countdown-time-item`}>{countdownSecond}</Text> }
              </View>
            </View>
          ) || null
        }
        <View className={`${blockName}__floor-title-more`}>{seckillDes}</View>
      </View>
      <ScrollView scrollX className={`${blockName}__slider`}>
        {
          seckillGoods.map(item => (
            <View className={`${blockName}__slider-item`} key={item.skuId}>
              <View className={`${blockName}__image`}>
                  <Image lazyLoad className={`${blockName}__image-cover`} src={`${item.image}`}></Image>
                  { item.label && <View className={`${blockName}__image-label line1`}>{item.label}</View> || null }
              </View>
              <View className={`${blockName}__price line1`}>
                <View className={`${blockName}__price-icon`}>¥</View>{item.price}</View>
              <View className={`${blockName}__price-old line1`}>¥{item.oldPrice}</View>
            </View>
          ))
        }
        {
          seckillGoods.length > 4 && (
            <View className={classNames(`${blockName}__slider-item`, `${blockName}__slider-item-more`)}>
              <Text className={`${blockName}__slider-item-more-text`}>查看更多</Text>
            </View>
          )
        }
      </ScrollView>
    </View>
  )
}

export default Seckill;
