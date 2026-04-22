import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { decode } from 'html-entities';
import colors from '../../../../assests/colors';
const VideoSection = ({ section, index }) => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const media = section?.MediaDetails || [];

  const titleImage = media.find(
    (item) => item?.a_image && item.a_image.includes('The_Art_of_Draping'),
  );

  const bgImage = media.find(
    (item) =>
      item?.a_image &&
      !item.a_image.includes('.mp4') &&
      !item.a_image.includes('The_Art_of_Draping'),
  );

  const textItems = media.filter((item) => item?.a_media_type === 'Text');

  const textItem = textItems[textItems.length - 1];

  const videoItem = media.find(
    (item) => item?.a_image && item.a_image.toLowerCase().includes('.mp4'),
  );

  const decodeText = (str) => {
    if (!str) return '';
    try {
      return decode(str).replace(/<[^>]+>/g, '');
    } catch {
      return '';
    }
  };

  if (!videoItem) return null;

  return (
    <View style={styles.container}>
      {bgImage && (
        <Image source={{ uri: bgImage.a_image }} style={styles.bgImage} />
      )}

      {titleImage && (
        <Image
          source={{ uri: titleImage.a_image }}
          style={styles.titleImage}
          resizeMode="contain"
        />
      )}

      {textItem?.a_description && (
        <Text style={styles.desc}>{decodeText(textItem.a_description)}</Text>
      )}

      {playingIndex === index ? (
        <Video
          source={{ uri: videoItem.a_image }}
          style={styles.video}
          controls
        />
      ) : (
        <Pressable onPress={() => setPlayingIndex(index)}>
          <Image source={{ uri: videoItem.a_image }} style={styles.video} />
        </Pressable>
      )}
    </View>
  );
};

export default VideoSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creamColor8,
    paddingBottom: 20,
  },
  bgImage: {
    width: '100%',
    height: 120,
  },
  titleImage: {
    width: '100%',
    height: 60,
    marginVertical: 10,
  },
  desc: {
    textAlign: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  video: {
    width: '100%',
    height: 220,
  },
});
