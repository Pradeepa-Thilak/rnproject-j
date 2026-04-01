import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
    FlatList,
  Image,
 
} from 'react-native';
import { useState, useEffect } from 'react';
import GridImages from "../Gridimages";
export default function Popgiftcategory({ apiUrl, containerStyle, imageStyle }) {
 const [images,setImages]=useState([])

 useEffect(()=>{
    const fetchData= async ()=>{
        try{
            const res= await fetch(apiUrl)
            const json = await res.json()

            const sections=json?.results?.SectionDetails || []

            const section2=sections.find(sec=> sec.position === 3)

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
   const category=images.slice(0,8).map(item => item.a_image)
  return (
    

          <ImageBackground
            source={{
              uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/Component_45_1_19_1720702352438_3771_1730193588284.jpg',
            }}
            style={{
              width: '100%',
            
              aspectRatio: 9 / 26,
              paddingVertical: 20,
            
            }}
            resizeMode="contain"
          >
        
   <View style={styles.categorycon} >
        <Text style={styles.heading}>Popular gifting categories</Text>
        <View style={{maxWidth:350}}  >

        <Text style={styles.para}>A thoughtful gift is timeless. At Jaypore, we curate the finest crafts from India so your gift becomes a prized possession. Explore our most popular categories to get started.</Text>
        </View>

        <View style={styles.category}>
                <GridImages
                 data={category}  
                 spacing={20}
                 imageStyle={{
                    width:"100%",
                    aspectRatio:4/5,
                    
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
 
});
