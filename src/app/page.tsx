import React from "react";
import Image from "next/image"
import HeroSection from "@/components/landing_page/hero_section";
import SobreNos from "@/components/landing_page/sobrenos";
import Anuncios from "@/components/landing_page/anuncios";

const SneakerStore = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection/> 
      <SobreNos/>
      <div className="flex flex-col items-center">
        <Anuncios titulo="Destaques"/>

        <Anuncios titulo="Promoçoes"/>
      </div>
    </div>
  );
};

export default SneakerStore;
