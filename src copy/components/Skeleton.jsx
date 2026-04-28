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
      style={[styles.skeletonBase, { width, height, borderRadius }, style]}
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
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};
export const HeroBannerSkeleton = () => {
  return (
    <View style={styles.heroContainer}>
      <SkeletonLoading width="100%" height={460} />
      <View style={styles.heroRight}>
        <SkeletonLoading width="85%" height={260} />
      </View>
    </View>
  );
};
export const HomeSkeleton = () => {
  return (
    <View style={styles.HomeSkeletoncontainer}>
      <ThumbnailSkeleton />
      <HeroBannerSkeleton />
    </View>
  );
};
const styles = StyleSheet.create({
  HomeSkeletoncontainer: {
    padding: 12,
  },
  skeletonBase: {
    backgroundColor: '#eeeeee',
  },
  thumbnailContainer: {
    paddingVertical: 10,
  },
  thumbnailRow: {
    flexDirection: 'row',
  },
  thumbnailItem: {
    marginRight: 10,
  },
  heroContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  heroRight: {
    marginLeft: 10,
  },
});
