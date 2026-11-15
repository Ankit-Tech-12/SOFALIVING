"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSofas from "@/components/FeaturedSofas";
import SofaCustomiser from "@/components/SofaCustomiser";
import Craftsmanship from "@/components/Craftsmanship";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

import { defaultSelection } from "@/data/sofas";

export default function Home() {
  const [selection, setSelection] = useState(defaultSelection);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FeaturedSofas />

        <SofaCustomiser
          selection={selection}
          setSelection={setSelection}
        />

        <Craftsmanship />

        <EnquiryForm selection={selection} />
      </main>

      <Footer />
    </>
  );
}