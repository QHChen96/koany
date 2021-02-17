import React, { useState } from 'react';
import { Input, View } from '@tarojs/components';
import { Icon } from '@/components';
import './index.scss';

const blockName = `koany-number-picker`;

export interface NumberPickerProps {
  className?: string;
  num: number;
  max: number;
  min: number;
  onChange?: (num: number) => void;
}

const NumberPicker: React.FC<NumberPickerProps> = ({
  num,
  max,
  min,
  className='',
  onChange
}) => {
  const [number, setNumber] = useState<string>(num+"");
  const handleClickMinus = () => {
    let newNumber = Number(number) - 1;
    if (newNumber < min) {
      newNumber = min;
    }
    setNumber(newNumber + "");
    onChange && onChange(newNumber)
  }
  const handleClickPlus = () => {
    let newNumber = Number(number) + 1;
    if (newNumber > max) {
      newNumber = max;
    }
    setNumber(newNumber + "");
    onChange && onChange(newNumber)
  }
  const handleBlur = () => {}
  const handleFocus = () => {}

  return (
    <View className={`${blockName} relative flex ${className}`}>
      <View onClick={handleClickMinus} className={`number-minus ${Number(number) <= min*1 ? 'disabled' : ''} inline-flex items-center`} style={{ width: `40rpx`, height: `54rpx` }}>
        <Icon type="move" />
      </View>
      <Input className={`${blockName}__number-input`} type="number" value={number} onBlur={handleBlur} onFocus={handleFocus} />
      <View onClick={handleClickPlus} className={`number-plus ${Number(number) < max*1 ? 'disabled' : ''} inline-flex items-center`} style={{ width: `40rpx`, height: `54rpx` }}>
        <Icon type="add" />
      </View>
    </View>
  );
}

export default NumberPicker;