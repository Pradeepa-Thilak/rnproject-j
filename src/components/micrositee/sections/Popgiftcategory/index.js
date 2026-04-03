import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useState, useEffect } from 'react';
import GridImages from "../Gridimages";
import { decode as atob } from "base-64";

export default function Popgiftcategory({ apiUrl, pos = 3 }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const json = await res.json();

        const sections = json?.results?.SectionDetails || [];
        const section = sections.find(sec => sec.position === pos);

        if (section?.MediaDetails?.length > 0) {
          setData(section.MediaDetails);
        }
      } catch (err) {
        console.log("api error", err);
      }
    };

    fetchData();
  }, [apiUrl, pos]);

  if (!data.length) return null;

 
  const bgImage = data.find(item => item.a_media_type === "BackgroundImage");

  const textItems = data.filter(item => item.a_media_type === "Text");

  const heading = textItems[0]?.a_title;
  const description = textItems[1]?.a_description || textItems[0]?.a_description;

  const images = data
    .filter(item => item.a_media_type === "Image" && item.a_image)
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
    .map(item => item.a_image)


  return (
    <ImageBackground
      source={{ uri: bgImage?.a_image }}
      style={styles.bg}
      resizeMode="contain"
    >
      <View style={styles.categorycon}>

        {heading ? (
          <Text style={styles.heading}>{heading}</Text>
        ) : null}

        {description ? (
          <View style={{ maxWidth: 350 }}>
            <Text style={styles.para}>
              {atob(description)}
            </Text>
          </View>
        ) : null}

        <View style={styles.category}>
          <GridImages
            data={images}
            spacing={20}
            imageStyle={{
              width: "100%",
              aspectRatio: 4 / 5,
            }}
          />
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  categorycon: {
 paddingVertical:70,
 alignItems:"center",
//  backgroundColor:"red"
  },
  heading:{
    color:"#383938",
     fontFamily:"EBGaramond-Regular",
    fontSize:22,
    marginBottom:10
  },
  para:{
     fontFamily:"EBGaramond-Regular",
    fontSize:14,
    marginBottom:40,
    textAlign:"center"
  },
  category:{
    paddingHorizontal:30
  },
 bg: {
  width: '100%',
  aspectRatio: 9 / 26,
  paddingVertical: 20,
}
});
