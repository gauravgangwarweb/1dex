import React from "react";
import Hero from "../ui/home/Hero";
import Features from "../ui/home/Features";
import Innovation from "../ui/home/Innovation";
import CTA from "../ui/home/CTA";

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <Innovation />
            <CTA />
        </>
    )
}

export default Home;