import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

interface MobileNavProps {
    navLinks: Array<{ href: string; label: string }>;
    pathname: string;
}

const MobileNav = ({ navLinks, pathname }: MobileNavProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden p-2 hover:bg-slate-100 rounded-lg focus:outline-none">
                <Menu className="w-6 h-6 text-slate-700" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                {navLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                        <Link
                            href={link.href}
                            className={`w-full px-2 py-1 ${
                                pathname === link.href
                                    ? "bg-blue-50 text-blue-600 font-medium"
                                    : "text-slate-700 hover:text-blue-600"
                            }`}
                        >
                            {link.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobileNav;
