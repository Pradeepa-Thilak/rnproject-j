import { View,Text,Image ,Pressable,StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Footer from "../../components/Footer"
import SpriteIcon from "../../components/SpriteIcon"
import ModalCom from "../../components/PLP/ModalCom"
import { useState } from "react"

export default function Savedcards(){
    const [openModal,setOpenModal]=useState(false)
    return(
        <View>
<ScrollView>
    <View style={{margin:10}}>

    <View style={styles.headercon}>
        <Text style={styles.headercontxt}>Your Saved Cards</Text>
        <Pressable onPress={()=>setOpenModal(true)}>
            <SpriteIcon
            x={405}
            y={28}
            w={40}
            h={40}
            spriteWidth={2000}
            spriteHeight={905}
            />
        </Pressable>

    </View>
        <View style={styles.maincon}>
            <Text style={styles.maincontxt}>No Saved Cards</Text>
        </View>
    </View>

        <Footer/>
</ScrollView>
<ModalCom
  open={openModal}
  close={() => setOpenModal(false)}
  bgcolor="transparent"
  containerStyle={{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0, 
  }}
>
  <View style={{ width: '100%'}}>
    
    
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 4,
        margin:32,
        maxWidth: 444,
        alignSelf: 'center', 

      }}
    >

      <Pressable
        onPress={() => setOpenModal(false)}
        style={styles.modalhead}
      >
        <SpriteIcon
                x={252}
                y={52}
                w={25}
                h={25}
                spriteWidth={1150}
                spriteHeight={520}
              />
      </Pressable>

      {/* Content */}
      <View style={styles.modalmaincon}>

      <View style={styles.modaltitle}>

      <Text style={styles.modaltitletxt}>
        We save your card as per latest RBI guidelines*
      </Text>
      </View>
      {/* image */}
      <View style={{justifyContent:"center",
        alignItems:"center"
      }}>
        <Image
        source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAtCAYAAAD/aHgLAAAABHNCSVQICAgIfAhkiAAAAgBJREFUaEPtWoFNwzAQJBuUCYAJygaUCWAD2ACYAJiAMgFlAmCDMgGM0A0KE8BdFaMEJc59ZByn2NJLrfKu7/6//x/bxY4+DqF6DTnVpwyq+Y7V7yELoihEKCT5JuqmpnYFQHOVKK1yBnmEXEI+UmPTgIc47yAryIFKdAnlI8gxhJ/HMr5KoEUm+stl2aOJx3AO3TYHbU3osk5eQPZbmPL5BMIinEJpYcm4LUuH799TC92xNgM0OMsdjd82akSfoXUCYTOwSDy5OHhsBoj5BeJrSWtE3ZfdRMJSsXU1Cn29QCNRtXlQgMTQ+ SGhhq4yIQZw6xoK7uxRq1WH1O/t0dmQqHusvSznmJNRj7WSmGIm+poEbB0E3485zERzedGNHFWzdzL6Nx7NWTdqQNoXMyejnHXtRo4yIyejiplzUx8l5gItkkPXGro8PeOWhTp4RMe9nFgjmEf5GuQaZwV8akS5afYE+YRMWGwVyyhEY+s43F3rcv/3ZpuJ0pNzkqQlfETp+mmDubj/u+oyY4Tnpkj0EW0LjU0oRCDStUQwovRoU9blzr7vGKALYKjnwYiGAvRXv5OJNll2rFmXR5jrkpC0M0IlZtA9yJhunJwD7wOE79Az5b9BosygvBHG88YUkoyC25HbXJZSJji3U5kn3mMapjJXjW/GvaWJH9Io5isG3yr6ky7KqEUlAAAAAElFTkSuQmCC"}}
        style={{width:58,height:45}}/>
      </View>
      {/* para */}
      <View style=
      {styles.modalpara}>
        <Text style={styles.modalparatxt}>
This is a process of converting your card details into a unique token that is specific to your card and only to one merchant at a time. This code masks the true details of your card, without which no one can misuse your card.
        </Text>
      </View>
      {/* lastline */}
        <View style={{marginTop:20}}>
<Text style={styles.lastline}>
    *Please read RBI guidelines for more details on tokenisation of Cards
</Text>
        </View>

      </View>

    </View>
  </View>
</ModalCom>
        </View>
    )
}

const styles=StyleSheet.create({
    headercon:{
        margin:20,
        flexDirection:"row",
        paddingVertical:10,
        alignItems:"center",
        gap:10
    },
    headercontxt:{
        fontFamily:"Lato-Bold",
        fontSize:20,
        color:"#000",

    },
    maincon:{
        justifyContent:"center",
        alignItems:"center"
    },
    maincontxt:{
        fontFamily:"Lato-Regular",
        textTransform:"uppercase",
        fontSize:20
    },
    modalhead:{
        paddingVertical:16,
        paddingHorizontal:24,
       alignItems: "flex-end", 
    },
    modaltitle:{
        marginTop:20,
        marginBottom:30,
    },
    modaltitletxt:{
        fontFamily:"Lato-Bold",
        fontSize:20,
        textAlign:"center",
        color:"#000"
    },
    modalmaincon:{
        paddingBottom:20,
        paddingHorizontal:24
    },
    modalpara:{
        marginTop:25,
        marginBottom:50
    },
    modalparatxt:{
        fontSize:20,
        fontFamily:"Lato-Regular",
        color:"#616161",
        textAlign:"justify"
    },
    lastline:{
        fontSize:13,
        textAlign:"center",
        color:"#606060"
    }
})
