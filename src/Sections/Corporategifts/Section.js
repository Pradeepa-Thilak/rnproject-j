// import Banner from "./Banner";  
// import Grid from "./Grid";      
import Contact from "./Contact";
import Form from "./Form";
import Journey from "./Journey";
import Footer from "../../components/Footer";
const Section = ({ section }) => {
  if (!section) return null;
  const name = section.a_section_name?.toLowerCase() || "";
//   //  HERO BANNER
//   if (name.includes("hero banner")) {
//     return <Banner data={section} />;
//   }
//   //  GIFTING SOLUTION
//   if (name.includes("gifting solution")) {
//     return <Grid data={section} />;
//   }
  //  JOURNEY (combined section)
  if (name.includes("journey")) {
    return (
      <>
        <Contact data={section} />
        <Form />
        <Journey data={section} />
        <Footer/>
      </>
    );
  }
  return null;
};
export default Section;