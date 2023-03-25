import Hero from "../components/Hero";
import About from "../components/About"
import Calculate from "../components/Calculate";
import Newsletter from "../components/Newsletter";
import OurServices from "../components/OurServices";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Newsletter />
      <Calculate />
      <OurServices />
    </>
  );
}

export default Home;
