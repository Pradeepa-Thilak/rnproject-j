import React from 'react';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import { styles } from '../styles';
import { getDecodeText } from '../../../../utils/DecodeText';
const ImageHeaderAndGrid = ({ details }) => {
  const media = details?.MediaDetails || [];
  // console.log('detaols',details);
  const textData = media.find((item) => item.a_media_type === 'Text');
  const imgData = media
    .filter((item) => item.a_media_type === 'Image')
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));
  const bgData = media.find((item) => item.a_media_type === 'BackgroundImage');
  const imgGrid = imgData.slice(1);
  return (
    <View>
      <View style={[styles.componentContainer, { aspectRatio: 32 / 49 }]}>
        <ImageBackground
          source={{ uri: bgData?.a_image }}
          style={styles.componentBackground}
        >
          <Text style={styles.componentTxt}>{textData?.a_title}</Text>
          <Image
            source={{ uri: imgData[0]?.a_image }}
            style={styles.ImageHeaderAndGridImage}
          />
          <Text style={[styles.componentTxt, styles.ImageHeaderAndGridText]}>
            {getDecodeText(textData?.a_description)}
          </Text>
          <Pressable style={styles.componentButton}>
            <Text style={styles.componentButtonTxt}>Shop Now</Text>
          </Pressable>
        </ImageBackground>
      </View>
      <View style={styles.ImageHeaderAndGridContainer}>
        <View style={styles.bestSellerGridContainer}>
          {imgGrid.map((item, ind) => (
            <View key={ind} style={styles.ImageHeaderAndGridImgGrid}>
              <Image
                source={{ uri: item?.a_image }}
                style={[styles.bestSellerGridImage, { aspectRatio: 69 / 70 }]}
              />
            </View>
          ))}
          <Text
            style={[
              styles.bestSellerTxt,
              styles.ImageHeaderAndGridBestsellerText,
            ]}
          >
            {getDecodeText(textData?.a_shortdescription)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ImageHeaderAndGrid;
