import Link from "next/link";

const footerLinks = [
  { name: "Craftsmanship Standards", href: "#craftsmanship" },
  { name: "Material Warranty", href: "#craftsmanship" },
  { name: "Showroom Directory", href: "#enquiry" },
  { name: "Custom Fabric Samples", href: "#enquiry" },
  { name: "Privacy Policy", href: "#enquiry" },
  { name: "Terms of Craft", href: "#enquiry" },
];

export default function Footer() {
  return (
    <footer className="bg-[#EBE8E1] px-5 py-16 sm:px-8 lg:px-14">

      <div className="mx-auto max-w-[1400px]">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-[#DCD5CB] pb-12 lg:grid-cols-[1.4fr_1.1fr_0.8fr]">

          {/* Brand */}
          <div>

            <Link
              href="#home"
              className="font-serif text-3xl tracking-wide text-[#29251F]"
            >
              SOFALIVING
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#625A52]">
              Architectural seating systems crafted with
              kiln-seasoned hardwoods, cold-cure ergonomics,
              and artisan European and Indian weaves.
              Designed for longevity and restorative residential calm.
            </p>

            <div className="mt-7 space-y-2 text-xs text-[#625A52]">

              <p>
                <span className="font-semibold text-[#29251F]">
                  Direct Workshop:
                </span>{" "}
                +91 98765 43210 (10:00 AM – 7:30 PM IST)
              </p>

              <p>
                <span className="font-semibold text-[#29251F]">
                  Trade Desk:
                </span>{" "}
                trade@sofaliving.in
              </p>

            </div>

          </div>

          {/* Locations */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#29251F]">
              Atelier Experience Studios
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-6 text-[#625A52]">

              <p>
                <span className="font-semibold text-[#29251F]">
                  Bangalore:
                </span>{" "}
                100ft Road, Indiranagar, 560038
              </p>

              <p>
                <span className="font-semibold text-[#29251F]">
                  Mumbai:
                </span>{" "}
                Mathuradas Mill Compound, Lower Parel, 400013
              </p>

              <p>
                <span className="font-semibold text-[#29251F]">
                  Delhi NCR:
                </span>{" "}
                The Gallery on MG, Sultanpur, New Delhi 110030
              </p>

            </div>

          </div>

          {/* Trade Desk */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#29251F]">
              Architect & Trade Desk
            </h3>

            <p className="mt-6 text-sm leading-7 text-[#625A52]">
              Specialized 3D asset packs (Revit / Rhino / 3ds Max)
              and volume project rates available for registered
              architects and interior studios.
            </p>

            <a
              href="mailto:trade@sofaliving.in"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#89513D] transition hover:gap-3"
            >
              Apply for Trade Account →
            </a>

          </div>

        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#DCD5CB] py-8">

          <div className="flex flex-wrap gap-x-7 gap-y-4">

            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-[#625A52] transition hover:text-[#89513D]"
              >
                {link.name}
              </Link>
            ))}

          </div>

          <p className="text-[10px] font-semibold tracking-wider text-[#81786F]">
            Pan-India White-Glove Logistics
          </p>

        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#625A52] sm:flex-row sm:items-center">

          <p>
            © 2025 SOFALIVING Bespoke Furniture Pvt. Ltd.
            All rights reserved. Handcrafted with architectural precision.
          </p>

          <p className="text-[10px] font-semibold tracking-wider text-[#81786F]">
            EST. 1998 · Atelier Bangalore & Mumbai
          </p>

        </div>

      </div>

    </footer>
  );
}