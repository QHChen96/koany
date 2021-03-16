import React, { useState } from "react";
import { View, Text } from '@tarojs/components';
import './index.scss';
import { Icon } from "@/components";

const blockName = `koany-order-detail-top-banner`;

export interface TopBannerProps {
  navHeight?: number;
}

const TopBanner = ({
  navHeight=30
}: TopBannerProps) => {

  const [isPayAlert, setIsPayAlert] = useState(false);

  const stateInfo = {
    stateIcon: '',
    stateName: '待支付',
    stateTips: [
      '取消原因：超时未支付'
    ],
    stateType: 'wait-pay',
    actionName: '去支付'
  }

  const payInfo = {
    payTime: '',
    hour: "04",
    minute: "59",
    second: "59"
  }

  const promptInfo = {
    // content: '请在下单后5小时内完成付款, 超时未付款订单将自动取消。'
    content: ''
  }

  const handleToPay = () => {

  }

  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__state`} style={{ paddingTop: `${navHeight}px`}}>
        <View className={`${blockName}__state-name`}>
          <Icon type={stateInfo.stateIcon} />
          {stateInfo.stateName}
        </View>
        <View className={`${blockName}__state-tips`}>
          {
            stateInfo.stateTips.map(tip => (
              <View className={`${blockName}__state-tips-item`} key={`order-state-tips-${tip}`}>{tip}</View>
            ))
          }
          {
            payInfo.payTime && <View className={`${blockName}__state-tips-item`}>{payInfo.payTime}</View>
          }
        </View>
        { stateInfo.actionName && <View className={`${blockName}__state-btn`} onClick={handleToPay}>{stateInfo.actionName}</View> }
      </View>
      {
        promptInfo.content && (
          <View className={`${blockName}__prompt-bar`}>
            <View className={`${blockName}__prompt-bar-tip`}>{promptInfo.content}</View>
            <Icon className={`${blockName}__prompt-bar-close`} size={14} type="close" />
          </View>
        )
      }
      <View className={`${blockName}__wuliu`}>
        {/* <View className={`${blockName}__wuliu-cont`}>
          <View className={`${blockName}__wuliu-cont-icon`}></View>
          <View className={`${blockName}__wuliu-cont-text`}>
            <View className={`${blockName}__wuliu-text`}>{}</View>
          </View>
        </View> */}
        <View className={`${blockName}__wuliu-cont`}>
          <Icon className={`${blockName}__wuliu-cont-icon`} type="location_fill" size={22} />
          <View className={`${blockName}__wuliu-cont-text`}>
            <View className={`${blockName}__wuliu-text`}>{`陈总 187****8728`}</View>
            <View className={`${blockName}__wuliu-tip`}>{`广东广州市天河区某某街道某某小区`}</View>
          </View>
          <Icon className={`${blockName}__wuliu-action`} type="right" size={16} />
          {/* <View className={`${blockName}__wuliu-edit`}>修改</View> */}
        </View>
      </View>
      {
        isPayAlert && (
          <View className={`${blockName}__pay-alert`}>
            <View className={`${blockName}__pay-alert-close`}>
              <Icon type="close" />
            </View>
            <View className={`${blockName}__pay-alert-title`}>
              确定放弃支付吗?
            </View>
            <View className={`${blockName}__pay-alert-time`}>
              支付剩余
              <Text className={`${blockName}__pay-alert-time-text`}>{payInfo.hour}</Text>
              <Text className={`${blockName}__pay-alert-time-dot`}>:</Text>
              <Text className={`${blockName}__pay-alert-time-text`}>{payInfo.minute}</Text>
              <Text className={`${blockName}__pay-alert-time-dot`}>:</Text>
              <Text className={`${blockName}__pay-alert-time-text`}>{payInfo.second}</Text>
            </View>
            <View className={`${blockName}__pay-alert-btns`}>
              <View className={`${blockName}__pay-alert-btn`}>立即支付</View>
            </View>
          </View>
        )
      }
    </View>
  )
}

export default TopBanner;
