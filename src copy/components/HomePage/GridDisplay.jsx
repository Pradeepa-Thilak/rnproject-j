import React from 'react';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import colors from '../../assests/colors';
import { useNavigation } from '@react-navigation/native';
import { getDecodeText } from '../../utils/DecodeText';
import { handleNavigation } from '../../utils/NavigationHelper';
import fonts from '../../assests/fonts';
const GridDisplay = ({ navigation: navProp, data, isfirst = false }) => {
  const navigationHook = useNavigation();
  const navigation = navProp || navigationHook;
  const media = data || [];

  const renderItems = ({ item }) => (
    <Pressable
      style={styles.product}
      onPress={() => handleNavigation(item.a_link, navigation)}
    >
      <View style={{ aspectRatio: 279 / 365 }}>
        <Image source={{ uri: item.a_image }} style={styles.img} />
      </View>

      <Text style={styles.imgName}>{item.a_title}</Text>
      <Text style={styles.imgCat}>{item.a_shortdescription}</Text>
      <Text style={styles.imgDes}>{getDecodeText(item.a_description)}</Text>
      <Text style={styles.shop}>shop now</Text>
    </Pressable>
  );

  return (
    <View>
      <View style={styles.whole}>
        {isfirst && (
          <View style={styles.header}>
            <Text style={styles.gridHead}>featured collections</Text>
          </View>
        )}
        <FlatList
          data={media}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItems}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
      {isfirst && (
        <Pressable
          style={styles.skinnybanner}
          onPress={() => handleNavigation('/m/newarrivals', navigation)}
        >
          <Image
            source={{
              uri: 'https://imagescdn.jaypore.com/uploads/micrositmedia/production/3_710X158-Feb-09-The-World-of-Botanicals-Skinny-Banner-Mobile_3771_1770631596664.jpg',
            }}
            style={styles.imgstyle}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imgstyle: { height: '100%', width: '100%', resizeMode: 'contain' },
  skinnybanner: { paddingHorizontal: 10, aspectRatio: 600 / 134 },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  whole: {
    backgroundColor: colors.whiteColor1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  header: {
    marginVertical: 20,
  },
  gridHead: {
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 25,
    textTransform: 'capitalize',
    textAlign: 'center',
    color: colors.grayColor22,
  },
  product: {
    width: '50%',
    marginRight: 10,
    marginBottom: 20,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
  },
  imgName: {
    flexWrap: 'wrap',
    fontSize: 18,
    fontFamily: fonts.EBGaramondRegular,
    paddingTop: 2,
    marginBottom: 2,
    color: colors.grayColor22,
  },
  imgCat: {
    fontSize: 11.5,
    fontFamily: fonts.EBGaramondRegular,
    textTransform: 'uppercase',
    marginBottom: 2,
    color: colors.grayColor22,
  },
  imgDes: {
    fontSize: 12,
    fontFamily: fonts.EBGaramondRegular,
    paddingVertical: 2,
    color: colors.grayColor14,
  },
  shop: {
    fontSize: 13,
    fontFamily: fonts.EBGaramondRegular,
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    color: colors.brownColor1,
  },
});

export default GridDisplay;
