import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,

  Image,
 
} from 'react-native';
import { useState, useEffect } from 'react';

export default function Category({ apiUrl, containerStyle, imageStyle ,pos}) {
 const [data,setData]=useState([])

 useEffect(()=>{
    const fetchData= async ()=>{
        try{
            const res= await fetch(apiUrl)
            const json = await res.json()

            const sections=json?.results?.SectionDetails || []

            const section2=sections.find(sec=> sec.position === pos)

            if (section2?.MediaDetails?.length > 0){
                setData(section2.MediaDetails)
            }
        }catch(err){
            console.log("api error",err)
        }
    }
    fetchData()

 },[apiUrl,pos])
   if (!data.length) return null;
   const bgImage = data.find(item => item.a_media_type === "BackgroundImage");

const headingText = data.find(item => item.a_media_type === "Text");

const categories = data
  .filter(item => item.a_media_type === "Image")
  .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
  .slice(0, 4);
  return (
  <View style={{ position: "relative", paddingBottom: 40, backgroundColor: "white" }}>

    {/* Background */}
    {bgImage?.a_image ? (
      <Image
        source={{ uri: bgImage.a_image }}
        style={{
          width: '100%',
          aspectRatio: 1080 / 329,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0
        }}
        resizeMode="contain"
      />
    ) : null}

    <View style={styles.categorycon}>

      {headingText?.a_title ? (
        <Text style={styles.heading}>
          {headingText.a_title}
        </Text>
      ) : null}

      <View style={styles.categories}>
        {categories.map((item, index) => (
          <Pressable key={index} 
           style={[
      styles.item,
      index === categories.length - 1 && { marginBottom: 0 }
    ]}>
            <Image
              source={{ uri: item.a_image }}
              style={imageStyle}
            />
          
          </Pressable>
        ))}
      </View>

    </View>
  </View>
);
}

const styles = StyleSheet.create({
  categorycon: {
 paddingTop:30,
 alignItems:"center",



  },
  heading:{
    color:"#383938",
       fontFamily:"EBGaramond-Regular",
    fontSize:26,
    textAlign:"center"
  },
  categories:{
        paddingVertical:30,
        paddingHorizontal:50,
        
  },
  item:{
    marginBottom:20
  },
 
});
