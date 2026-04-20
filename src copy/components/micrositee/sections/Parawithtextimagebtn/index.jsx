import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { getDecodeText } from '../../../../utils/DecodeText';
import React from 'react';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
export default function Parawithtextimagebtn({
  details,
  // AR,
  bgImageStyle,
  bottomBgStyle,
}) {
  // const aspectRatio = AR || 32 / 49;

  const media = details?.MediaDetails || [];
  const sortedMedia = [...media].sort(
    (a, b) => Number(a.a_sequence) - Number(b.a_sequence),
  );
  const images = sortedMedia.filter((item) => item.a_media_type === 'Image');

  const descriptiondata = media.find(
    (item) => item.a_title === 'Popular Categories',
  )?.a_description;
  const bgData = sortedMedia.filter(
    (item) => item.a_media_type === 'BackgroundImage',
  );

  // console.log(getDecodeText(textData?.a_description));
  console.log('bg data', bgData);

  // let currentBg = null;

  return (
    <View style={styles.maincon}>
      <View style={styles.toppara}>
        <Text style={styles.topparatxt}>{getDecodeText(descriptiondata)}</Text>
      </View>
      <View>
        {images.map((item, index) => {
          const bg = bgData[index];
          const isBottomBg = index === 1 || index === 2;

          return (
            <View key={index} style={styles.wrapper}>
              <View style={styles.itemContainer}>
                <Text style={styles.title}>{item.a_title}</Text>

                <Image source={{ uri: item.a_image }} style={styles.image} />

                <Pressable style={styles.btn}>
                  <Text style={styles.btntxt}>Shop Now</Text>
                </Pressable>
              </View>

              {bg?.a_image && (
                <Image
                  source={{ uri: bg.a_image }}
                  style={[
                    styles.bgImage,
                    bgImageStyle,
                    isBottomBg && [styles.bottomBg, bottomBgStyle],
                  ]}
                  resizeMode="cover"
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincon: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  toppara: {
    alignSelf: 'center',
    paddingVertical: 20,
    maxWidth: 300,
  },
  topparatxt: {
    fontSize: 12,
    fontFamily: fonts.EBGaramondItalic,
    textAlign: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.EBGaramondRegular,
  },

  image: {
    width: '100%',
    aspectRatio: 794 / 1004,
    resizeMode: 'cover',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntxt: {
    paddingHorizontal: 25,
    paddingVertical: 2.5,
    borderWidth: 1,
    borderColor: colors.grayColor14,
    fontFamily: fonts.LatoRegular,
    fontSize: 12,
  },
  wrapper: {
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    overflow: 'hidden',
  },

  bgImage: {
    position: 'absolute',
    width: '100%',

    height: 500,
    top: 10,
  },

  bottomBg: {
    top: 'auto',
    bottom: 0,

    height: 70,
  },

  itemContainer: {
    paddingHorizontal: 50,
    gap: 20,
  },
});
