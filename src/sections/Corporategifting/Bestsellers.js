import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { useState, useEffect } from 'react';
import GridImages from './Gridimages';

export default function Bestsellers({ apiUrl, containerStyle, imageStyle }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const json = await res.json();

        const sections = json?.results?.SectionDetails || [];

        const section2 = sections.find(sec => sec.position === 4);

        if (section2?.MediaDetails?.length > 0) {
          setImages(section2.MediaDetails);
        }
      } catch (err) {
        console.log('api error', err);
      }
    };
    fetchData();
  }, [apiUrl]);
  if (!images.length) return null;
  const category = images.slice(2, 6).map(item => item.a_image);
  return (
    <View style={{ paddingVertical: 50 }}>
      <ImageBackground
        source={{
          uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/Component_34_1_19_1720702545060_3771_1730193758835.png',
        }}
        style={{
          width: '100%',
          aspectRatio: 40 / 21,
        }}
        resizeMode="cover"
      >
        <View style={styles.categorycon}>
          <Image 
          source={{uri:"https://imagescdn.jaypore.com/uploads/micrositmedia/production/Our_Bestsellers2x_19_1720702707071_3771_1730195857261.png"}}
          style={styles.imgheading}/>
<View style={{ maxWidth: 280, alignItems: 'center' }}>

          <Text style={styles.para}>
            A curated collection of timeless treasures that have captured hearts far & wide. Elevate your style with our most-loved picks & make every moment extraordinary. Discover Jaypore's top picks & indulge in the art of curated excellence.
          </Text>
</View>
        </View>

      </ImageBackground>
          <View style={styles.category}>
            <Image
            source={{uri:"https://imagescdn.jaypore.com/uploads/micrositmedia/production/13_Top_Banner_19_1720682525223_3771_1729683128121.jpg"}}
            style={{width:"100%",
                aspectRatio:329/331
            }}
            />
            <GridImages
            style={{marginTop:20}}
            data={category}
            spacing={20}
            imageStyle={{
                width:"100%",
                aspectRatio:80/81,
               
            }}/>

          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categorycon: {
    justifyContent:"center",
    alignItems: 'center',
   
  },
  imgheading: {
   aspectRatio:97/30,
   width:"58%"
  },
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
