import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Section from "./Section";
const CorporateGifts = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifts&deviceType=mobile&shopId=26"
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log("API Error:", err));
  }, []);
  if (!data) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const sections = data?.results?.SectionDetails || [];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </ScrollView>
  );
};
export default CorporateGifts;