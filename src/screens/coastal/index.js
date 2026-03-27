import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi'; 
import ComponentWithImage_HeaderAndDescription from '../../section/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../../section/ComponentWithHeaderAndGrid';
import ImageAndDescriptionComponent from '../../section/ImageAndDescriptionComponent';
import ImageHeaderAndGrid from '../../section/ImageHeaderAndGrid';
import BGImage from '../../section/BGImage';
import Footer from '../../components/Footer';

const Coastal = () => {

    const [coastalData, setData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMicrositeData('coastal');
            if (data.msg === 'success')
                setData(data.results);
            else
                console.log("Message: Failure");
        }

        fetchData();
    }, []);

    console.log(coastalData);

    const sectionData = coastalData?.SectionDetails || [];

    console.log('Section',sectionData[9]);
  return (
      <ScrollView style={{backgroundColor: '#faf2e5'}}>
          <ComponentWithImage_HeaderAndDescription details={sectionData[1]} AR={32 / 49} />
          <ComponentWithHeaderAndGrid details={sectionData[2]} />
          <ImageHeaderAndGrid details={sectionData[3]} />
          <ComponentWithImage_HeaderAndDescription details={sectionData[4]} AR={40/61}/>
          <ImageAndDescriptionComponent details={sectionData[5]} /> {/* section-5*/}
          {/* <BGImage details={sectionData[6]}/> */}
          {/* <ComponentWithImage_HeaderAndDescription details={sectionData[7]}/>  has 2 images*/}
          <ComponentWithImage_HeaderAndDescription details={sectionData[8]} />
          <ComponentWithImage_HeaderAndDescription details={sectionData[10]} bgImage={false} />
          <BGImage details={sectionData[10]} />
          <Footer />
      </ScrollView>
  )
}

export default Coastal