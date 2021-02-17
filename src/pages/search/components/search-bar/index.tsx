import { Icon } from '@/components';
import { Input, ScrollView, View } from '@tarojs/components';
import React, { useState, useRef } from 'react';
import SmartBox from '../smart-box';

import './index.scss';

const blockName = `koany-search-search-bar`;
export interface SearchBarProps {
  navHeight?: number;
  renderAct?: React.ReactNode;
  renderExtra?: React.ReactNode;
  keyword?: string;
  isActive?: boolean;
  onActive?: (isActive: boolean) => void;
  onChange?: () => void;
  onSearch?: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  navHeight=0,
  keyword='',
  renderExtra,
  isActive,
  onActive,
  onSearch
}) => {
  const [placeholder, setPlaceHolder] = useState('');
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const category:any = {} || {
    id: 1,
    name: '衣服呀'
  };
  const hotWords = [{
    text: '跑步鞋',
  }, {
    text: '高仿鞋'
  }, {
    text: '吸尘器'
  }, {
    text: '跑步机'
  }, {
    text: '大礼包'
  }];
  const historyWords = [{
    text: '跑步鞋',
  }, {
    text: '高仿鞋'
  }, {
    text: '吸尘器'
  }, {
    text: '跑步机'
  }, {
    text: '大礼包'
  }];
  const extraKeys: any[] = [];
  const handleActive = () => {
    onActive && onActive(true);
  }
  const handleDelete = () => {}
  const handleSearch = (keyword: string) => {
    onSearch && onSearch(keyword);
  }
  const handleBlur = () => {}
  const handleConfirm = () => {}
  const handleFocus = () => {}
  const handleInput = () => {}
  const handleClear = () => {
    onSearch && onSearch('');
  }
  return (
    <View className={`${blockName}`} style={`${navHeight > 0 ? 'height: 100%' : ''}`}>
      <View className={`search-bar bg-white flex nav-height items-center relative z-1 text-left`}>
        <View className="search-bar-extra">
          {renderExtra}
        </View>
        <View
          className="search-bar-box flex-1 relative overflow-hidden"
          style={{ backgroundColor: `#f2f2f2`, height: `64rpx`, margin: `0 10px`, padding: `0 30px`, borderRadius: `32rpx` }}>
          <View className="absolute" style={{ top: `12rpx`, left: `18rpx`}}>
            <Icon size={16} type="search" />
          </View>
          {
            isActive && (
              <View className="input-area h-full">
                <Input
                  ref={inputRef}
                  confirmType="search"
                  className="box-border block h-full w-full m-0 p-0 border-0 bg-transparent" value={keyword} placeholder={placeholder} placeholderClass="grey-1" style={{ fontSize: `28rpx` }}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  onConfirm={handleConfirm}
                  onInput={handleInput}
                  />
              </View>
            )
          }
          {
            (isActive && keyword) && (
              <View className="absolute" style={{ top: `14rpx`, right: `18rpx` }} onClick={handleClear}>
                <Icon type="close" />
              </View>
            )
          }
          {
            !isActive && (
              <ScrollView className={`${blockName}-tags`} scrollX scrollLeft={scrollLeft} onClick={handleActive}>
                {
                  category.id && <View className={`${blockName}-category`}>{category.name}</View>
                }
                {
                  !category.id && keyword && (
                    <View className={`${blockName}-tag`}>
                      {keyword}
                      <View className={`${blockName}-tag-clear`} onClick={handleDelete}>
                        <Icon type="close" color={"#fff"} size={12} />
                      </View>
                    </View>
                  )
                }
                {
                  extraKeys.map(item => (
                    <View className={`${blockName}-tag`} key={`search-tag-${item.name}`}>
                      {item.tagname}
                      <View className={`${blockName}-tag-clear`} onClick={handleDelete}>
                        <Icon type="close" color={"#fff"} size={12} />
                      </View>
                    </View>
                  ))
                }
              </ScrollView>
            )
          }
        </View>
        <View className={`${blockName}-act`}>
          {
            renderExtra
          }
        </View>
      </View>
      <SmartBox
        historyWords={historyWords}
        hotWords={hotWords}
        isActive={isActive}
        keyword={keyword}
        navHeight={navHeight}
        onSearch={handleSearch}
        ></SmartBox>
    </View>
  );
};

export default SearchBar;
