"use client";
import PageHeader from "@/components/PageHeader";
import WhatIs from "./WhatIs";
import EducationBenefits from "./EducationBenefits";
import RetirementBenefits from "./RetirementBenefits";
import WhyMalaysia from "./WhyMalaysia";

export default function OurService() {
    return (
        <>
            <PageHeader title="Our Service" breadcrumb="Service"/>
			<WhatIs />
			<EducationBenefits />
			<RetirementBenefits />
			<WhyMalaysia />
        </>
    );
}
