"use client";
import PageHeader from "@/components/PageHeader";
import ContactUs from "../sections/ContactUs";
import ScrollToTop from "@/components/ScrollToTopButton";

export default function OurService() {
    return (
        <>
            <PageHeader title="About Us" breadcrumb="About Us"/>
			<ContactUs />
			<ScrollToTop />
        </>
    );
}
