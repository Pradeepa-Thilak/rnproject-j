import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from '../../components/Footer';
import colors from '../../assests/colors';
const JayporeCredits = () => {
  const credits = 0;
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Jaypore credits</Text>
        <Text style={styles.creditsValue}>{credits}</Text>
        <Text style={styles.description}>
          You can use these credits for your purchase at the time of check out
        </Text>
        <Text style={styles.subText}>
          Credits is the actual amount of the product when returned, cashbacks
          or any other promotional value.
        </Text>
      </View>
      <Footer />
    </ScrollView>
  );
};
export default JayporeCredits;
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.grayColor1,
  },
  container: {
    backgroundColor: colors.grayColor27,
    paddingTop: 20,
    alignItems: 'center',
    elevation: 2,
  },
  title: {
    fontSize: 16,
    color: colors.grayColor25,
    marginBottom: 10,
  },
  creditsValue: {
    fontSize: 40,
    color: colors.blackColor4,
    fontWeight: 'inherit',
    marginVertical: 10,
  },
  description: {
    textAlign: 'center',
    color: colors.grayColor11,
    marginTop: 10,
    lineHeight: 20,
    fontWeight: 700,
    padding: 5,
  },
  subText: {
    textAlign: 'center',
    color: colors.grayColor11,
    fontSize: 12,
    marginTop: 10,
    lineHeight: 18,
    fontWeight: 700,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
});
