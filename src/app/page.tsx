import BlogSection from "../../components/LandingPage/BlogSection";
import DKTExplanation from "../../components/LandingPage/DKTExplanation";
import FAQ from "../../components/LandingPage/FAQ";
import Landing from "../../components/LandingPage/Landing";
import LandingBanner from "../../components/LandingPage/LandingBanner";
import ServicesBoxes from "../../components/LandingPage/ServicesBoxes";


export default function HomePage() {  
  return (
      <div className=" mt-10 w-full h-full">
        <Landing />
        <DKTExplanation/>
        <ServicesBoxes/>
        <FAQ/>
        <LandingBanner/>
        <BlogSection /> 
      </div>
  );
}
