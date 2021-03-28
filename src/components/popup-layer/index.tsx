import { View, Text, ScrollView } from '@tarojs/components';
import React from 'react';
import classnames from 'classnames';
import './index.scss';
import Icon from '../icon';

const blockName = `koany-popup-layer`;

export interface PopupLayerProps {
  show?: boolean;
  showAnim?: boolean;
  renderHeader?: React.ReactNode;
  renderBtn?: React.ReactNode;
  onClose?: () => void;
}

const PopupLayer: React.FC<PopupLayerProps> = ({
  show,
  showAnim,
  renderHeader,
  renderBtn,
  onClose,
  children
}) => {

  const handleClose = () => {
    onClose && onClose();
  }
  return (
    <View className={`${blockName}`} catchMove>
      <View onClick={handleClose} className={classnames(`${blockName}__mask`, show && `${blockName}__mask--show`, showAnim && `${blockName}__mask--anim`)} ></View>
      <View className={classnames(`${blockName}__main`, show && `${blockName}__show`)}>
        <View className={classnames(`${blockName}__header`)}>
          {renderHeader}
          <View onClick={handleClose} className={classnames(`${blockName}__header-close`)}>
            <Icon type="close" />
          </View>
        </View>
        <ScrollView scrollY className={classnames(`${blockName}__body`)}>
          {children}
        </ScrollView>
        <View className={classnames(`${blockName}__btn`)}>
          {renderBtn}
        </View>
      </View>
    </View>
  )
}

export default PopupLayer
