import React, { useState } from 'react';
import { Input, View } from '@tarojs/components';
import './index.scss';

const blockName = `koany-tag-input`;

export interface TagInputProps {
  isEdit?: boolean;
  focus?: boolean;
  value?: string;
}

const TagInput: React.FC<TagInputProps> = ({
  isEdit=true,
  value,
  focus
}) => {
  const [requireFocus, setRequireFocus] = useState()
  const isValid = false;
  const handleBlur = () => {}
  const handleFocus = () => {}
  const handleInput = () => {}
  const handleClickFocus = () => {}
  return (
    <View className={`${blockName} ${isEdit && `${blockName}--edit`} ${!isEdit&&isValid && `${blockName}--disable`}`}>
      {
        isEdit && (
          <Input className={`${blockName}__input`} focus={requireFocus} onBlur={handleBlur} onFocus={handleFocus} onInput={handleInput} maxlength={8} placeholder="标签最多填写八个字" placeholderClass={`${blockName}__input-placeholder`} type="text" value={value}/>
        ) ||
        (
          <View onClick={handleFocus} className={`${blockName}__input`}>{value}</View>
        )
      }
      <View onClick={handleClickFocus} className={`${blockName}__input-status`}>{isEdit ? '确认' : '编辑'}</View>
    </View>
  );
}

export default TagInput;
