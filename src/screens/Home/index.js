import React from 'react'
import { ScrollView } from 'react-native'
import Thumbnail from '../../components/HomePage/Thumbnail';
import HeroBanner from '../../components/HomePage/HeroBanner';
import Reclaim from '../../components/HomePage/Reclaim';
import GridDisplay from '../../components/HomePage/GridDisplay';
import CurvedDisplay from '../../components/HomePage/CurvedGrid';
import Footer from '../../components/Footer';
import { bannerImg } from '../../lib/ConstData';

const Home = () => {
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff' }}>
      <Thumbnail />
      <HeroBanner bannerData={bannerImg} aspectRatio={360/400}/>
      <Reclaim />
      <GridDisplay />
      <CurvedDisplay />
      <Footer />
    </ScrollView>
  )
}

export default Home