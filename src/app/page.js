"use client";
// import { Main } from "next/document";
import HomeSection1 from "@/components/Home/HomeSection1";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const StockLoader = dynamic(() => import("@/components/Home/StockLoader"), { ssr: false });
import HomeSection2 from "@/components/Home/HomeSection2";
import CorporateLearningSection from "@/components/CorporateLearningSection";
import HomeSection3 from "@/components/Home/HomeSection3";
import Link from "next/link";
import HomeSection4 from "../components/Home/HomeSection4";
import HomeSection5 from "../components/Home/HomeSection5";
import Commodity from "@/components/Home/Commodity";
import HomeSection6 from "@/components/Home/HomeSection6";
import HomeSection7 from "@/components/Home/HomeSection7";
import HomeSection8 from "@/components/Home/HomeSection8";
import HomeSection9 from "@/components/Home/HomeSection9";
import NewgallerySection from "@/components/Home/newgallerySection";
import TestimonialSection from "@/components/Home/testimonimals";
import WhoCanLearn from "@/components/Home/whocanlearn";
import CoursesSection from "@/components/Home/CoursesSection";
import BookMeeting from "@/components/BookMeeting";
import CompanyCarouselSection from "@/components/Home/CompanyCarouselSection";
import WhyJoinSection from "@/components/Home/WhyJoinSection";
import TrainingModules from "@/components/Home/TrainingModules";
import TeamSection from "@/components/Home/TeamSection";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <StockLoader />}
      <main style={{ filter: loading ? 'blur(2px)' : 'none', pointerEvents: loading ? 'none' : 'auto' }}>
        <HomeSection1 />
        {/* <HomeSection2 /> */}
        <CompanyCarouselSection />
        <CorporateLearningSection />
        <NewgallerySection/>
        <WhyJoinSection />
        <TrainingModules />
        <TeamSection />
        <TestimonialSection/>
        <CoursesSection/>
        <WhoCanLearn/>
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <HomeSection7 />
        <HomeSection8 />
        <HomeSection9 />
        <Commodity />
        <BookMeeting/>
      </main>
    </>
  );
}
