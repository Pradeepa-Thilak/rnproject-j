import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import JourneySection from "./Sections/JourneySection/Index";
import Footer from "../../components/Footer";
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
      <View style={styles.loader}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const sections = data?.results?.SectionDetails || [];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {sections.map((section, index) => {
        const name = section?.a_section_name?.toLowerCase() || "";
        if (name.includes("journey")) {
          return (
            <JourneySection
              key={index}
              section={section}
            />
          );
        }
        return null;
      })}
      <Footer />
    </ScrollView>
  );
};
export default CorporateGifts;
const styles = StyleSheet.create({
  loader: {
    padding: 20,
  },
});