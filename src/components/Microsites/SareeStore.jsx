import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import VideoSection from './Sections/VideoSection';
import Footer from '../../components/Footer';
const SareeStore = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      'https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=the-saree-store&deviceType=mobile&shopId=26'
    )
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err));
  }, []);
  if (!data) return <ActivityIndicator size="large" />;
  const sections = data?.results?.SectionDetails || [];
  return (
    <ScrollView>
      {sections.map((section, index) => {
        const name =
          section?.a_section_name?.toLowerCase() || "";
        if (name.includes('lasting impression')) {
          return (
            <VideoSection
              key={index}
              section={section}
              index={index}
            />
          );
        }
        return null;
      })}
      <Footer />
    </ScrollView>
  );
};
export default SareeStore;