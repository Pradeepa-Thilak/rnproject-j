import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import colors from '../../../../assests/colors';
const { width } = Dimensions.get('window');

export default function CorporategiftsBannerCard({
  details = [],
  positions = [],
  isNeeded = true,
}) {
  const sections = details.filter((sec) =>
    positions.includes(Number(sec.position)),
  );

  const formatted = sections
    .map((section) => {
      const item = section.MediaDetails.find((m) => m.a_media_type === 'Image');

      if (!item) return null;

      return {
        id: item.media_id,
        uri: item.a_image,
        title: item.a_title,
        description: item.a_shortdescription,
      };
    })
    .filter(Boolean);

  if (!formatted.length) return null;

  return (
    <View>
      {formatted.map((item, index) => (
        <View
          key={item.id}
          style={[styles.container, index % 2 !== 0 && styles.formattedmap]}
        >
          {/* IMAGE */}
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>

          {/* CONTENT */}
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>

            {isNeeded && (
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Shop Now</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.creamColor3,
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 4,
    overflow: 'hidden',
  },
  formattedmap: {
    flexDirection: 'row-reverse',
  },
  imageWrapper: {
    width: width * 0.5,
    aspectRatio: 0.85,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentWrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: colors.blackColor1,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 14,
  },
});
