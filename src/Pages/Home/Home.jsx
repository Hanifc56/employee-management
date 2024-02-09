import Banner from "./Banner";
import FAQ from "./FAQ";
import NewsLetter from "./NewsLetter";
import Services from "./Services";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EMS | HOME</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
