import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView ,StyleSheet} from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi'; 
import ComponentWithImage_HeaderAndDescription from '../micrositee/sections/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../micrositee/sections/ComponentWithHeaderAndGrid';

import ImageHeaderAndGrid from '../micrositee/sections/ImageHeaderAndGrid';
import BGImage from '../micrositee/sections/BGImage';
import Msiteherobanner from './sections/Msiteherobanner';

import Twocompswithimgdes from "./sections/Twocompswithimgdes"
import Footer from '../../components/Footer';

const Newarrival = () => {

    const [coastalData, setData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMicrositeData('newarrivals');
            if (data.msg === 'success')
                setData(data.results);
            else
                console.log("Message: Failure");
        }

        fetchData();
    }, []);

    console.log(coastalData);

    const sectionData = coastalData?.SectionDetails || [];

  return (
      <ScrollView style={{backgroundColor: '#faf2e5'}}>
          <Msiteherobanner
                  apiUrl="https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=newarrivals&deviceType=mobile&shopId=26"
                
                  imagestyle={{
                    width: "100%",
                 
                    aspectRatio: 360 / 650,
                    resizeMode: "cover",
                  }}
                  pos={1}
                />
       
          <ComponentWithHeaderAndGrid details={sectionData[2]} />
          <ImageHeaderAndGrid details={sectionData[3]} />
          <ComponentWithImage_HeaderAndDescription details={sectionData[4]} AR={40/61}/>
         
         
          {/* section-5*/}
              
                <Twocompswithimgdes details={sectionData[7]}  AR={32 / 49} />
              
               
          {/* <BGImage details={sectionData[6]}/> */}
          {/* <ComponentWithImage_HeaderAndDescription details={sectionData[7]}/>  has 2 images*/}
          
          
        
          <ComponentWithImage_HeaderAndDescription details={sectionData[10]} bgImage={false} />
          <BGImage details={sectionData[10]} />
          <Footer />
      </ScrollView>
  )
}

export default Newarrival


export const styles = StyleSheet.create({
    componentContainer: {
        aspectRatio: 32 / 49,
        backgroundColor: '#faf2e5'
    },
    componentBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    componentTxt: {
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'EBGaramond-Regular',
        color: '#383938'
    },
    componentButton: {
        borderWidth: 1,
        borderColor: '#707070',
        paddingHorizontal: 25,
        paddingVertical: 2.5
    },
    componentButtonTxt: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#383938'
    },
    bestSellerContainer: {
        paddingVertical: 50,
        backgroundColor: '#faecd6'
    },
    bestSellerTxt: {
        fontSize: 12,
        fontFamily: 'EBGaramond-Regular',
        color: '#383938',
        marginHorizontal: 10,
        marginBottom: 20,
        textAlign: 'center',
        letterSpacing: 0.2,
    }, 
    bestSellerGridContainer: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    bestSellerGridImage: {
        width: '100%',
        aspectRatio: 138 / 173
    },
   
})