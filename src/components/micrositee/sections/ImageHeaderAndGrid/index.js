import React from 'react'
import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import { styles } from '../../coastal';
import { getDecodeText } from '../../../../utils/DecodeText';

const ImageHeaderAndGrid = ({ details }) => {
    
    const media = details?.MediaDetails || [];
    // console.log('detaols',details);
    const textData = media.find(item => item.a_media_type === 'Text');
    const imgData = media.filter(item => item.a_media_type === 'Image').sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));
    const bgData = media.find(item => item.a_media_type === 'BackgroundImage')
    const imgGrid = imgData.slice(1);
  return (
      <View>
          <View style={[styles.componentContainer, {aspectRatio: 32/49}]}>
                <ImageBackground
                  source={{ uri: bgData?.a_image}}
                  style={styles.componentBackground}
                >
                  <Text style={styles.componentTxt}>{textData?.a_title}</Text>
                    <Image
                      source={{ uri: imgData[0]?.a_image }}
                      style={{ width: '75%', aspectRatio: 120/151 }}
                    />
                  <Text style={[styles.componentTxt,{marginHorizontal: 48, fontSize: 13, letterSpacing: 0.2}]}>{getDecodeText(textData?.a_description) }</Text>
                  <Pressable style={styles.componentButton}>
                    <Text style={styles.componentButtonTxt}>Shop Now</Text>
                  </Pressable>
                </ImageBackground>
              </View>
          <View style={{marginTop: 20}}>
            <View style={styles.bestSellerGridContainer}>
                {imgGrid.map((item, ind) => (
                    <View key={ind} style={{width: '47%', marginBottom:20}}>
                        <Image
                        source={{ uri: item?.a_image }}
                        style={[styles.bestSellerGridImage,{aspectRatio: 69/70}]}
                        />
                    </View>
                ))}
                  <Text style={[styles.bestSellerTxt, {fontFamily:'EBGaramond-Italic',marginHorizontal: 24, letterSpacing: 0}]}>{getDecodeText(textData?.a_shortdescription)}</Text>
            </View>
                
          </View>
      </View>
  )
}

export default ImageHeaderAndGrid