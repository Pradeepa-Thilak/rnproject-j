import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ShopByCategory({ position, api }) {

  const [badge, setBadge] = useState(null);
  const [chips, setChips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(api);
        const json = await res.json();

        const section = json?.results?.SectionDetails?.find(
          sec => sec.position === position
        );

        if (!section) return;

       

     
        const badgeItem = section.MediaDetails.find(
          item =>
            item.a_media_type === 'Image' &&
            item.a_title?.toLowerCase().includes('discount')
        );
        setBadge(badgeItem?.a_image || null);

        const chipItems = section.MediaDetails
          .filter(item =>
            item.a_media_type === 'Text' &&
            item.a_sequence !== "0"
          )
          .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence))
          .map(item => ({
            id: item.media_id,
            title: item.a_title,
          }));

        setChips(chipItems);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [position, api]);

  return (
    <View style={styles.container}>
      
    
    <View style={styles.headingRow}>
  
    <Text style={styles.heading}>Shop by category</Text>


  {badge && (
    <Image
      source={{ uri: badge }}
      style={styles.headingBadge}
    />
  )}
</View>
 
      <View style={styles.row}>
        {chips.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.chip}
            activeOpacity={0.8}
          >
            <Text style={styles.chipText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',

    paddingVertical: 20,
  },

headingRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
  paddingHorizontal: 10,
  gap:10
},

 heading: {
  fontSize: 26,
  fontFamily: 'EBGaramond-Regular',
  fontWeight: '690',
  color: '#212121',
  flexShrink: 1, 
  
  textTransform:"uppercase",

},
headingBadge: {
  width: 55,
  height: 55,
  resizeMode: 'contain',

},
row: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 21,
  paddingHorizontal: 10,
  gap: 10, 
},
chip: {
  borderRadius: 8,
  paddingVertical: 13,
  paddingHorizontal: 10,
  backgroundColor: '#f9f2df',

  shadowColor: '#000',
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.06,
  shadowRadius: 1,

  elevation: 2,
},
  chipText: {
    fontSize: 11,
    fontFamily: 'Lato-Regular',
    color: '#bf7154',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    fontWeight: '700',
  },
});
