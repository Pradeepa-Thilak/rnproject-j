import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useState, useEffect, React } from 'react';
import { SvgUri } from 'react-native-svg';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
export default function Stories({ apiUrl }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(apiUrl);
        const json = await res.json();

        const sections = json?.results?.SectionDetails || [];
        const section2 = sections.find((sec) => sec.position === 9);
        if (section2?.MediaDetails?.length > 0) {
          setImages(section2.MediaDetails);
        }
      } catch (err) {
        console.log('api error', err);
      }
    };
    fetchdata();
  }, [apiUrl]);
  if (!images.length) return null;
  const category = images.slice(2, 4).map((item) => item.a_image);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % category.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? category.length - 1 : prev - 1));
  };
  return (
    <View style={styles.maincon}>
      <View style={styles.top}>
        <Image
          source={{
            uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/elephant_4320_1721046054344_3771_1730194773642.png',
          }}
          style={styles.Images}
        />
        <Text style={styles.toptxt}>
          {`Stories of Delight: Our Clients' Perspective`}
        </Text>
        <Text style={styles.para}>
          {` Hear the stories of delight, joy & satisfaction as our patrons share
          their journey with Jaypore. Join our community of satisfied customers
          & walk through a world of curated elegance & exquisite craftsmanship.
          Experience Jaypore's legacy through the eyes of those who have made it
          a part of their story.`}
        </Text>
      </View>
      <View style={styles.sliderContainer}>
        <Pressable style={styles.leftArrow} onPress={goPrev}>
          <View style={{ transform: [{ rotate: '180deg' }] }}>
            <SvgUri
              width={50}
              height={50}
              uri="https://imagescdn.jaypore.com/img/app/brands/jaypore/home/desktop/nextSlide.svg"
            />
          </View>
        </Pressable>

        <Image
          source={{ uri: category[currentIndex] }}
          style={styles.sliderImage}
        />

        <Pressable style={styles.rightArrow} onPress={goNext}>
          <SvgUri
            width={50}
            height={50}
            uri="https://imagescdn.jaypore.com/img/app/brands/jaypore/home/desktop/nextSlide.svg"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincon: {
    paddingHorizontal: 30,
    backgroundColor: colors.creamcolor7,
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Images: {
    width: '100%',
    aspectRatio: 1080 / 121,
    marginVertical: 20,
  },
  toptxt: {
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 22,
    maxWidth: 245,
    textAlign: 'center',
    marginBottom: 10,
  },
  para: {
    fontSize: 14,
    fontFamily: fonts.EBGaramondRegular,
    maxWidth: 320,
    textAlign: 'center',
    marginBottom: 65,
    lineHeight: 18,
  },
  sliderContainer: {
    paddingHorizontal: 21,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  sliderImage: {
    width: '100%',
    aspectRatio: 841 / 1103,
  },

  leftArrow: {
    position: 'absolute',
    left: 20,
    top: '20%',
    transform: [{ translateY: -30 }],
    zIndex: 1,
  },

  rightArrow: {
    position: 'absolute',
    right: 20,
    top: '20%',
    transform: [{ translateY: -30 }],
    zIndex: 1,
  },
});
