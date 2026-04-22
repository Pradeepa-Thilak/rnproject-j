import React from 'react';
import { ScrollView } from 'react-native';
import Thumbnail from '../components/HomePage/Thumbnail';
import HeroBanner from '../components/HomePage/HeroBanner';
import Reclaim from '../components/HomePage/Reclaim';
import GridDisplay from '../components/HomePage/GridDisplay';
import CurvedDisplay from '../components/HomePage/CurvedGrid';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.home}>
      <Thumbnail />
      <HeroBanner />
      <Reclaim />
      <GridDisplay />
      <CurvedDisplay />
      <Footer />
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  home: {
    backgroundColor: '#fff',
  },
});
