import { useEffect, useState, React } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
import { getDecodeText } from '../../../../utils/DecodeText';
export default function Supportingartisans({
  apiUrl,
  position = 7,
  containerStyle,
}) {
  const [content, setContent] = useState(null);

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
            title: getDecodeText(textData?.a_title || ''),
            description: getDecodeText(textData?.a_description || ''),
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
      {content.title ? (
        <View style={styles.title}>
          <Text style={styles.titleStyle}>{content.title}</Text>
        </View>
      ) : null}

      {content.image ? (
        <Image source={{ uri: content.image }} style={styles.image} />
      ) : null}

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
