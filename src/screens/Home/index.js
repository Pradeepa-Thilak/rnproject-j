import React from 'react'
import { ScrollView } from 'react-native'
import { useState,useEffect } from 'react';
import Thumbnail from '../../components/HomePage/Thumbnail';
import HeroBanner from '../../components/HomePage/HeroBanner';
import Reclaim from '../../components/HomePage/Reclaim';
import GridDisplay from '../../components/HomePage/GridDisplay';
import CurvedDisplay from '../../components/HomePage/CurvedGrid';
import Spotlight from "../../components/HomePage/Spotlight"
import Footer from '../../components/Footer';
import { getMicrositeData } from '../../api/micrositeApi';


const Home = () => {
   const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getMicrositeData("home");
      if (res?.msg === "success") {
        setData(res.results);
      }
    };
    fetchData();
  }, []);
  
  const sectionData = data?.SectionDetails || [];
  const getSection = (pos) =>
    sectionData.find(sec => sec.position === pos);
 
  const gridSection = getSection(5);

const media = (gridSection?.MediaDetails || [])
  .filter(item => item.a_media_type === "Image")
  .sort((a, b) => Number(a.a_sequence) - Number(b.a_sequence));

const firstFour = media.slice(0, 4);
const nextFour = media.slice(4, 8);
const lastFour =media.slice(8,25)
 
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff' }}>
      <Thumbnail details={getSection(1)}/>
      <HeroBanner details={getSection(2)} aspectRatio={360/400}/>
      <Reclaim details={getSection(3)}/>
      <GridDisplay data={firstFour} isfirst={true}
      />
      <GridDisplay data={nextFour}/>
      <CurvedDisplay details ={getSection(6)}/>
    
      <GridDisplay data={lastFour}/>
      <Spotlight details={getSection(7)}/>
      <Footer />
    </ScrollView>
  )
}

export default Home