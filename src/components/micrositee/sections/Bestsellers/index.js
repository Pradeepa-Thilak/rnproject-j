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

export default function Bestsellers({ apiUrl, containerStyle, imageStyle , imgbguri ,imgbgstyle,titleimg,titleimgstyle,para,categorytopimg,categorytopimgstyle,pos, transformData,categoryconstyle,}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const json = await res.json();

        const sections = json?.results?.SectionDetails || [];

        const section2 = sections.find(sec => sec.position === pos);

        if (section2?.MediaDetails?.length > 0) {
          setImages(section2.MediaDetails);
        }
      } catch (err) {
        console.log('api error', err);
      }
    };
    fetchData();
  }, [apiUrl,pos]);
  
  if (!images.length) return null;
const category = transformData
  ? transformData(images)
  : images.map(item => item.a_image); 
  return (
    <View style={{ paddingVertical: 50 ,}}>
      <ImageBackground
        source={{
          uri: imgbguri,
        }}
        style={imgbgstyle}
        resizeMode="cover"
      >

      </ImageBackground>
        <View style={categoryconstyle}>
          <Image 
          source={{uri:titleimg}}
          style={titleimgstyle}/>
<View style={{ maxWidth: 280, alignItems: 'center' }}>

          <Text style={styles.para}>
            {para}
          </Text>
</View>
        </View>
          <View style={styles.category}>
            <Image
            source={{uri:categorytopimg}}
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
    marginBottom: 40,
    textAlign: 'center',
  },
  category: {
    paddingHorizontal:30
  },
});
