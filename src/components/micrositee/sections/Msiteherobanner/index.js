import { View,Text,Image,Pressable } from "react-native";
import Video from "react-native-video";
import { useState ,useEffect} from "react";


export default function Msiteherobanner({apiUrl,containerStyle,imagestyle,pos}){
    const [banner,setBanner]=useState(null)

  useEffect(() => {

      const fetchData = async ()=>{
        try{
            const res = await fetch(apiUrl)
            const json = await res.json()
            const sections = json?.results?.SectionDetails || []
    
             const heroSection = sections.find(
            (sec) => sec.position === pos
          );
            if (heroSection?.MediaDetails?.length > 0) {
            setBanner(heroSection.MediaDetails[0]);
            console.log(heroSection.MediaDetails[0])
          }
        }
        catch (err) {
          console.log("API error:", err);
        }
      }
    fetchData();
  },[apiUrl,pos]);

   if (!banner) return null;
    const isVideo =
   
    banner?.a_image?.endsWith(".mp4");

     return (
    <View style={containerStyle}>
    <Pressable>
        {isVideo ? (
          <Video
            source={{ uri: banner.a_image }}
            style={imagestyle}
            muted={true}        
            repeat={true}        
            resizeMode="cover"
            paused={false}      
          />
        ) : (
          <Image
            source={{ uri: banner.a_image }}
            style={imagestyle}
          />
        )}
      </Pressable>
    </View>
  );
}