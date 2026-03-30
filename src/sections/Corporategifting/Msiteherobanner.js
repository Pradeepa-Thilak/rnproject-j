import { View,Text,Image,Linking,Pressable} from "react-native";

import { useState ,useEffect} from "react";


export default function Msiteherobanner({apiUrl,containerStyle,imagestyle}){
    const [banner,setBanner]=useState(null)

  useEffect(() => {

      const fetchData = async ()=>{
        try{
            const res = await fetch(apiUrl)
            const json = await res.json()
            const sections = json?.results?.SectionDetails || []
    
             const heroSection = sections.find(
            (sec) => sec.position === 1
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
  },[apiUrl]);

   if (!banner) return null;

     return (
    <View style={containerStyle}>
      <Pressable
        onPress={() => {
          if (banner?.a_link) {
            Linking.openURL(banner.a_link);
          }
        }}
      >
        <Image
          source={{ uri: banner.a_image }}
          style={imagestyle}
        />
      </Pressable>
    </View>
  );
}