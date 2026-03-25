import React from 'react';
import { View } from 'react-native';
import { StripBannerImg } from '../../lib/ConstData';
import ImageComponents from '../ImageComponent';
const StripBanner = () => {
  return (
    <View>
      <ImageComponents
        uri={StripBannerImg[0].uri}
        height={60}   
      />
    </View>
  );
};
export default StripBanner;