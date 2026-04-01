
import {View ,Pressable,Text,StyleSheet,Image,ImageBackground } from "react-native"
import { useState,useEffect } from "react"
import { decode as atob } from 'base-64';
import Video from 'react-native-video';
import SpriteIcon from "../../../SpriteIcon";
export default function LastingImpression({apiUrl,
  topIndex = 0,
  bottomIndex = 1,
topitemstyle,
bottomitemstyle}){
        const [images,setImages]=useState([])
        const [isPlaying, setIsPlaying] = useState(false);
        const [isMuted, setIsMuted] = useState(true);

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

    const textData = images.find(item => item.a_media_type === "Text");

const mediaItems = images.filter(item => item.a_media_type !== "Text");
const description = textData?.a_description
  ? atob(textData.a_description) 
  : "";
  const topItem = mediaItems[topIndex];
const bottomItem = mediaItems[bottomIndex];
const isVideo = (url) => url?.endsWith(".mp4");
    if (!images.length) return null;
  
    return(
    <View style={styles.maincon}>
        <View style={styles.top}>
           <Image
  source={{ uri: topItem?.a_image }}
            style={topitemstyle}
            />
            <Text style={styles.para}>
                {description}
            </Text>

        </View>

        <View style={styles.bottom}>
           {isVideo(bottomItem?.a_image) ? (
<View style={{ position: "relative" }}>
  
  <Video
    source={{ uri: bottomItem.a_image }}
    volume={1.0} 
    style={bottomitemstyle}
    resizeMode="cover"
    repeat
    paused={!isPlaying}
    muted={isMuted} 
     audioOutput="speaker"


  />

  <Pressable
    onPress={() => setIsPlaying(prev => !prev)}
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: [{ translateX: -28 }, { translateY: -28 }],
      zIndex: 10,
       elevation: 10
    }}
  >
    <SpriteIcon
      x={isPlaying ? 290 : 255}
      y={59}
      w={45}
      h={48}
      spriteWidth={600}
      spriteHeight={272}
    />
  </Pressable>
{isPlaying && (
  <Pressable
    onPress={() => setIsMuted(prev => !prev)}
    style={{
      position: "absolute",
      top: 10,
      right: 10,
      zIndex: 10,
      elevation: 10
    }}
  >
    <SpriteIcon
      x={isMuted ? 595 : 622}  
      y={125}
      w={25}
      h={25}
      spriteWidth={700}
      spriteHeight={317}
    />
  </Pressable>
)}
</View>

  ) : (
    <Image
      source={{ uri: bottomItem?.a_image }}
      style={bottomitemstyle}
    />
  )}

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