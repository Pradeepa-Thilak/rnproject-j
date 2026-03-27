
import {View ,Pressable,Text,StyleSheet,Image,ImageBackground} from "react-native"
import { useState,useEffect } from "react"
export default function LastingImpression({apiUrl}){
        const [images,setImages]=useState([])

        useEffect(()=>{
            const fetchdata= async ()=>{
                try{
                    const res=await fetch(apiUrl)
                    const json=await res.json()

                    const sections=json?.results?.SectionDetails || []
                    const section2=sections.find(sec=>sec.position === 8)
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
    const category =images.filter(item=>item.a_image !== null).map(item=>item.a_image)
    return(
    <View style={styles.maincon}>
        <View style={styles.top}>
            <Image
            source={{uri:category[2]}}
            style={{width:"80%",
                aspectRatio:747/119
            }}
            />
            <Text style={styles.para}>
                Handpicked & exclusively crafted tokens of celebrations, carrying the rich legacy of heritage.
            </Text>

        </View>

        <View style={styles.bottom}>
            <Image
            source={{uri:category[3]}}
            style={{width:"100%",
                aspectRatio:396/235
            }}
            />

        </View>



    </View>
        
    )
}

const styles=StyleSheet.create({
   maincon:{ 
    backgroundColor:"#f9f2df",
    paddingVertical:30
},
top:{
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20
},
para:{
     maxWidth:320,
    lineHeight:18,
 
    fontFamily:"EBGaramond-Regular",
    fontSize:14,
    textAlign:"center"
},
bottom:{
    paddingHorizontal:25
}
})