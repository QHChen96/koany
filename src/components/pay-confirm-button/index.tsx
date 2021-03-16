import React from 'react';
import { View } from '@tarojs/components';
import './index.scss';

const blockName = `koany-pay-confirm-button`;

export interface PayConfirmButtonProps {
  className?: string;
  fixed?: boolean;
  type?: 'default' | 'disable';
  onClick?: () => void;
}

const PayConfirmButton: React.FC<PayConfirmButtonProps> = ({
  className,
  fixed,
  type,
  children,
  onClick
}) => {

  const handleClick = () => {
    onClick && onClick();
  }

  return (
    <View className={`${blockName} ${fixed && `${blockName}--fixed`}`}>
      <View className={`${blockName}__content ${type && `${blockName}__content-${type}`} ${className}`} onClick={handleClick}>{children}</View>
    </View>
  );
}

export default PayConfirmButton;
