import React from "react";
import { View } from '@tarojs/components';
import './index.scss';

const blockName = `koany-dialog`;

export interface DialogProps {
  show: boolean;
  title?: string;
  hiddenCloseIcon?: boolean;
  showConfirm?: boolean;
  showCancel?: boolean;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const Dialog:React.FC<DialogProps> = ({
  show=false,
  title='',
  hiddenCloseIcon,
  showConfirm,
  showCancel,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  children
}) => {
  if (!show) {
    return null;
  }

  const handleCancel = () => {
    onCancel && onCancel();
  }
  const handleConfirm = () => {
    onConfirm && onConfirm();
  }

  return (
    <View className={`${blockName}`}>
      <View className={`${blockName}__mask`} catchMove onClick={handleCancel}></View>
      <View className={`${blockName}__content-wrapper ${showConfirm || showCancel ? `${blockName}__has-button` : ''}`}>
        {
          title && (
            <View catchMove className={`${blockName}__title ${!hiddenCloseIcon ? `${blockName}__show-close` : ''}`}>
              {title}
              { !hiddenCloseIcon && (
                  <View className={`${blockName}__title-close`} onClick={handleCancel}></View>
                )
              }
            </View>
          )
        }
        <View className={`${blockName}__content ${!title ? `${blockName}__content--notice` : ''}`}>
          {children}
        </View>
        {
          (showConfirm || showCancel) && (
            <View className={`${blockName}__buttons`}>
              { showCancel && <View onClick={handleCancel} className={`${blockName}__button ${blockName}__button-cancel`}>{cancelText}</View> }
              { showConfirm && <View onClick={handleConfirm} className={`${blockName}__button ${blockName}__button-confirm`}>{confirmText}</View> }
            </View>
          )
        }
      </View>
    </View>
  )
}

export default Dialog;
