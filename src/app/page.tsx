import Home from "./sections/Home";
import WhyChooseUs from "./sections/WhyChooseUs";
import AboutUs from "./sections/AboutUs";
import Testimonials from "./sections/Testimonials";
import WhatIs from "./sections/WhatIs";
import ContactUs from "./sections/ContactUs";
import ScrollToTop from "@/components/ScrollToTopButton";

export default function App() {
    return (
        <>
            <Home />
            <WhyChooseUs />
            <AboutUs />
            <WhatIs />
            <Testimonials />
            <ContactUs />
            <ScrollToTop />

        </>
    );
}
