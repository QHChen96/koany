import { View } from '@tarojs/components';
import React, { Fragment } from 'react';
import './index.scss';

const blockName = `koany-cart-top-bar`;

export interface TopBarProps {
  navHeight: number;
  hidden?: boolean;
  editable?: boolean;
  addrFixed?: boolean;
  disable?: boolean;
  className?: string;
  onEdit?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  hidden,
  navHeight,
  editable,
  addrFixed,
  children,
  disable,
  className='',
  onEdit
}) => {
  if (hidden) {
    return null;
  }
  const handleEdit = () => {
    onEdit && onEdit();
  }
  return (
    <Fragment>
      <View className={`${blockName} relative flex bg-white ${(editable || addrFixed) ? `fixed` : ''} ${className}`} style={{ top: `${(editable || addrFixed) ? navHeight : 0}px`, height: `88rpx`, lineHeight: `88rpx`, padding: `0 36rpx`, fontSize: `26rpx`, color: `#262626`, borderRadius: `0 0 20rpx 20rpx` }}>
        <View className={`content relative overflow-hidden overflow-ellipsis whitespace-nowrap flex-auto flex-shrink-0 ${disable ? `invisible pointer-events-none` : ''} `} style={{ color: `#262526`, width: `40%` }}>{children}</View>
        <View className="btns flex flex-1 flex-row-reverse">
          <View onClick={handleEdit} className="btn relative flex-initial flex-shrink-0">{ editable ? '完成' : '编辑' }</View>
        </View>
      </View>
      { (editable || addrFixed) && <View className="placeholder" style={{ height: `88rpx` }}></View> }
    </Fragment>
  )
}

export default TopBar;