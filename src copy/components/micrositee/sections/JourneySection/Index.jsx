import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { getDecodeText } from '../../../../utils/DecodeText';
import fonts from '../../../../assests/fonts';
import colors from '../../../../assests/colors';
import CorporategiftsBannerCard from '../CorporategiftsBannerCard';
const JourneySection = ({ section }) => {
  const items = section?.MediaDetails || [];

  const textItem = items.find((item) => item.a_media_type === 'Text');

  const imageItems = items
    .filter((item) => item.a_media_type === 'Image')
    .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

  const description = getDecodeText(textItem?.a_description || '');
  const title = getDecodeText(textItem?.a_title || '');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Get In Touch With Us</Text>

      <Text style={styles.desc}>
        We will be happy to assist you with your queries. Please feel free to
        contact us via email at: b2b@jaypore.com
      </Text>

      <Text style={styles.email}>You can also call us:</Text>
      <Text style={styles.phone}>Ph: (+91) 8087549632</Text>

      <View style={styles.TextInput}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email-ID" style={styles.input} />
        <TextInput placeholder="Phone" style={styles.input} />
        <TextInput
          placeholder="Message"
          style={[styles.input, styles.TextInputMessage]}
          multiline
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.heading, styles.HeadingTitle]}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      <View style={styles.JourneySectionImage}>
        {imageItems.map((item) => {
          const position = Number(item.a_sequence);

          return (
            <CorporategiftsBannerCard
              key={item.media_id}
              positions={[position]}
              details={[
                {
                  position: position,
                  MediaDetails: [item],
                },
              ]}
              isNeeded={false}
            />
          );
        })}
      </View>
    </View>
  );
};

export default JourneySection;

const styles = StyleSheet.create({
  TextInput: {
    marginTop: 15,
  },
  TextInputMessage: {
    height: 100,
  },
  HeadingTitle: {
    marginTop: 30,
  },
  JourneySectionImage: {
    marginTop: 20,
  },
  container: {
    padding: 20,
    backgroundColor: colors.creamColor10,
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: fonts.EBGaramondRegular,
    fontWeight: '600',
    color: colors.grayColor22,
  },
  desc: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.grayColor22,
    fontFamily: fonts.EBGaramondRegular,
    marginBottom: 10,
  },
  email: {
    textAlign: 'center',
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 18,
    color: colors.grayColor22,
  },
  phone: {
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: fonts.EBGaramondRegular,
    fontSize: 18,
    color: colors.grayColor22,
  },
  input: {
    backgroundColor: colors.grayColor13,
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.grayColor8,
    padding: 15,
    borderRadius: 6,
  },
  buttonText: {
    color: colors.whiteColor1,
    textAlign: 'center',
  },
  // column: {
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
  // icon: {
  //   width: 110,
  //   height: 100,
  //   marginRight: 15,
  // },
  // title: {
  //   fontSize: 14,
  //   alignItems: 'center',
  //   fontWeight: '600',
  // },
  // sub: {
  //   fontSize: 12,
  //   color: '#555',
  //   marginTop: 2,
  // },
});
