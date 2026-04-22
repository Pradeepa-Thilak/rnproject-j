import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { handleNavigation } from '../../utils/NavigationHelper';
import fonts from '../../assests/fonts';
import colors from '../../assests/colors';
const CurvedDisplay = ({ details }) => {
  const navigation = useNavigation();

  if (!details) return null;

  const media = (details?.MediaDetails || [])
    .filter((item) => item.a_media_type === 'Image')
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

  const firstItem = media[0];
  const restItems = media.slice(1);

  const renderProducts = ({ item }) => (
    <Pressable
      onPress={() => handleNavigation(item.a_link, navigation)}
      style={styles.product}
    >
      <View style={styles.productImageWrapper}>
        <Image source={{ uri: item.a_image }} style={styles.img} />
      </View>
      <Text style={styles.imgName}>{item.a_title}</Text>
      <Text style={styles.imgCat}>{item.a_shortdescription}</Text>
      <Text style={styles.shop}>shop now</Text>
    </Pressable>
  );
  return (
    <View style={styles.whole}>
      {/* HEADER */}
      <View style={styles.head}>
        <Text style={styles.headText}>jaypore finest</Text>
      </View>
      <View>
        <Pressable
          onPress={() => handleNavigation(firstItem.a_link, navigation)}
          style={styles.firstItemContainer}
        >
          <View style={styles.firstImageWrapper}>
            <Image
              source={{ uri: firstItem.a_image }}
              style={styles.firstImage}
            />
          </View>
          <Text style={styles.imgName}>{firstItem.a_title}</Text>
          <Text style={styles.imgCat}>{firstItem.a_shortdescription}</Text>
          <Text style={styles.shop}>shop now</Text>
        </Pressable>
        <FlatList
          data={restItems}
          initialNumToRender={1}
          renderItem={renderProducts}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
};
export default CurvedDisplay;
const styles = StyleSheet.create({
  productImageWrapper: {
    aspectRatio: 300 / 453,
  },

  firstItemContainer: {
    width: '100%',
    marginBottom: 15,
  },

  firstImageWrapper: {
    aspectRatio: 600 / 700,
  },

  firstImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  columnWrapper: {
    justifyContent: 'space-between',
  },
  whole: {
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  head: {
    marginBottom: 35,
  },
  headText: {
    fontSize: 30,
    fontFamily: fonts.EBGaramondRegular,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: colors.grayColor22,
  },
  product: {
    width: '48%',
    marginBottom: 20,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  imgName: {
    fontSize: 18,
    fontFamily: fonts.EBGaramondRegular,
    marginTop: 5,
    marginBottom: 2,
    color: colors.grayColor22,
  },
  imgCat: {
    fontSize: 12,
    fontFamily: fonts.EBGaramondRegular,
    textTransform: 'uppercase',
    marginBottom: 2,
    color: colors.grayColor22,
  },
  shop: {
    fontSize: 13,
    fontFamily: fonts.EBGaramondRegular,
    textDecorationLine: 'underline',
    color: colors.brownColor1,
  },
});
