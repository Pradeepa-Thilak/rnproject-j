import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Pressable, Text, Image, FlatList, StyleSheet } from 'react-native';


const Spotlight = ({details}) => {
  const navigation = useNavigation();
  const media= details?.MediaDetails || []
  media.sort((a,b)=> Number(a.a_sequence) - Number(b.a_sequence))
   
  

  return (
    <View style={styles.con}>
        <Text style={styles.topheadtxt}>
            Brands
        </Text>
        <View style={styles.bothead} >
            <Text style={styles.botheadtxt}>Brand</Text>
            <Image source={{uri:"https://imagescdn.jaypore.com/img/app//brands/jaypore/home/desktop/spotlightPrev.png"}}
            style={styles.botheadimgstyle}/>
           
            <Text style={[styles.botheadtxt,{color:"#bb4225"}]}>Spotlight</Text>
             <Image source={{uri:"https://imagescdn.jaypore.com/img/app//brands/jaypore/home/desktop/spotlightNext.png"}}
            style={styles.botheadimgstyle}/>


        </View>

        {media.map((item, index) => (
             <Pressable
               key={index}
               
             >
               <View style={styles.card}>
                 <Image source={{ uri: item.a_image }} style={styles.img} />
                <View style={styles.cardhead}>

               <Text style={styles.cardheadtext}>{item.a_title}</Text>
              
                </View>
                 <Text style={styles.shop}>shop now</Text>
               
               </View>
     
             </Pressable>
           ))}
    </View>
  );
};

const styles = StyleSheet.create({
  con:{
    justifyContent:"center",
    alignItems:"center",
    padding:10
  },
  topheadtxt:{
    textTransform:"uppercase",
    fontFamily:"EBGaramond-Regular",
    fontSize:12,
    color:"#000",
    fontWeight:500
  },
  bothead:{
   flexDirection:"row",
   gap:5,
   justifyContent:"center",
   alignItems:"center",
   marginBottom:25
  },
  botheadtxt:{
    fontFamily:"EBGaramond-Regular",
    fontSize:30,
    color:"#212121"
  },
  botheadimgstyle:{
    width:30,
    height:30
   
  },
  img:{
    width:"100%",
    aspectRatio:583 / 432,
    marginBottom: 10
  },
  card:{
    marginBottom:20,
    gap:2
  },
  cardhead:{
    padding:2,
    marginBottom:2
  },
  cardheadtext:{
    fontSize:22,
   fontFamily:"EBGaramond-Regular",
    color:"#212121"

  },
   shop: {
    fontSize: 14,
    fontFamily: 'EBGaramond-Regular',
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    color: '#bb4225',
  },
});

export default Spotlight;
