import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { NavBar } from '@/components';
import { useNavInfo } from '@/hooks';
import SearchBar from './components/search-bar';
import Carousel from './components/carousel';
import { navigateTo } from '@/common';
import CateBar, { CateTabEntity } from './components/cate-bar';
import Goods from './components/goods';
import { GoodsEntity } from './components/goods/index';
import Seckill from './components/seckill';
import classnames from 'classnames';
import './index.scss';

const blockName = `koany-index`;

const Mall = () => {
  const [navInfo] = useNavInfo();
  const config = {
    isShowLogo: false,
    logoImg: ''
  }
  const handleToSearch = (keyword: string='') => {
    navigateTo({
      url: `/pages/search/index?keyword=${keyword}`
    });
  }

  const tabs: CateTabEntity[]  = [
    {
      name: '电脑'
    },
    {
      name: '手机'
    },
    {
      name: '衣服'
    },
    {
      name: '裤子'
    },
    {
      name: '键盘'
    },
    {
      name: '鼠标'
    }
  ];
  const goodList: GoodsEntity[] = [
    {
      name: '瑞视达T1手机投影仪家用迷你全高清微型便携式无线3D家庭影院无屏电视办公迷你小型投影机支持1080P 无需网络同屏',
      imageUrl: 'https://img12.360buyimg.com/n2/s308x308_jfs/t1/152065/1/13661/68185/5ff567c5Edccf0fbe/3a3baaa9fd67bde3.jpg',
      price: {
        integer: 100,
        decimal: "99"
      }
    },
    {
      name: '瑞视达T1手机投影仪家用迷你全高清微型便携式无线3D家庭影院无屏电视办公迷你小型投影机支持1080P 无需网络同屏',
      imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124144/10/14812/46574/5f86163cE7bdd2f14/91587f2ddb955545.jpg',
      price: {
        integer: 100,
        decimal: "99"
      },
      tag: '大促销'
    },
    {
      name: '瑞视达T1手机投影仪家用迷你全高清微型便携式无线3D家庭影院无屏电视办公迷你小型投影机支持1080P 无需网络同屏',
      imageUrl: 'https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/139577/21/11787/471487/5f927d03Ea21203de/5ecca00d0b6169df.png',
      price: {
        integer: 100,
        decimal: "99"
      },
      refPrice: {
        integer: 1000,
        decimal: "99"
      }
    },
    {
      name: '瑞视达T1手机投影仪家用迷你全高清微型便携式无线3D家庭影院无屏电视办公迷你小型投影机支持1080P 无需网络同屏',
      imageUrl: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/131861/4/12262/28027/5f867087E0c113ea8/0f9028ec73b8ff33.jpg',
      price: {
        integer: 100,
        decimal: "99"
      }
    }
  ]
  const titleHeight = navInfo.isSupportNav ? 750 * navInfo.navHeight / navInfo.screenWidth : 0;
  const fixedHeight = titleHeight + 140;

  return (
    <View className={classnames('koany-mall', `${blockName}`)}>
      <View >
        <View className="fixed t-0 l-0 r-0 box-border bg-cover bg-no-repeat bg-bottom"
          style={{
            height: `${fixedHeight}rpx`,
            paddingTop: `${titleHeight}rpx`,
            zIndex: 100,
            backgroundImage: `url(//img13.360buyimg.com/ling/jfs/t1/122670/22/5934/10850/5efc4febEbc94e7b0/f670a981f23c7347.png)`,
            backgroundColor: `#f2270c`
          }}>
          <NavBar capsuleType='none' opacity={"0"}>
            {
              config.isShowLogo && (
                <View className="vertical bg-no-repeat bg-full" style={{ width: 350, height: 66, left: 23 }}></View>
              ) || (
                <View className={`vertical-center bg-full block`} style={{ width: 165, height: 33 }}></View>
              )
            }
          </NavBar>
          <SearchBar onToSearch={handleToSearch} />
          <CateBar tabs={tabs} fixedbarHeight={fixedHeight} />
        </View>
      </View>
      <View
        className="relative"
        style={{
          paddingTop: `${fixedHeight}rpx`,

        }}>
        <View className="relative">
          <View
            className="absolute l-0 r-0 bg-no-repeat"
            style={{
              backgroundImage: `url(//img13.360buyimg.com/ling/jfs/t1/128047/10/6082/2613/5efc5414E80061862/45519d5f5f08bed3.png)`,
              height: `342rpx`,
              width: `750rpx`,
              top: `-122rpx`,
              backgroundSize: `750rpx 342rpx`
            }}>
          </View>
          <Carousel />
        </View>
        <View className={`${blockName}__floor`} style={{marginTop: `15rpx`, marginBottom: `15rpx` }}>
          <View className={`${blockName}__floor-group`}>
            <Seckill />
          </View>
        </View>
        <Goods list={goodList} />
      </View>
      {/* {商品数据} */}
    </View>
  );
}

export default Mall;
