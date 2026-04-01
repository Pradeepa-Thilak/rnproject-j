import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function FeaturedCollections({ position, api }) {
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState('');
  const [badge, setBadge] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(api);
        const json = await res.json();

        const section = json?.results?.SectionDetails?.find(
          sec => sec.position === position
        );

        if (!section) return;

        const titleItem = section.MediaDetails.find(
          item => item.a_media_type === 'Text'
        );
        setHeading(titleItem?.a_title || '');

        const sorted = section.MediaDetails
          .filter(item => item.a_media_type === 'Image')
          .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

        const badgeItem = sorted.find(item => item.a_title === "discount image");
        setBadge(badgeItem?.a_image || null);

        const cards = sorted
  .filter(item => item.a_title !== "discount image")
          .map(item => ({
            id: item.media_id,
            uri: item.a_image,
            title: item.a_title,
            description: item.a_shortdescription,
            buttonText: 'Shop Now',
          }));

        setData(cards);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [position, api]);

  return (
    <View style={styles.container}>
     <View style={styles.headingRow}>
  <View style={styles.headingWrapper}>
    <Text style={styles.heading}>{heading}</Text>
  </View>

  {badge && (
    <Image
      source={{ uri: badge }}
      style={styles.headingBadge}
    />
  )}
</View>

      {data.map((item,index) => (
        <View
    key={item.id}
    style={[
      styles.card,
      index === data.length - 1 && { marginBottom: 0 }
    ]}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>

          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>
              {item.description}
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>
                {item.buttonText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom:60
  },
headingRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 42,
  marginBottom: 25,
  paddingHorizontal: 10,
},
headingWrapper: {
  flexShrink: 1,
  alignItems: 'center', 
},
  heading: {
    fontSize: 22,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '690',
    color: '#212121',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 35,
  
  },
  headingBadge: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 24,
    paddingHorizontal:10
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 4.5/ 3,
  },
  image: {
    width: '100%',
    height: '100%',       
    resizeMode: 'cover',
  },
  contentWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'EBGaramond-Regular',
    fontWeight: '600',
    color: '#212121',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  description: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: 'Lato-Regular',
    color: '#212121',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#212121',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: '#212121',
    letterSpacing: 0.5,
    fontWeight:700,
  },
});

