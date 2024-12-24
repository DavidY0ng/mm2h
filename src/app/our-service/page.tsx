"use client";
import PageHeader from "@/components/PageHeader";
import WhatIs from "./WhatIs";
import EducationBenefits from "./EducationBenefits";

export default function OurService() {
    return (
        <>
            <PageHeader title="Our Service" breadcrumb="Service"/>
			<WhatIs />
			<EducationBenefits />
        </>
    );
}
