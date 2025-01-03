"use client";
import PageHeader from "@/components/PageHeader";
import WhatIs from "./WhatIs";
import EducationBenefits from "./EducationBenefits";
import RetirementBenefits from "./RetirementBenefits";
import WhyMalaysia from "./WhyMalaysia";
import ProcessSteps from "./ProcessSteps";
import OurServices from "./OurServices";
import FAQSection from "./FAQ";
import ContactUs from "../sections/ContactUs";
import ScrollToTop from "@/components/ScrollToTopButton";

export default function OurService() {
    return (
        <>
            <PageHeader title="Our Service" breadcrumb="Service"/>
			<WhatIs />
			<EducationBenefits />
			<RetirementBenefits />
			<WhyMalaysia />
			<ProcessSteps />
			<OurServices />
			<FAQSection />
			<ContactUs />
			<ScrollToTop />
        </>
    );
}
