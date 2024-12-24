import React from "react";
import Link from "next/link";

type PageHeaderProps = {
    title: string;
    breadcrumb: string;
};

const PageHeader = ({
    title = "Our Services",
    breadcrumb = "Services",
}: PageHeaderProps) => {
    return (
        <div className="relative h-96 w-full overflow-hidden">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-[url('/page-header/page-header.jpg')] bg-cover bg-center"
                aria-hidden="true"
            />
            {/* Dark overlay for better text visibility */}
            <div
                className="absolute inset-0 bg-blue-900/70"
                aria-hidden="true"
            />

            {/* Content container */}
            <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                {/* Main title */}
                <h1 className="text-5xl font-bold mb-4">{title}</h1>

                {/* Breadcrumb navigation */}
                <div className="flex items-center gap-2 text-lg">
                    <Link
                        href="/"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <span>/</span>
                    <span>{breadcrumb}</span>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
