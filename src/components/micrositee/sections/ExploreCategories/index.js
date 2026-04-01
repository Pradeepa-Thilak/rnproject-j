import { View ,Text,ImageBackground } from "react-native";
import { StyleSheet } from "react-native";



export default function ExploreCategories(){
    return(
        <ImageBackground
         source={{
          uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/Component-7_1_19_1720702949298_3771_1730194056280.jpg',
        }}
        style={{
          width: '100%',
          aspectRatio: 375 / 574,
        }}
        resizeMode="contain"
      >
            <View style={styles.innerbox}>
                <View style={styles.heading}>
                        <Text style={styles.headingtext}>Explore our Catelogues</Text>
                        <View style={styles.para}>
                            <Text style={styles.paratext}>We offer a distinctive gifting experience for anyone looking to create personalized gifts with artisanal & crafted finds from India. Our bulk gifting options provide unique & meaningful finds that are crafted to delight.</Text>
                        </View>
                        <View style={styles.downloadpart}>
                            <Text style={styles.downloadparttxt}> download the catalogues</Text>
                        </View>
                </View>
            </View>

        </ImageBackground>
    )
} 

const styles=StyleSheet.create({
  innerbox:{
  
    marginTop:"45%",
    justifyContent:"center",
    alignItems:"center"
  },
  heading:{
    marginTop:60,
    alignItems:"center"
  },
  headingtext:{
     fontFamily:"EBGaramond-Regular",
    fontSize:26,
    color:"white",
    textTransform:"capitalize"
  },
  para:{
    maxWidth:220,
    marginTop:20,
    paddingBottom:20,
   alignSelf:"center"
  },
  paratext:{
    fontFamily:"EBGaramond-Regular",
    fontSize:14,
    color:"#fff",
    textAlign:"center"
  },
  downloadpart:{
    paddingVertical:14,
    paddingHorizontal:40,
  },
  downloadparttxt:{
     fontFamily:"EBGaramond-Regular",
     fontSize:14,
     color:"#fff",
     textDecorationLine:"underline",
     textTransform:"uppercase",
     textAlign:"center"
  }
})