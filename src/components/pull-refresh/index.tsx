import { View, Text } from '@tarojs/components';
import { usePageScroll } from '@tarojs/taro';
import { min } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';

const STOP = 0, START = 1, READY = 2, LOADING = 3;

export interface PullRefreshProps {
  height: number;
  marginTop: number;
  enable: boolean;
  onLoading: () => void;
  onClose: () => void;
  onOpen: () => void;
  onTouchMove: (e: any) => void;
  onTouchStart: (e: any) => void;
  onTouchEnd: (e: any) => void;
  onScroll: (e: any) => void;
}

const assign = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e];
    for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
  }
  return t;
}
const getDateSet = (args: any) => {
  return assign({}, args.currentTarget && args.currentTarget.dataset, args.target && args.target.dataset, args.detail, args);
}

const PullRefresh: React.FC<PullRefreshProps> = ({
  height,
  marginTop,
  enable
}) => {
  const [curStatus, setCurStatus] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [startY, setStartY] = useState(0);
  const [newY, setNewY] = useState(0);
  const [minY, setMinY] = useState(0);
  const loadingStartTime = useRef(new Date().getTime());
  if (!curStatus) {
    return null;
  }
  useEffect(() => {
    let t = Taro.getSystemInfoSync() || {};
    setMinY(.25 * (t.windowHeight || 619));
    reset();
  }, []);

  const getNextStatus = (e: any) => {
    let pageY = (e.touches[0] || e.changedTouches[0]).pageY;
    let n = pageY - startY;
    let s = pageY - newY;

    if (Math.abs(s) < 5) {
      return curStatus;
    }
    if (scrollIndex > 20 || s < 0) {
      return STOP;
    } else {
      if (n > minY) {
        return READY;
      } else if (n >= .4 * minY){
        return START;
      } else {
        setNewY(startY);
        return STOP;
      }
    }
  }
  const updateStatus = (arg: number) => {
    if (arg !== curStatus) {
      setCurStatus(arg);

    }
  }
  const reset = () => {}
  const handlePageScroll = (e: any) => {
    setScrollIndex((getDateSet(e) || {}).scrollTop);
  }
  const handlePageTouchStart = (e: any) => {
    if (enable) {
      let y = (e.touches[0] || e.changedTouches[0]).pageY;
      if (!startY && scrollIndex < 10) {
        setStartY(y);
        setNewY(y);
      }
    }
  }
  const handlePageTouchMove = (e: any) => {
    if (enable) {
      if (startY && curStatus !== LOADING) {
        updateStatus(getNextStatus(e));
      }
    }
  }
  const handlePageTouchEnd = (e: any) => {
    if (enable) {
      if (startY && curStatus !== LOADING && (getNextStatus(e) === READY)) {
        loadingStartTime.current = new Date().getTime();
        updateStatus(LOADING);
        reset();
      }
    }
  }

  usePageScroll((res) => {
    handlePageScroll(res);
  });

  return (
    <View
      className="fixed flex t-0 l-0 z-9999 w-full h-0 justify-center items-center  bg-white pointer-events-none" 
      style={{ height: `${height}px`, marginTop: `${marginTop}px`, color: `#999`, fontSize: `28rpx` }}>
      { curStatus === LOADING && <Text></Text> }
      <Text style={{ margin: `0 8rpx` }}>{curStatus === START ? '下拉刷新' : curStatus === READY ? '松开刷新' : curStatus === LOADING ? '刷新中' : '' }</Text>
    </View>
  );
}

export default PullRefresh;