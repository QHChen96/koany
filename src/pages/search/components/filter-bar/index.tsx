import React, { useState } from 'react';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';

const blockName = `koany-search-filter-bar`;

export interface FilterBarExtraTab {
  text: string;
  type: number;
}
export interface BarFilter {
  logo?: string;
  title?: string;
  name?: string;
}
export interface FilterBarProps {
  extraTabs?: FilterBarExtraTab[];
  onMoreFilter?: () => void;
}
export interface FilterDropdown {
  visible: boolean;
  type: string;
  style?: string;
}
const FilterBar: React.FC<FilterBarProps> = ({
  extraTabs=[],
  children,
  onMoreFilter
}) => {

  const [activeTab, setActiveTab] = useState(false);
  const [activeMoreFilter, setActiveMoreFilter] = useState(false);
  const [selectedSortName, setSelectedSortName] = useState('');

  const [dropdown, setDropdown] = useState<FilterDropdown>({
    visible: false,
    type: 'sort',
    style: ''
  });

  const barFilters: BarFilter[] = [
    {name: '品牌'}, {name: '类别'}
  ]
  const sortList: any[] = [
    {name: '品牌'}, {name: '类别'}
  ];
  const quickList: any[] = [
    {name: '品牌'}, {name: '类别'}
  ];

  const handleCancel = () => {}
  const handleSort = () => {}
  const handleToggle = () => {}
  const handleReset = () => {}
  const handleConfirm = () => {}
  const handleSelectedSort = () => {}
  const handleOutsideSort = () => {}
  const handleMoreFilter = () => {
    onMoreFilter && onMoreFilter();
  }
  const handleToggleFilter = () => {
    if (!dropdown.visible) {
      setDropdown({
        ...dropdown,
        visible: true,
        style: `height: ${667 - 40}px;top:0px;`
      })
    } else {
      setDropdown({
        ...dropdown,
        visible: false,
      })
    }
  }
  return (
    <View style={{ height: `82px` }}>
      <View className={`${blockName}`}>
        <View className={`${blockName}__tabs`}>
          <View className={`${blockName}__item`} onClick={handleSelectedSort}>
            <Text className={`${blockName}__text`}>{selectedSortName || `综合`}</Text>
          </View>
          <View className={`${blockName}__item`} onClick={handleOutsideSort}>
            <Text className={`${blockName}__text`}>销量</Text>
          </View>
          <View className={`${blockName}__item`} onClick={handleOutsideSort}>
            <Text className={`${blockName}__text`}>价格</Text>
          </View>
          {
            extraTabs.map(item => (
              <View className={`${blockName}__item`} key={`search-filter-bar-extra-tab-${item.type}`}>
                <Text>{item.text}</Text>
              </View>
            ))
          }
          {children}
        </View>
        {
          !activeTab && (
            <View className={`${blockName}__filters`}>
              <View className={`${blockName}__filter-wrap`}>
                {
                  barFilters.map(item => (
                    <View className={`${blockName}__item`} onClick={handleToggleFilter}>
                      <View className={`${blockName}__capsule`}>
                        {
                          item.logo && (
                            <View className={`${blockName}__text`}>
                              <Image className={`${blockName}__image`} mode="aspectFit" src={item.logo} />
                            </View>
                          ) || (
                            <View className={`${blockName}__text`}>{item.title || item.name}</View>
                          )
                        }
                      </View>
                    </View>
                  ))
                }
              </View>
              <View className={`${blockName}__more-filter ${activeTab ? 'disable' : ''} ${activeMoreFilter ? 'active' : ''}`} onClick={handleMoreFilter}>
                <Text className={`${blockName}__text`}>筛选</Text>
              </View>
            </View>
          )
        }
      </View>
      {
        dropdown.visible && (
          <View className={`${blockName}__dropdown`} style={dropdown.style} onClick={handleCancel}>
            {
              dropdown.type === 'sort' && (
                <View className={`${blockName}__dropdown-list bottom-radius`}>
                  {
                    sortList.map(item => (
                      <View className={`${blockName}__item ${item.checked ? 'active' : ''}`} onClick={handleSort}>{item.name}</View>
                    ))
                  }
                </View>
              ) || (
                <View className={`${blockName}__dropdown-list`}>
                  {
                    quickList.map(item => (
                      <View className={`${blockName}__item ${item.checked ? 'active' : ''}`} style={{ float: 'left', width: '50%'}} onClick={handleToggle}>{item.name}</View>
                    ))
                  }
                </View>
              )
            }
            {
              dropdown.type !== 'sort' && (
                <View className={`${blockName}__dropdown-btns`}>
                  <View className={`${blockName}__btn ${blockName}__btn-reset`} onClick={handleReset}>重置</View>
                  <View className={`${blockName}__btn ${blockName}__btn-confirm`} onClick={handleConfirm}>确定</View>
                </View>
              )
            }
          </View>
        )
      }

    </View>
  );
}

export default FilterBar;
