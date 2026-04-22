import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';
import { getDecodeText } from '../../../../utils/DecodeText';

const ComponentWithHeaderAndGrid = ({ details }) => {
  console.log(details);
  const media = details?.MediaDetails || [];

  // const bgData = media.find((item) => item.a_media_type === 'BackgroundImage');
  const textData = media.find((item) => item.a_media_type === 'Text');
  const imgData = media.filter((item) => item.a_media_type === 'Image');

  // console.log("2nd componeney",bgData, imgData, textData);
  return (
    <View style={styles.bestSellerContainer}>
      <Text style={(styles.componentTxt, styles.Text)}>
        {textData?.a_title}
      </Text>
      <Text style={styles.bestSellerTxt}>
        {getDecodeText(textData?.a_description)}
      </Text>
      <View style={styles.bestSellerGridContainer}>
        {imgData.map((item, ind) => (
          <View key={ind} style={styles.ImageData}>
            <Image
              source={{ uri: item?.a_image }}
              style={styles.bestSellerGridImage}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default ComponentWithHeaderAndGrid;
