import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { sofas, sofaDetails } from "@/data/sofas";

export default function FeaturedSofas() {
  return (
    <section
      id="collection"
      className="bg-[#F5F2EB] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end">

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#98634E]">
              Foundational Designs
            </p>

            <h2 className="font-serif text-4xl tracking-tight text-[#29251F] sm:text-5xl">
              Signature Collections
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-[#756D64] md:justify-self-end md:text-base">
            Explore our foundational silhouettes, engineered for ergonomic
            posture and architectural presence.
          </p>

        </div>

        {/* Sofa Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {sofas.map((sofa) => {
            const details = sofaDetails[sofa.name];

            return (
              <article
                key={sofa.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E9E3D9] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Image */}
                <div className="relative aspect-[1.3/1] overflow-hidden">

                  <Image
                    src={sofa.image}
                    alt={details?.title || sofa.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-[#FAF8F2] px-4 py-2 text-[10px] font-semibold tracking-wide text-[#29251F]">
                    {details?.label || sofa.tag}
                  </span>

                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">

                  {/* Name and Price */}
                  <div className="flex items-start justify-between gap-3">

                    <h3 className="max-w-[70%] font-serif text-xl leading-snug text-[#29251F] sm:text-2xl">
                      {details?.title || sofa.name}
                    </h3>

                    <p className="whitespace-nowrap pt-1 text-sm font-semibold text-[#98634E]">
                      ₹{sofa.price.toLocaleString("en-IN")}
                    </p>

                  </div>

                  {/* Description */}
                  <p className="mt-3 min-h-[75px] text-sm leading-6 text-[#756D64]">
                    {details?.description || sofa.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="mt-4 flex min-h-[64px] flex-wrap content-start gap-2">

                    {(details?.features || []).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-md bg-[#F0EDE5] px-3 py-2 text-[10px] font-medium tracking-wide text-[#514A43]"
                      >
                        {feature}
                      </span>
                    ))}

                  </div>

                  {/* Customise Button */}
                  <Link
                    href="#customise"
                    className="mt-7 flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-[#98634E] px-4 py-3.5 text-sm font-medium text-[#89563F] transition hover:bg-[#98634E] hover:text-white"
                  >
                    Customise {sofa.name}
                    <SlidersHorizontal size={15} />
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}