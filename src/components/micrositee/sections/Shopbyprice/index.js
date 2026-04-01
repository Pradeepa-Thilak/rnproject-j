import { View,Image,Text,StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { decode } from "html-entities";

import GridImages from "../Gridimages";

export default function Shopbyprice({apiUrl,containerStyle,imageStyle, pos,
  titleimg,titleimgstyle,
  transformData,}){
    const [images,setImages]=useState([])
    useEffect(()=>{
        const fetchdata = async ()=>{
                try{
                    const res=await fetch(apiUrl)
                    const json = await res.json()

            const sections=json?.results?.SectionDetails || []

            const section2=sections.find(sec=> sec.position === pos)

            if (section2?.MediaDetails?.length > 0){
                setImages(section2.MediaDetails)
            }
        }catch(err){
            console.log("api error",err)
        }
    }
    fetchdata()
    },[apiUrl,pos])

     if (!images.length) return null;

 const category = transformData
  ? transformData(images)
  : images.map(item => ({
      image: item.a_image,
      title: decode(item.a_title)?.toUpperCase()
    }));



    return(
        <View style={styles.container}>
                <View style={styles.top}>
                        <Image
                        source={{uri:titleimg}}
                       style={titleimgstyle}

                        />
                        <View>
                        </View>
                </View>
                <View style={styles.imagecon}>

                            <GridImages
                            data={category}
                            spacing={20}
                            itemWidth="47%"   
                             imageStyle={{
                    width:"100%",
                    aspectRatio:1/1,
                    
                 }}/>
                </View>
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    backgroundColor:"#fef9f1",
    paddingBottom:30
},
top:{
    alignItems:"center",
    justifyContent:"center",
    margin:50
},
imagecon:{
    paddingHorizontal:30
}
})