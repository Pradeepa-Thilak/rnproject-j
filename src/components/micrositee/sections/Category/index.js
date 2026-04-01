import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,

  Image,
 
} from 'react-native';
import { useState, useEffect } from 'react';

export default function Category({ apiUrl, containerStyle, imageStyle }) {
 const [images,setImages]=useState([])

 useEffect(()=>{
    const fetchData= async ()=>{
        try{
            const res= await fetch(apiUrl)
            const json = await res.json()

            const sections=json?.results?.SectionDetails || []

            const section2=sections.find(sec=> sec.position === 2)

            if (section2?.MediaDetails?.length > 0){
                setImages(section2.MediaDetails)
            }
        }catch(err){
            console.log("api error",err)
        }
    }
    fetchData()

 },[apiUrl])
   if (!images.length) return null;
  return (
    <View style={{position:"relative",paddingBottom:40,backgroundColor:"white"}}> 

          <Image
            source={{
              uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/Component_20_1_19_1720682783637_3771_1730193509295.png',
            }}
            style={{
              width: '100%',
             position:"absolute",
              aspectRatio: 1080 / 329,
              paddingVertical: 20,
            
            }}
            resizeMode="contain"
          />
        
   <View style={styles.categorycon} >
        <Text style={styles.heading}>Shop by Ocassion</Text>
        <View style={styles.categories}>
            
 {images.slice(0,4).map((item, index) => (
    <Pressable key={index} style={{ marginBottom: 10 ,backgroundColor:"pink"}}>
    
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
  },
  categories:{
        paddingVertical:30,
        paddingHorizontal:50
  },
  imageStyle:{
    width:100,
    height:100
  }
});
