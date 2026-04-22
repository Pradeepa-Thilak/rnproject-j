import { View, Pressable, Text, StyleSheet, Image } from 'react-native';
import { useState, React } from 'react';
import { decode } from 'html-entities';
import Video from 'react-native-video';
import SpriteIcon from '../../../SpriteIcon';
import fonts from '../../../../assests/fonts';
export default function LastingImpression({
  details,
  topIndex,
  bottomIndex = 1,
  topitemstyle,
  bottomitemstyle,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const media = details?.MediaDetails || [];
  if (!media.length) return null;

  const textData = media.find((item) => item.a_media_type === 'Text');
  const mediaItems = media.filter((item) => item.a_media_type !== 'Text');

  // 🔥 decode helper
  const decodeText = (text) => {
    if (!text || typeof text !== 'string') return '';
    try {
      return decode(text).replace(/<[^>]+>/g, '');
    } catch {
      return text;
    }
  };

  const description = decodeText(textData?.a_description || '');
  const title = decodeText(textData?.a_title || '');

  const topItem = mediaItems[topIndex];
  const bottomItem = mediaItems[bottomIndex];

  const isVideo = (url) => url?.endsWith('.mp4');

  return (
    <View style={styles.maincon}>
      {/* TOP SECTION */}
      <View style={styles.top}>
        {topItem !== undefined ? (
          <>
            <Image source={{ uri: topItem?.a_image }} style={topitemstyle} />
            <Text style={styles.para}>{description}</Text>
          </>
        ) : (
          <>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.para}>{description}</Text>
          </>
        )}
      </View>

      {/* BOTTOM SECTION */}
      <View style={styles.bottom}>
        {isVideo(bottomItem?.a_image) ? (
          <View style={styles.container}>
            <Video
              source={{ uri: bottomItem.a_image }}
              volume={1.0}
              style={bottomitemstyle}
              resizeMode="cover"
              repeat
              paused={!isPlaying}
              muted={isMuted}
              audioOutput="speaker"
            />

            {/* ▶ Play / Pause */}
            <Pressable
              onPress={() => setIsPlaying((prev) => !prev)}
              style={styles.playvideo}
            >
              <SpriteIcon
                x={isPlaying ? 290 : 255}
                y={59}
                w={45}
                h={48}
                spriteWidth={600}
                spriteHeight={272}
              />
            </Pressable>

            {/* 🔇 Mute */}
            {isPlaying && (
              <Pressable
                onPress={() => setIsMuted((prev) => !prev)}
                style={styles.mutevideo}
              >
                <SpriteIcon
                  x={isMuted ? 595 : 622}
                  y={125}
                  w={25}
                  h={25}
                  spriteWidth={700}
                  spriteHeight={317}
                />
              </Pressable>
            )}
          </View>
        ) : (
          <Image
            source={{ uri: bottomItem?.a_image }}
            style={bottomitemstyle}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincon: {
    backgroundColor: '#f9f2df',
    paddingVertical: 30,
  },
  container: {
    position: 'relative',
  },
  mutevideo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -28 }, { translateY: -28 }],
    zIndex: 10,
    elevation: 10,
  },
  playvideo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -28 }, { translateY: -28 }],
    zIndex: 10,
    elevation: 10,
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'EBGaramond-Regular',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  para: {
    maxWidth: 320,
    lineHeight: 18,

    fontFamily: fonts.EBGaramondRegular,
    fontSize: 14,
    textAlign: 'center',
  },
  bottom: {
    paddingHorizontal: 25,
  },
});
