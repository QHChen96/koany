import React from 'react'
import { Button, View, Text } from '@tarojs/components'

export interface ErrRetryProps {
  errMsg?: string;
  onRetry?: () => void;
}

const ErrRetry: React.FC<ErrRetryProps> = ({
  errMsg,
  onRetry
}) => {
  if (!errMsg) {
    return null;
  }
  const handleClick = () => {
    onRetry && onRetry();
  }
  return (
    <View className="text-center" style={{ padding: `10px 0`, fontSize: 13, color: `#999` }} onClick={handleClick}>
      <Text className="inline-block align-middle">{errMsg}</Text>
      <Button className="inline-block align-middle box-border" style={{ color: '#666', fontSize: 'inherit', lineHeight: 'normal', padding: `2px 14px`, border: `1rpx solid #999`, borderRadius: 999 }}>刷新</Button>
    </View>
  )
}

export default ErrRetry