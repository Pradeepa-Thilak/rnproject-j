import { View,Text,Image,Pressable } from "react-native";
import Video from "react-native-video";
import { useState ,useEffect} from "react";


export default function Msiteherobanner({details,containerStyle,imagestyle}){
    const media = details?.MediaDetails || [];

  if (!media.length) return null;

  const banner = media[0];
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