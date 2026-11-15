import {
  Trees,
  Armchair,
  Droplets,
  Hammer,
} from "lucide-react";

const craftsmanshipFeatures = [
  {
    id: 1,
    icon: Trees,
    title: "Kiln-Dried Hardwood",
    description:
      "0% moisture seasoned Teak and Sal wood with reinforced mortise-and-tenon corner joints. Termite-proofed for lasting structural peace of mind.",
    footer: "Grade A Solid Timber",
  },
  {
    id: 2,
    icon: Armchair,
    title: "38-Density Cold Foam",
    description:
      "Multi-layer cold-cure memory foam cores supported by S-spring suspension bands. Maintains rebound resilience and anatomical contour for 15+ years.",
    footer: "High Rebound Rating",
  },
  {
    id: 3,
    icon: Droplets,
    title: "50k Martindale Rubs",
    description:
      "Pet-friendly weaves tested against heavy abrasion and accidental spills. Oleophobic treatments resist coffee, wine, and daily family wear.",
    footer: "Hydrophobic Nanocoat",
  },
  {
    id: 4,
    icon: Hammer,
    title: "Direct from Factory",
    description:
      "Direct atelier-to-residence model skips middlemen markups. You invest purely in authentic timber, foam grade, and generational craft.",
    footer: "Zero Distributor Margin",
  },
];

const statistics = [
  { value: "26", label: "Years of Craftsmanship" },
  { value: "42k+", label: "Happy Homes" },
  { value: "10-Yr", label: "Quality Assurance" },
  { value: "4.9★", label: "Customer Rating" },
];

export default function Craftsmanship() {
  return (
    <section
      id="craftsmanship"
      className="bg-[#EBE8E1] px-5 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">

          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#89513D]">
            Uncompromising Quality
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#29251F] sm:text-5xl">
            Built by Indian Artisans, Engineered to Last Generations.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#625A52] sm:text-base">
            Unlike mass-manufactured flatpack imports, SOFALIVING
            constructs seating with architectural joinery, seasoned
            timber, and tailored upholstery executed by third-generation
            woodworkers and upholsterers in Bangalore and Mumbai.
          </p>

        </div>

        {/* Craftsmanship Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {craftsmanshipFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className="flex min-h-[350px] flex-col rounded-2xl border border-[#EAE6DF] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0EDE5]">
                  <Icon
                    size={23}
                    strokeWidth={1.6}
                    className="text-[#89513D]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-serif text-xl leading-snug text-[#29251F]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-[#625A52]">
                  {feature.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-6">

                  <div className="mb-4 border-t border-[#EEEAE4]" />

                  <p className="text-xs text-[#8B7B70]">
                    {feature.footer}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

        {/* Statistics Panel */}
        <div className="mt-14 grid grid-cols-2 gap-8 rounded-[24px] bg-white px-6 py-10 shadow-sm sm:grid-cols-4 sm:px-10 lg:py-14">

          {statistics.map((stat, index) => (
            <div
              key={stat.value}
              className={`text-center ${
                index !== statistics.length - 1
                  ? "sm:border-r sm:border-[#EEEAE4]"
                  : ""
              }`}
            >

              <h3 className="font-serif text-4xl text-[#89513D] sm:text-5xl lg:text-6xl">
                {stat.value}
              </h3>

              <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-[#81786F] sm:text-xs">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}