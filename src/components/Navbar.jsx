"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sofa, ArrowUpRight } from "lucide-react";

const links = [
    { name: "Home", href: "#home" },
    { name: "Collection", href: "#collection" },
    { name: "Customise", href: "#customise" },
    { name: "Craftsmanship", href: "#craftsmanship" },
    { name: "Enquiry", href: "#enquiry" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#E5DDD3] bg-[#F7F4EF]/95 backdrop-blur-md">

            <nav className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-14">

                {/* Logo */}
                <Link
                    href="#home"
                    className="flex items-center gap-2 text-xl font-bold tracking-wide text-[#29251F]"
                >
                    <Sofa size={25} strokeWidth={1.8} />
                    <span>SOFALIVING</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-10 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[#756D64] transition hover:text-[#A66B4F]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <Link
                    href="#customise"
                    className="hidden items-center gap-2 bg-[#29251F] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#A66B4F] md:inline-flex"
                >
                    Design Your Sofa
                    <ArrowUpRight size={16} />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-[#29251F] md:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

            </nav>

            {/* Mobile Navigation */}
            <div
                className={`absolute left-0 top-full w-full border-t border-[#E5DDD3]
    bg-[#F7F4EF] px-6 shadow-lg transition-all duration-300 md:hidden
    ${menuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-5 py-6">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-medium text-[#29251F] transition hover:text-[#A66B4F]"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="#customise"
                        onClick={() => setMenuOpen(false)}
                        className="bg-[#A66B4F] px-5 py-3 text-center text-sm font-medium text-white"
                    >
                        Design Your Sofa
                    </Link>
                </div>
            </div>

        </header>
    );
}