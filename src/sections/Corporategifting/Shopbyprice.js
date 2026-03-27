import { View,Image,Text,StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import GridImages from "./Gridimages";

export default function Shopbyprice({apiUrl,containerStyle,imageStyle}){
    const [images,setImages]=useState([])
    useEffect(()=>{
        const fetchdata = async ()=>{
                try{
                    const res=await fetch(apiUrl)
                    const json = await res.json()

            const sections=json?.results?.SectionDetails || []

            const section2=sections.find(sec=> sec.position === 6)

            if (section2?.MediaDetails?.length > 0){
                setImages(section2.MediaDetails)
            }
        }catch(err){
            console.log("api error",err)
        }
    }
    fetchdata()
    },[apiUrl])

     if (!images.length) return null;
     const titles = [
  "Gifts - ₹2000",
  "Gifts - ₹5000",
  "Gifts - ₹10000",
  "Luxe"
];

   const category=images.slice(0,4).map((item,index)=>({
    image:item.a_image,
    title:titles[index]
   }))

    return(
        <View style={styles.container}>
                <View style={styles.top}>
                        <Image
                        source={{uri:"https://imagescdn.jaypore.com/uploads/micrositmedia/production/Component_40_1_4320_1721037594047_3771_1730194380559.png"}}
                       style={{width:"100%",
                        aspectRatio:595/124
                       }}

                        />
                        <View>
                        </View>
                </View>
                <View style={styles.imagecon}>

                            <GridImages
                            data={category}
                            spacing={20}
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