import React, { Fragment, useState } from 'react';
import { Input, View, Text, ScrollView } from '@tarojs/components';
import './index.scss';

const blockName = `koany-search-filter-panel`;

export interface FilterPanelProps {
  navHeight?: number;
  visible?: boolean;
  onHideMorePanel?: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  navHeight=0,
  visible,
  onHideMorePanel
}) => {

  const [hideDelay, setHideDelay] = useState(!visible);
  const address: any = {};
  const morePanel: any = {};
  const moreHeader: any = {};
  const price: any = {};
  const priceList: any[] = [];
  const orderView: any[] = [];
  const moreList: any[] = [];
  const total = 0;
  const alphabet: any[] = [];

  const handleCancel = () => {
    onHideMorePanel && onHideMorePanel();
  }
  const handlePriceFocus = () => {}
  const handleChangePrice = () => {}
  const handleToggle = () => {}
  const handleBack = () => {}
  const handleSelect = () => {}
  const handleReset = () => {}
  const handleConfirm = () => {}
  const handleMore = () => {}
  const handleMoreScroll = () => {}
  const handleToggleCatidList = () => {}
  const handleChangeBrandTab = () => {}
  const handleJumpToLetter = () => {}
  return (
    <View className={`${blockName} ${visible ? `${blockName}__visible` : ''}`} style={`top:${navHeight}px`}>
      <View className={`${blockName}__bg`} onClick={handleCancel}></View>
      {
        (visible || hideDelay) && (
          <View className={`${blockName}__main`}>
            <View className={`${blockName}__page`}>
              <View className={`${blockName}__section`}>
                <View className={`${blockName}__header arrow`}>
                  <View className={`${blockName}__name`}>配送至</View>
                  <View className={`${blockName}__value red`}>{address.name}</View>
                </View>
              </View>
              <View className={`${blockName}__section`}>
                <View className={`${blockName}__header arrow`}>
                  <View className={`${blockName}__name`}>分类</View>
                  <View className={`${blockName}__value red`}>全部分类</View>
                </View>
              </View>
              <View className={`${blockName}__section`}>
                <View className={`${blockName}__header`}>
                  <View className={`${blockName}__name`}>价格</View>
                </View>
                <View className={`${blockName}__content`}>
                  <View className={`${blockName}__price-inputs`}>
                    <Input className={`${blockName}__input`} type="number" onFocus={handlePriceFocus} onInput={handleChangePrice} placeholder="最低价" value={price.min}/>
                    <View className="hyphen"></View>
                    <Input className={`${blockName}__input`} type="number" onFocus={handlePriceFocus} onInput={handleChangePrice} placeholder="最高价" value={price.max}/>
                  </View>
                  <View className={`${blockName}__price-options`}>
                    {
                      priceList.map(item => (
                        <View onClick={handleToggle} className={`${blockName}__price-option`} key={`filter-panel-price-option-${item.id}`}>
                          <View className="range">{item.name}</View>
                          <View className="rate">{item.percent}%选择</View>
                        </View>
                      ))
                    }
                  </View>
                </View>
              </View>
              {
                orderView.map(item => (
                  <View className={`${blockName}__section`} key={`search-filter-section-${item.title}`}>
                    <View className={`${blockName}__header`}>
                      <View className={`${blockName}__name`}>{item.title}</View>
                      <View className={`${blockName}__value`}>{item.currentStr}</View>
                      {
                        item.currentNum >= 3 && (
                          <View className={`${blockName}__count`}>共{item.currentNum}个</View>
                        )
                      }
                    </View>
                    <View className={`${blockName}__content`}>
                      {
                        item.sList.map(it => (
                          <View onClick={handleToggle} className={`${blockName}__item`} key={`filter-panel-s-list-${it.id}`}>
                            <Text className={`${blockName}__text`}>{it.name}</Text>
                          </View>
                        ))
                      }
                      {
                        item.list.length > 9 && (
                          <View onClick={handleMore} className={`${blockName}__item`}>
                            <Text className={`${blockName}__text`}>查看全部</Text>
                          </View>
                        )
                      }
                    </View>
                  </View>
                ))
              }
            </View>
            {
              morePanel.visible && (
                <View className={`${blockName}__page level2`}>
                  <View className={`${blockName}__header`}>
                    <Text className={`${blockName}__tips`}>已选：</Text>
                    <Text className={`${blockName}__value`}>{moreHeader.title}</Text>
                    { moreHeader.count >= 3 && <Text className={`${blockName}__count`}>共{moreHeader.count}个</Text> }
                  </View>
                  {
                    morePanel.type === 'brand' && (
                      <Fragment>
                        <View className={`${blockName}__tabs`}>
                          <View onClick={handleChangeBrandTab} className={`${blockName}__tab`}>字母排序</View>
                          <View onClick={handleChangeBrandTab} className={`${blockName}__tab`}>推荐排序</View>
                        </View>
                        {
                          morePanel.tab=='abcList' && (
                            <Fragment>
                              <View className={`${blockName}__tips`}>{morePanel.letter}</View>
                              <View className={`${blockName}__alphabet`}>
                                <View className={`${blockName}__list`}>
                                  {
                                    alphabet.map(item => (
                                      <View onClick={handleJumpToLetter} className={`${blockName}__letter`}>
                                        <Text className={`${blockName}__text`}>{item}</Text>
                                      </View>
                                    ))
                                  }
                                </View>
                              </View>
                            </Fragment>
                          )
                        }
                      </Fragment>
                    )
                  }
                  <View className={`${blockName}__content`}>
                    <ScrollView className={`${blockName}__list`} scrollY onScroll={handleMoreScroll} scrollTop={morePanel.scrollTop}>
                      {
                        (morePanel.type === 'category' &&
                          <Fragment>
                            <View onClick={handleToggle} className={`${blockName}__option`}>全部分类</View>
                            {
                              moreList.map(item => (
                                <View className={`${blockName}__sub-list`} key={`filter-more-list-${item.id}`}>
                                  <View onClick={handleToggleCatidList} className={`${blockName}__sub-title`} >{item.name}</View>
                                  {
                                    morePanel.cid2===item.id && (
                                      <View className={`${blockName}__sub-wrap`}>
                                        <View onClick={handleToggle} className={`${blockName}__option`} >全部</View>
                                        {
                                          item.children.map(it => (
                                            <View onClick={handleToggle} className={`${blockName}__option`} key={`filter-more-sub-list-${it.id}`}>{it.name}</View>
                                          ))
                                        }
                                      </View>
                                    )
                                  }
                                </View>
                              ))
                            }
                          </Fragment>
                        ) ||
                        (morePanel.type === 'brand' &&
                          moreList.map(item => (
                            <Fragment key={`filter-more-list-${item.id}`}>
                              <View className={`${blockName}__group-title`}>{item.letter}</View>
                              <View onClick={handleToggle} className={`${blockName}__option`}>{item.name}</View>
                            </Fragment>
                          ))
                        ) ||
                        (
                          moreList.map(item => (
                            <View onClick={handleToggle} className={`${blockName}__option`} key={`filter-more-list-${item.id}`}>{item.name}</View>
                          ))
                        )
                      }
                    </ScrollView>
                  </View>
                </View>
              )
            }
            <View className={`${blockName}__btns`}>
              {
                !morePanel.visible && (
                  <Fragment>
                    <View className={`${blockName}__btn reset`} onClick={handleReset}>重置</View>
                    <View className={`${blockName}__btn confirm`} onClick={handleConfirm}>确认<Text className="small">{total ? `(${total}件商品)` : ''}</Text></View>
                  </Fragment>
                ) || (
                  <Fragment>
                    <View className={`${blockName}__btn back`} onClick={handleBack}>取消</View>
                    <View className={`${blockName}__btn confirm`} onClick={handleSelect}>确认</View>
                  </Fragment>
                )
              }
            </View>
            {
              address.visible && (
                <View className={`${blockName}__address`}>

                </View>
              )
            }
          </View>
        )
      }

    </View>
  );
};

export default FilterPanel;
