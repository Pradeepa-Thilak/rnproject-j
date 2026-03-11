import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { Icon } from 'react-native-paper';
import { footBadges } from '../lib/ConstData';
import { footValues } from '../lib/ConstData';

const Footer = () => {
  const [dropMenu, setDrop] = useState('');

  console.log(dropMenu);

  const renderFooterIcon = (item, index) => (
    <View
      style={[
        styles.badge,
        index === footBadges.length - 1 && { borderRightWidth: 0 },
      ]}
    >
      <Icon source={item.icon} color="#4caf50" size={30} />
      <Text style={styles.badgeName}>{item.name}</Text>
    </View>
  );

  const renderFooterMenu = item => (
    <View>
      <Pressable
        style={[
          styles.footdrop,
          dropMenu === item.name ? { marginBottom: 0 } : { marginBottom: 2 },
        ]}
        onPress={() => setDrop(dropMenu === item.name ? '' : item.name)}
      >
        <Text style={styles.dropName}>{item.name}</Text>
        {dropMenu === item.name ? (
          <Icon source={'chevron-down'} size={30} />
        ) : (
          <Icon source={'chevron-right'} size={30} />
        )}
      </Pressable>
      {dropMenu === item.name && (
        <View style={styles.dropDown}>
          <FlatList
            data={item.value}
            keyExtractor={index => index.toString()}
            renderItem={({ item }) => (
              <Pressable style={styles.menu}>
                <Icon source={'chevron-right'} size={30} color="#ccc" />
                <Text style={styles.dropMenuText}>{item}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );

  return (
    <View>
      <View>
        <FlatList
          data={footBadges}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => renderFooterIcon(item, index)}
          numColumns={4}
          contentContainerStyle={{
            paddingHorizontal: 18,
            paddingVertical: 15,
          }}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.ques}>Questions?</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.mail, styles.ques]}>Mail us to </Text>
          <Text
            selectable={true}
            dataDetectorType={'email'}
            style={[styles.mail, styles.ques]}
          >
            hello@jaypore.com
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          data={footValues}
          keyExtractor={(index, item) => index + item}
          renderItem={({ item }) => renderFooterMenu(item)}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 18,
          paddingVertical: 34,
          backgroundColor: '#f9eddf',
        }}
      >
        <View style={styles.intro}>
          <Image
            source={require('../assests/images/logo.png')}
            style={{
              height: 60,
              width: 60,
              marginRight: 10,
            }}
          />
          <Text style={styles.introText1}>
            Jaypore: Discover India's Most Beautiful Products and Their Unique
            Stories
          </Text>
        </View>
        <Text style={styles.introText2}>
          India wears her beauty in the colorful textiles, breathtaking
          ornaments and inspiring stories that come alive in her streets. There
          is magic in the hands that work the loom, in the eyes that pore over a
          needle, in the brushstrokes that paint life. And yet few things can
          sum it all up, can capture the essence in a box. At Jaypore, we have
          begun a fascinating journey, a humble attempt to bring India a little
          closer to the world. Dedicated to creating a unique interpretation of
          age-old crafts, we partner with artisanal communities, textile
          designers, independent artists (and the occasional maverick) to
          showcase a new, contemporary design language that comes from India and
          belongs everywhere on the globe. We believe in sharing stories and
          celebrating how each handmade object can come to represent something
          much bigger than itself. Travelling to the colorful corners of this
          fascinating country, we curate unique and exclusive collections that
          represent India's finest craft-based designs, so that you can savor
          the delightful treasures at leisure, with us. Immerse yourself in the
          beauty of India. Shop for handmade Apparel, jewelry, Home furnishing,
          Home decor & More.
        </Text>
      </View>
      <Text style={styles.copyright}>© 2025 Jaypore, All rights Reserved.</Text>
      <View style={styles.social}>
        <Icon source={'instagram'} size={32} />
        <Icon source={'facebook'} size={32} />
        <Icon source={'twitter'} size={32} />
        <Icon source={'youtube'} size={32} />
        <Icon source={'pinterest'} size={32} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeName: {
    textAlign: 'center',
    fontSize: 11,
    textTransform: 'capitalize',
    color: '#4caf50',
    fontFamily: 'Lato-Regular',
  },
  badge: {
    alignItems: 'center',
    width: '25%',
    gap: 10,
    borderRightWidth: 1,
    paddingHorizontal: 15,
    borderColor: '#4caf50',
  },
  footer: {
    paddingVertical: 40,
    paddingHorizontal: 25,
    backgroundColor: '#f9eddf',
  },
  ques: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    color: '#212121',
    letterSpacing: 0.2,
  },
  mail: {
    paddingTop: 30,
    shadowColor: '#000',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  footdrop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: '#f9eddf',
    // marginBottom: 1.5,
  },
  dropName: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: '#212121',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
  },
  dropDown: {
    marginBottom: 1.5,
    backgroundColor: '#f9eddf',
    borderTopWidth: 0.5,
    paddingVertical: 14,
    paddingHorizontal: 30,
  },
  menu: {
    flexDirection: 'row',
    backgroundColor: '#f9eddf',
    paddingBottom: 15,
  },
  dropMenuText: {
    fontSize: 18,
    fontFamily: 'EBGaramond-Regular',
    textTransform: 'capitalize',
  },
  intro: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  introText1: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    flex: 1,
    marginVertical: 10,
  },
  introText2: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
  },
  copyright: {
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#0f0f0f',
    padding: 15,
  },
  social: {
    flexDirection: 'row',
    backgroundColor: '#f9eddf',
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: 'center',
    gap: 20,
  },
});
export default Footer;
