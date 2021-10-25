import { useSystemInfo } from '@/hooks';
import { isPlainObject } from 'lodash';


export const formatMoney = (moneyUnFormat: string | number) => {
  const numMoney = +moneyUnFormat / 100;
  if (numMoney % 1 === 0) {
    return numMoney;
  }
  return Number(numMoney.toFixed(2));
};

export const slicePrice = (price: string) => {
  if (price) {
    let prefix = price[0];
    let nums = price.slice(1).split('.');
    var intPart = nums[0];
    let floatPart = nums[1] ? '.' + nums[1] : '';
    return {
      prefix,
      intPart,
      floatPart
    };
  }
  return {
    prefix: '',
    intPart: '',
    floatPart: ''
  };
};

export const objClone = (obj: any | any[]) => {
  let result;
  if (Array.isArray(obj)) {
    result = [];
    for (let i = obj.length; i >= 0; i--) {
      result[i] = objClone(obj[i]);
    }
    return result;
  }
  if (isPlainObject(obj)) {
    for (let i in ((result = {}), obj)) {
      result[i] = objClone(obj[i]);
    }
    return result;
  }
  return obj;
};

export const isEmptyObject = (obj: any) => {
  if (!obj || !isPlainObject(obj)) {
    return false;
  }
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
};

export const noop = () => {};
export const isFunction = fn => 'function' === typeof fn;
export const hasWindow = typeof window !== 'undefined';
export const isArray = arr => Array.isArray(arr);
export const pxCheck = (value: string | number): string => {
  return isNaN(Number(value)) ? String(value) : `${value}px`;
};


let globalSeq = 0;
export const getUniqueKey = () => new Date().getTime().toString() + globalSeq++;

export const px2rpx = (px: number): number => {
  const [ systemInfo ] = useSystemInfo();
  const windowWidth = systemInfo.windowWidth || 375;
  return px * (750 / windowWidth);
};

export const rpx2px = (rpx: number): number => {
  const [ systemInfo ] = useSystemInfo();
  const windowWidth = systemInfo.windowWidth || 375;
  return rpx / (750 / windowWidth);
};

export const formatNum = (num: number | string, len: number): string => {
  return (num + '').length >= len ? '' + num : formatNum('0' + num, len);
};

export const getTimestamp = (time?: string | number) => {
  if (!time) return Date.now();
  let t = time;
  t = t > 0 ? +t : t.toString().replace(/\-/g, '/');
  return new Date(t).getTime();
};