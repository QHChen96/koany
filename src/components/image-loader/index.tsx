import { Image } from '@tarojs/components';
import React from 'react';

export interface ImageLoaderProps {
  images?: string[]
}
const ImageLoader = ({
  images=[]
}) => {
  return (
    images.map(image => (
      <Image className="w-0 h-0 opacity-0" src={image} key={`image-loader-${image}`}/>
    ))
  );
}

export default ImageLoader;
