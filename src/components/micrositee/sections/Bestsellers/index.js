import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { useState, useEffect } from 'react';
import GridImages from '../Gridimages';
import {decode as atob} from "base-64"

export default function Bestsellers({ details, containerStyle, imageStyle ,imgbgstyle,titleimgstyle,categorytopimgstyle, transformData,categoryconstyle,parastyle}) {
    const media = details?.MediaDetails || [];
  if (!media.length) return null;


 const imageItems = media.filter(
    item => item.a_media_type === "Image"
  );

  const bgImage = media.find(
    item => item.a_media_type === "BackgroundImage"
  );

  const textData = media.find(
    item => item.a_media_type === "Text"
  );

  const titleImage = imageItems.find(
    item => String(item.a_sequence) === "0"
  );
  const topimage = imageItems.find(item => String(item.a_sequence) === "1")
  const categoryImages = imageItems
    .filter(item =>
  !["0", "1"].includes(String(item.a_sequence))
)
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

  const category = categoryImages.map(item => item.a_image);

  return (
    <View style={{ paddingVertical: 50 ,}}>
      <ImageBackground
        source={{
          uri: bgImage.a_image,
        }}
        style={imgbgstyle}
        resizeMode="cover"
      >

      </ImageBackground>
        <View style={categoryconstyle}>
          <Image 
          source={{uri:titleImage.a_image}}
          style={titleimgstyle}/>
<View style={{ maxWidth: 280, alignItems: 'center' }}>

          <Text style={[styles.para,parastyle]}>
               {atob(textData.a_description)}
          </Text>
</View>
        </View>
          <View style={styles.category}>
            <Image
            source={{uri:topimage.a_image}}
            style={categorytopimgstyle}
            />
            <GridImages
            style={{marginTop:20}}
            data={category}
            spacing={20}
            itemWidth="48.5%" 
            imageStyle={{
                width:"100%",
                aspectRatio:80/81,
               
            }}/>

          </View>
    </View>
  );
}

const styles = StyleSheet.create({

  
  para: {
       fontFamily:"EBGaramond-Regular",
    fontSize: 14,
    lineHeight:18,
  maxWidth:300,
    textAlign: 'center',

  },
  category: {
    paddingHorizontal:30
  },
});
