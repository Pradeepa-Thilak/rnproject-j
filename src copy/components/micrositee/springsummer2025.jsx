import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getMicrositeData } from '../../api/micrositeApi';
import ComponentWithImage_HeaderAndDescription from './sections/ComponentWithImage_HeaderAndDescription';
import ComponentWithHeaderAndGrid from '../micrositee/sections/ComponentWithHeaderAndGrid';
import ImageAndDescriptionComponent from '../micrositee/sections/ImageAndDescriptionComponent';
import ImageHeaderAndGrid from '../micrositee/sections/ImageHeaderAndGrid';
import BGImage from '../micrositee/sections/BGImage';
import Msiteherobanner from './sections/Msiteherobanner';
import Parawithtextimagebtn from './sections/Parawithtextimagebtn/index';
import GridImages from './sections/Gridimages';
import Twocompswithimgdes from './sections/Twocompswithimgdes';
import Footer from '../Footer';
import colors from '../../assests/colors';
import ScreenWrapper from '../ScreenWrapper';

const Springsummer2025 = () => {
  const [ssdata, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMicrositeData('springsummer2025');
      if (data.msg === 'success') setData(data.results);
      else console.log('Message: Failure');
    };

    fetchData();
  }, []);

  console.log(ssdata);

  const sectionData = ssdata?.SectionDetails || [];

  return (
    <ScreenWrapper>
      <ScrollView style={{ backgroundColor: colors.creamColor1 }}>
        <Msiteherobanner
          details={sectionData[0]}
          imagestyle={styles.Msiteimage}
        />
        <ComponentWithImage_HeaderAndDescription
          details={sectionData[1]}
          AR={32 / 49}
        />
        <ComponentWithHeaderAndGrid details={sectionData[2]} />
        <ImageHeaderAndGrid details={sectionData[3]} />

        <ImageAndDescriptionComponent details={sectionData[5]} />
        <GridImages
          data={sectionData[6]?.MediaDetails?.filter(
            (item) => item.a_media_type === 'Image',
          )?.map((item) => ({
            image: item.a_image,
            title: item.a_title,
          }))}
          spacing={20}
          imageStyle={styles.GridImg}
          style={styles.GridImgStyle}
        />
        <Twocompswithimgdes
          details={sectionData[7]}
          AR={32 / 49}
          reversebg={true}
        />
        <ComponentWithImage_HeaderAndDescription
          details={sectionData[8]}
          AR={32 / 49}
        />
        <Parawithtextimagebtn details={sectionData[9]} AR={32 / 49} />
        <ComponentWithImage_HeaderAndDescription
          details={sectionData[10]}
          bgImage={false}
        />
        <BGImage details={sectionData[10]} />
        <Footer />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Springsummer2025;

export const styles = StyleSheet.create({
  Msiteimage: {
    width: '100%',
    aspectRatio: 360 / 564,
    resizeMode: 'cover',
  },
  GridImg: {
    width: '100%',
    aspectRatio: 1 / 1,
  },
  GridImgStyle: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
