import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ShopByBrand({ position, api }) {
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState('');
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(api);
        const json = await res.json();

        const section = json?.results?.SectionDetails?.find(
          sec => sec.position === position
        );

        if (!section) return;

        // 🔥 Heading
        const headingItem = section.MediaDetails.find(
          item =>
            item.a_media_type === 'Text' &&
            item.a_sequence === "0"
        );
        setHeading(headingItem?.a_title || '');

        const buttonItem = section.MediaDetails.find(
          item =>
            item.a_media_type === 'Text' &&
            item.a_title?.toLowerCase().includes('shop all')
        );
        setButtonText(buttonItem?.a_title || '');

        const images = section.MediaDetails
          .filter(item => item.a_media_type === 'Image')
          .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
          .map(item => ({
            id: item.media_id,
            uri: item.a_image,
          }));

        setData(images);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [position, api]);

  
  const rows = [];
  for (let i = 0; i < data.length; i += 2) {
    rows.push(data.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>

      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(item => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.uri }} style={styles.image} />
            </View>
          ))}
        </View>
      ))}

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>
          {buttonText || 'Shop All Brands'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    
    paddingBottom:60,
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 26,
    fontFamily: 'EBGaramond-Regular',
  
    color: '#212121',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    width: '48.5%',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    resizeMode: 'cover',
  },
  button: {
    marginTop:24,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#212121',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: '#212121',
    letterSpacing: 0.5,
    fontWeight:700,
    textAlign:'center',
    textTransform:"capitalize"
  },
});
