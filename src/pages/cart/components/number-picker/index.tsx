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
    <View className={`${blockName} ${className}`}>
      <View onClick={handleClickMinus} className={`${blockName}__number-minus ${Number(number) <= min*1 ? `${blockName}__disabled` : ''}`}>{` `}</View>
      <Input className={`${blockName}__number-input`} type="number" value={number} onBlur={handleBlur} onFocus={handleFocus} />
      <View onClick={handleClickPlus} className={`${blockName}__number-plus ${Number(number) < max*1 ? `${blockName}__disabled` : ''}`}>{` `}</View>
    </View>
  );
}

export default NumberPicker;
