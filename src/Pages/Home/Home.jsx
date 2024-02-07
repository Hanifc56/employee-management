import Banner from "./Banner";
import FAQ from "./FAQ";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1>Homoe</h1>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
