import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
export const SkeletonLoading = ({
  width,
  height,
  variant,
  boxRadius,
  style,
}) => {
  let borderRadius = 0;
  if (variant === 'circle') {
    borderRadius =
      typeof height === 'string' ? parseInt(height, 10) / 2 : height / 2;
  }
  if (variant === 'edge') {
    borderRadius =
      typeof boxRadius === 'string' ? parseInt(boxRadius, 10) : boxRadius || 0;
  }
  return (
    <View
      style={[
        styles.skeletonBase,
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    />
  );
};
export const ThumbnailSkeleton = () => {
  return (
    <View style={styles.thumbnailContainer}>
      <Animated.FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.thumbnailRow}>
            {[1, 2].map((tile) => (
              <View key={tile} style={styles.thumbnailItem}>
                <SkeletonLoading
                  width={80}
                  height={80}
                  variant="edge"
                  boxRadius={45}
                />
                <SkeletonLoading
                  width={80}
                  height={10}
                  variant="edge"
                  boxRadius={5}
                  style={styles.thumbnailText}
                />
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};
export const HeroBannerSkeleton = ({ aspectRatio = 1 }) => {
  return (
    <View style={styles.heroContainer}>
      <SkeletonLoading width="100%" style={[styles.banner, { aspectRatio }]} />
    </View>
  );
};
export const HomeSkeleton = () => {
  return (
    <View style={styles.homeContainer}>
      <ThumbnailSkeleton />
      <HeroBannerSkeleton aspectRatio={360 / 400} />
    </View>
  );
};
export const VideoSkeleton = ({ aspectRatio = 16 / 9 }) => {
  return (
    <View style={styles.videoContainer}>
      <SkeletonLoading width="100%" style={[styles.video, { aspectRatio }]} />
    </View>
  );
};
const styles = StyleSheet.create({
  skeletonBase: {
    backgroundColor: '#eeeeee',
  },
  homeContainer: {
    padding: 12,
  },
  thumbnailContainer: {
    paddingVertical: 10,
  },
  thumbnailRow: {
    flexDirection: 'row',
  },
  thumbnailItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  thumbnailText: {
    marginTop: 6,
  },
  heroContainer: {
    width: '100%',
    marginVertical: 10,
  },
  banner: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoContainer: {
    marginVertical: 10,
  },
  video: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});
