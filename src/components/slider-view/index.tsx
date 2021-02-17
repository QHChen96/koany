import { MovableArea, MovableView, View } from '@tarojs/components';
import { getApp } from '@tarojs/taro';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';

export interface SliderViewProps {
  renderBtn?: ReactNode;
  disabled?: boolean;
  open?: boolean;
  moveMax: number;
  pixels?: 'px' | 'rpx';
  onOpen?: () => void;
}

const SliderView: React.FC<SliderViewProps> = ({
  renderBtn,
  children,
  moveMax,
  pixels='px',
  disabled,
  open: propsOpen,
  onOpen
}) => {
  const [open, setOpen] = useState(propsOpen);
  const [x, setX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [btnWidth, setBtnWidth] = useState(0);
  const [moveInstance, setMoveInstance] = useState(0);
  const [moveThreshold, setMoveThreshold] = useState(0);

  useEffect(() => {
    setX(open ? 0 : btnWidth);
  }, [open, currentX, moveInstance]);

  useEffect(() => {
    const screenWidth = getApp().navInfo.screenWidth;
    const w = "rpx" === pixels ? Math.ceil(moveMax * (0 === screenWidth ? 375 : screenWidth) / 750) : moveMax;
    setX(w);
    setBtnWidth(w);
    setCurrentX(w);
    setMoveThreshold(.4 * w);
  }, [moveMax]);

  const handleTouchEnd = useCallback(() => {
    if (0 === currentX) {
      setOpen(true);
      onOpen && onOpen();
      return;
    }
    if (currentX !== btnWidth) {
      if (open && currentX > 0) {
        setOpen(false);
      } else {
        if (moveInstance < moveThreshold) {
          setOpen(false);
          setX(btnWidth);
        } else {
          setOpen(true);
          onOpen && onOpen();
        }
      }
    } else {
      setOpen(false);
    }
  }, [x, currentX, moveInstance, open, moveThreshold, btnWidth])

  const handleChange = useCallback((e: any) => {
    const mx = e.detail.x;
    setMoveInstance(btnWidth - mx);
    setCurrentX(mx);
  }, [x, currentX, moveInstance, btnWidth, open])

  return (
    <MovableArea className="overflow-hidden h-auto" style={{ width: `calc(${btnWidth}px + 100vw)`, marginLeft: `-${btnWidth}px` }}>
      <MovableView className="flex h-full w-screen bg-inherit relative" onChange={handleChange} damping={100} direction="horizontal" disabled={disabled} x={x} onTouchEnd={handleTouchEnd}>
        {children}
        <View className="btn h-full top-0 absolute overflow-hidden" style={{ width: `${btnWidth}px`, right: `-${btnWidth}px`, left: `100vw` }}>
          {renderBtn}
        </View>
      </MovableView>
    </MovableArea>
  );
};

export default SliderView;