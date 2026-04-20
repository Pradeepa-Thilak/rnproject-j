import { useEffect, useState, React } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { decode } from 'html-entities';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
export default function Supportingartisans({
  apiUrl,
  position = 7,
  containerStyle,
}) {
  const [content, setContent] = useState(null);

  // 🔥 helper (same pattern)
  const decodeText = (text) => {
    if (!text || typeof text !== 'string') return '';
    try {
      return decode(text).replace(/<[^>]+>/g, '');
    } catch {
      return text;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const json = await res.json();

        const sections = json?.results?.SectionDetails || [];

        const section = sections.find((sec) => sec.position === position);

        if (section?.MediaDetails?.length > 0) {
          const textData = section.MediaDetails.find(
            (item) => item.a_media_type === 'Text',
          );

          const imageData = section.MediaDetails.find(
            (item) => item.a_media_type === 'Image',
          );

          setContent({
            title: decodeText(textData?.a_title || ''),
            description: decodeText(textData?.a_description || ''),
            image: imageData?.a_image || '',
          });
        }
      } catch (err) {
        console.log('API error:', err);
      }
    };

    fetchData();
  }, [apiUrl, position]);

  if (!content) return null;

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Title */}
      {content.title ? (
        <View style={styles.title}>
          <Text style={styles.titleStyle}>{content.title}</Text>
        </View>
      ) : null}

      {/* Image */}
      {content.image ? (
        <Image source={{ uri: content.image }} style={styles.image} />
      ) : null}

      {/* Description */}
      {content.description ? (
        <Text style={styles.description}>{content.description}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.creamColor6,
  },
  image: {
    width: '100%',
    aspectRatio: 400 / 397,
    resizeMode: 'cover',
    marginBottom: 30,
  },
  title: {
    maxWidth: '45%',
    paddingBottom: 10,
  },
  titleStyle: {
    fontSize: 22,
    fontFamily: fonts.EBGaramondRegular,
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: 500,
  },
  description: {
    fontSize: 16,
    color: colors.grayColor19,
    fontFamily: fonts.EBGaramondRegular,
    marginBottom: 10,
    maxWidth: 316,
    lineHeight: 18,
    textAlign: 'center',
  },
});
