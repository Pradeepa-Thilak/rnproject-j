import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import Msiteherobanner from "../micrositee/sections/Msiteherobanner";
import FeaturedCollections from "../micrositee/sections/FeaturedCollections";
import JourneySection from "./Sections/JourneySection/Index";
import Footer from "../../components/Footer";
const API =
  "https://uat-microsites.pantaloons.com/getMicrosite?micrositeName=corporategifts&deviceType=mobile&shopId=26";
export default function CorporateGifts() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log("API Error:", err));
  }, []);
  if (!data) {
    return <ActivityIndicator size="large" />;
  }
  const sections = data?.results?.SectionDetails || [];
  const journeySection = sections.find(sec =>
    sec?.a_section_name?.toLowerCase().includes("journey")
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* HERO */}
      <Msiteherobanner
        apiUrl={API}
        position={1}
        imagestyle={{
          width: "100%",
          aspectRatio: 360 / 500,
          resizeMode: "cover",
        }}
      />
      {/* FEATURED */}
      <FeaturedCollections
        api={API}
        position={2}
      />
      <JourneySection section={journeySection} />
      {/* FOOTER */}
      <Footer />
    </ScrollView>
  );
}