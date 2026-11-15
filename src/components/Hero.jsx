import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Sofa, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FAF8F2] px-5 pb-12 pt-10 sm:px-8 lg:px-14 lg:pt-14"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Hero Content */}
        <div className="max-w-3xl">

          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#98634E]">
            Crafted for your comfort
          </p>

          <h1 className="font-serif text-4xl leading-[1.2] tracking-tight text-[#29251F] sm:text-5xl lg:text-6xl">
            Bespoke Sofas, Sculpted for
            <br className="hidden sm:block" />
            <span className="text-[#98634E]">
              {" "}Modern Indian Homes.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#81786F] sm:text-base">
            Thoughtfully crafted seating, designed with timeless elegance,
            exceptional comfort and refined details. Find the perfect sofa
            that brings your living space to life.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">

            <Link
              href="#collection"
              className="group inline-flex items-center gap-2 rounded-full bg-[#98634E] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#80513F]"
            >
              Explore Collection
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#customise"
              className="inline-flex items-center gap-2 rounded-full border border-[#DCD3C7] px-6 py-3 text-xs font-semibold text-[#29251F] transition hover:border-[#98634E] hover:text-[#98634E]"
            >
              Explore Signature Pieces
              <ArrowUpRight size={15} />
            </Link>

          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-9 h-[260px] min-h-[260px] w-full overflow-hidden rounded-xl sm:h-[380px] sm:min-h-[380px] lg:h-[490px] lg:min-h-[490px]">

          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800"
            alt="Beautiful modern Indian living room with elegant furniture"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Subtle Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          {/* Image Caption */}
          <div className="absolute bottom-5 left-5 text-white sm:bottom-8 sm:left-8">

            <p className="text-[9px] font-semibold uppercase tracking-[0.25em]">
              SOFALIVING COLLECTION
            </p>

            <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
              Made for the moments that matter.
            </h2>

          </div>
        </div>

        {/* Trust Highlights */}
        <div className="mt-6 grid grid-cols-1 gap-4 border-b border-[#E9E3D9] pb-7 sm:grid-cols-3 sm:gap-6">

          <div className="flex items-center gap-3">
            <Sofa size={19} strokeWidth={1.5} className="shrink-0 text-[#98634E]" />
            <p className="text-xs text-[#756D64]">
              Thoughtfully Crafted Furniture
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck size={19} strokeWidth={1.5} className="shrink-0 text-[#98634E]" />
            <p className="text-xs text-[#756D64]">
              Quality You Can Trust
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Truck size={19} strokeWidth={1.5} className="shrink-0 text-[#98634E]" />
            <p className="text-xs text-[#756D64]">
              Made for Modern Living
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}