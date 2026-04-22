import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Footer from '../../components/Footer';
import SpriteIcon from '../../components/SpriteIcon';
import ModalCom from '../../components/PLP/ModalCom';
import { useState, React } from 'react';
import fonts from '../../assests/fonts';
import colors from '../../assests/colors';
const MyaccountSprite = ({ x, y, w, h, spriteWidth, spriteHeight }) => {
  return (
    <View style={[styles.spriteContainer, { width: w, height: h }]}>
      <Image
        source={{
          uri: 'https://imagescdn.jaypore.com/img/app/brands/myaccount_sprite/Myaccount_Spriteicon_M.png',
        }}
        style={{
          width: spriteWidth,
          height: spriteHeight,
          transform: [{ translateX: -x }, { translateY: -y }],
        }}
      />
    </View>
  );
};

export default function Savedcards() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headercon}>
            <Text style={styles.headercontxt}>Your Saved Cards</Text>
            <Pressable onPress={() => setOpenModal(true)}>
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
            <View style={styles.card}>
              <View style={styles.cardtop}>
                <MyaccountSprite
                  x={27}
                  y={29}
                  w={40}
                  h={28}
                  spriteWidth={1400}
                  spriteHeight={840}
                />
                <MyaccountSprite
                  x={132}
                  y={50}
                  w={80}
                  h={20}
                  spriteWidth={2000}
                  spriteHeight={1200}
                />
              </View>
              <View style={styles.cardmiddle}>
                <Text style={styles.cardNumber}>
                  •••• •••• •••• 0800
                  {/* alt + 0149 */}
                </Text>
                <View style={styles.ImageContainer}>
                  <Image
                    source={{
                      uri: 'https://imagescdn.jaypore.com/img/app/brands/jaypore/cardLogos/mastercard.png?auto=format',
                    }}
                    style={styles.Image}
                  />
                </View>
              </View>
            </View>
            <Pressable>
              <View style={styles.removebtn}>
                <View style={styles.deletebtn}>
                  <MyaccountSprite
                    x={188}
                    y={34}
                    w={17}
                    h={20}
                    spriteWidth={1400}
                    spriteHeight={840}
                  />
                </View>
                <Text style={styles.Remove}>REMOVE</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <Footer />
      </ScrollView>
      <ModalCom
        open={openModal}
        close={() => setOpenModal(false)}
        bgcolor="transparent"
        containerStyle={styles.containerStyle}
      >
        <View style={styles.container1}>
          <View style={styles.modalcontainer}>
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
              <View style={styles.Imagecontainer1}>
                <Image
                  source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAtCAYAAAD/aHgLAAAABHNCSVQICAgIfAhkiAAAAgBJREFUaEPtWoFNwzAQJBuUCYAJygaUCWAD2ACYAJiAMgFlAmCDMgGM0A0KE8BdFaMEJc59ZByn2NJLrfKu7/6//x/bxY4+DqF6DTnVpwyq+Y7V7yELoihEKCT5JuqmpnYFQHOVKK1yBnmEXEI+UmPTgIc47yAryIFKdAnlI8gxhJ/HMr5KoEUm+stl2aOJx3AO3TYHbU3osk5eQPZbmPL5BMIinEJpYcm4LUuH799TC92xNgM0OMsdjd82akSfoXUCYTOwSDy5OHhsBoj5BeJrSWtE3ZfdRMJSsXU1Cn29QCNRtXlQgMTQ+ SGhhq4yIQZw6xoK7uxRq1WH1O/t0dmQqHusvSznmJNRj7WSmGIm+poEbB0E3485zERzedGNHFWzdzL6Nx7NWTdqQNoXMyejnHXtRo4yIyejiplzUx8l5gItkkPXGro8PeOWhTp4RMe9nFgjmEf5GuQaZwV8akS5afYE+YRMWGwVyyhEY+s43F3rcv/3ZpuJ0pNzkqQlfETp+mmDubj/u+oyY4Tnpkj0EW0LjU0oRCDStUQwovRoU9blzr7vGKALYKjnwYiGAvRXv5OJNll2rFmXR5jrkpC0M0IlZtA9yJhunJwD7wOE79Az5b9BosygvBHG88YUkoyC25HbXJZSJji3U5kn3mMapjJXjW/GvaWJH9Io5isG3yr6ky7KqEUlAAAAAElFTkSuQmCC',
                  }}
                  style={styles.Image1}
                />
              </View>
              {/* para */}
              <View style={styles.modalpara}>
                <Text style={styles.modalparatxt}>
                  This is a process of converting your card details into a
                  unique token that is specific to your card and only to one
                  merchant at a time. This code masks the true details of your
                  card, without which no one can misuse your card.
                </Text>
              </View>
              {/* lastline */}
              <View style={styles.lastlinecontainer}>
                <Text style={styles.lastline}>
                  *Please read RBI guidelines for more details on tokenisation
                  of Cards
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ModalCom>
    </View>
  );
}

const styles = StyleSheet.create({
  spriteContainer: {
    overflow: 'hidden',
  },
  container: {
    margin: 10,
  },
  ImageContainer: {
    marginTop: 18,
    alignItems: 'flex-end',
  },
  Image: {
    width: 58,
    height: 40,
  },
  Remove: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  container1: {
    width: '100%',
  },
  modalcontainer: {
    backgroundColor: colors.whiteColor1,
    borderRadius: 4,
    margin: 32,
    maxWidth: 444,
    alignSelf: 'center',
  },
  Imagecontainer1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image1: {
    width: 58,
    height: 45,
  },
  lastlinecontainer: {
    marginTop: 20,
  },
  headercon: {
    margin: 20,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    gap: 10,
  },
  headercontxt: {
    fontFamily: fonts.LatoBold,
    fontSize: 20,
    color: colors.blackColor1,
  },
  maincon: {
    // justifyContent:"center",
    // alignItems:"center",
    margin: 10,
    marginBottom: 50,
  },
  // maincontxt: {
  //   fontFamily: 'Lato-Regular',
  //   textTransform: 'uppercase',
  //   fontSize: 20,
  // },
  modalhead: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'flex-end',
  },
  modaltitle: {
    marginTop: 20,
    marginBottom: 30,
  },
  modaltitletxt: {
    fontFamily: fonts.LatoBold,
    fontSize: 20,
    textAlign: 'center',
    color: colors.blackColor1,
  },
  modalmaincon: {
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  modalpara: {
    marginTop: 25,
    marginBottom: 50,
  },
  modalparatxt: {
    fontSize: 20,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor11,
    textAlign: 'justify',
  },
  lastline: {
    fontSize: 13,
    textAlign: 'center',
    color: colors.grayColor12,
  },
  card: {
    padding: 20,
    backgroundColor: 'black',
    width: '100%',
    height: 165,
    borderRadius: 10,
  },
  cardtop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardmiddle: {
    paddingVertical: 22,
  },
  cardNumber: {
    color: colors.whiteColor1,
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: fonts.LatoRegular,
  },
  removebtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  deletebtn: {
    marginRight: 3,
  },
});
