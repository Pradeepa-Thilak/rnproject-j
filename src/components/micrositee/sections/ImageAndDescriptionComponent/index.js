import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { styles } from '../../coastal';
import { getDecodeText } from '../../../../utils/DecodeText';

const ImageAndDescriptionComponent = ({ details }) => {
    
    console.log("imf",details);

  const media = details?.MediaDetails || [];
  
    const textData = media.find(item => item.a_media_type === 'Text');
    const bgdata = media.find(item => item.a_media_type === 'BackgroundImage');
  console.log("bg",textData);
  
  return (  
      <View style={{aspectRatio: 320/489}}>
      <ImageBackground
        source={{ uri: bgdata?.a_image }}
        style={[styles.componentBackground]}
      >
        <View style={ {alignItems: 'center', justifyContent: 'center', marginHorizontal: '25%'}}>
          <Text style={[styles.componentTxt,{marginTop:10, marginHorizontal: 10}]}>{textData?.a_title}</Text>
            <Text style={[styles.componentTxt,{fontSize: 12,marginTop: 10}]}>{getDecodeText(textData?.a_description) }</Text>
              <Pressable style={[styles.componentButton, {marginTop: 10}]}>
                <Text style={styles.componentButtonTxt}>Shop Now</Text>
              </Pressable>
        </View>
      </ImageBackground>
      </View>
  )
}

export default ImageAndDescriptionComponent