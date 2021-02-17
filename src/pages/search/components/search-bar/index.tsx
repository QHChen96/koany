import { Icon } from '@/components';
import { Input, ScrollView, View } from '@tarojs/components';
import React, { useState } from 'react';

export interface SearchBarProps {
  navHeight?: number;
  renderAct?: React.ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({
  navHeight=0
}) => {
  const [isActive, setIsActive] = useState(false);
  const category:any = {};
  let keyword: string = '';
  const extraKeys: any[] = [];

  return (
    <View style={`${navHeight > 0 ? 'height: 100%' : ''}`}>
      <View className={`search-bar`}>
        <View className="search-bar-extra"></View>
        <View className="search-bar-box">
          <View>
            <Icon type="search" />
          </View>
          <View className="input-area">
            <Input />
          </View>
          <View>
            <Icon type="close" />
          </View>
          <ScrollView scrollX>
            { 
              category.id && <View className="category">{category.name}</View>
            } 
            {
              !category.id && keyword && (
                <View className="tag">
                  {keyword}
                  <View className="tag-clear"></View>
                </View>
              )
            }
            {
              extraKeys.map(item => (
                <View className="tag">
                  {item.tagname}
                  <View className="tag-clear"></View>
                </View>
              ))
            }
          </ScrollView>
        </View>
        <View className="search-bar-act">
          <View>
            <View className="btn-search">搜索</View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;