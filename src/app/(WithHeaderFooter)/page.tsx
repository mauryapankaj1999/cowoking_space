import Image from "next/image";
import HeroSection from "../components/HomeComponent/HeroSection";
import ExploreSpaces from "../components/HomeComponent/ExploreSpaces";
import FeaturedSpaces from "../components/HomeComponent/FeaturedSpaces";
import WhatYouGet from "../components/HomeComponent/WhatYouGet";
import ComfortableSpaces from "../components/HomeComponent/ComfortableSpaces";
import FeatureSection from "../components/HomeComponent/FeatureSection";
import ServicesCardMain from "../components/HomeComponent/ServicesCard";
import OurClientlogo from "../components/HomeComponent/OurClientlogo";
import VideoSection from "../components/HomeComponent/VideoSection";
import HowItWorks from "../components/HomeComponent/HowItWorks";
import ExploreByCity from "../components/HomeComponent/ExploreByCity";
import Testimonials from "../components/HomeComponent/Testimonials";
import BlogSection from "../components/HomeComponent/BlogSection";

export default function Home() {
  return (
    <>
    
    <VideoSection />
    {/* <HeroSection /> */}
    <FeaturedSpaces />
    {/* <ExploreSpaces /> */}
    <ServicesCardMain />
    <ExploreByCity />
    <WhatYouGet />
    <Testimonials />
    {/* <HowItWorks /> */}
    <BlogSection />
    <OurClientlogo />
    {/* <ComfortableSpaces /> */}
    {/* <FeatureSection /> */}
    
    
    
    </>
  );
}
