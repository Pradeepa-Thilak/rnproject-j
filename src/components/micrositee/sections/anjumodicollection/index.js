import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Video from 'react-native-video';
import { decode as atob } from 'base-64';
import SpriteIcon from "../../../SpriteIcon";

export default function AnjuModiCollection({ details, buttonText }) {

  const media = details?.MediaDetails || [];

  // 🔥 sequence mapping
  const seq1 = media.find(m => Number(m.a_sequence) === 1);
  const seq2 = media.find(m => Number(m.a_sequence) === 2);
  const seq3 = media.find(m => Number(m.a_sequence) === 3);
  const seq4 = media.find(m => Number(m.a_sequence) === 4);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const isVideo = (url) => url?.endsWith(".mp4");

  return (
    <View>

      {/* 🔥 HALF BANNER */}
      <View style={styles.bannerContainer}>

        <Image
          source={{ uri: seq1?.a_image }}
          style={styles.bannerImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{seq2?.a_title}</Text>

          <Text style={styles.desc}>
            {atob(seq2?.a_description || "")}
          </Text>
        </View>

      </View>

      {/* 🔥 VIDEO SECTION */}
      {seq3 && isVideo(seq3.a_image) && (
        <View style={styles.videoContainer}>

          <Video
            source={{ uri: seq3.a_image }}
            style={styles.video}
            resizeMode="cover"
            repeat
            paused={!isPlaying}
            muted={isMuted}
            volume={1.0}
            audioOutput="speaker"
          />

          {/* ▶ Play / Pause */}
          <Pressable
            onPress={() => setIsPlaying(prev => !prev)}
            style={styles.playButton}
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
              onPress={() => setIsMuted(prev => !prev)}
              style={styles.muteButton}
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
      )}

      {/*  BUTTON */}
      {buttonText && (
        <Pressable style={styles.apiButton}>
          <Text style={styles.apiButtonText}>
            {buttonText}
          </Text>
        </Pressable>
      )}

      {/* 🔥 FULL IMAGE */}
      {seq4 && (
        <Image
          source={{ uri: seq4.a_image }}
          style={styles.fullImage}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  bannerContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fbf4e7',
  },

  textContainer: {
    flex: 1,
    paddingRight: 10,
  },

  title: {
    fontSize: 12,
    fontFamily: "Lato-Bold",
    color: '#292929',
    textAlign: 'center',
  },

  desc: {
    fontSize: 10,
    marginTop: 10,
    fontFamily: "EBGaramond-Regular",
    color: '#292929',
    textAlign: 'center',
  },

  bannerImage: {
    width: 150,
    aspectRatio: 0.85,
  },

  videoContainer: {
    marginTop: 20,
    position: "relative",
  },

  video: {
    width: "100%",
    aspectRatio: 1.2,
  },

  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -28 }, { translateY: -28 }],
    zIndex: 10,
    elevation: 10,
  },

  muteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    elevation: 10,
  },

  apiButton: {
    marginTop: 20,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#212121",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },

  apiButtonText: {
    fontSize: 14,
    color: "#212121",
    letterSpacing: 0.5,
  },

  fullImage: {
    width: "100%",
    aspectRatio: 724 / 237,
    marginTop: 20,
  },

});