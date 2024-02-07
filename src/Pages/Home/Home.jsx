import Banner from "./Banner";
import FAQ from "./FAQ";
import NewsLetter from "./NewsLetter";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
