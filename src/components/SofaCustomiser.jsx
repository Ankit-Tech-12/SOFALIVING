"use client";

import Image from "next/image";
import Link from "next/link";
import {
  sofas,
  fabrics,
  configurations,
  colorOptions,
  modelDescriptions,
  configurationDescriptions,
  fabricDescriptions,
} from "@/data/sofas";
import { Check, ShieldCheck, ArrowDown } from "lucide-react";

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function formatAdjustment(price) {
  if (price === 0) return "Included (+₹0)";

  return `${price > 0 ? "+" : "−"}${formatPrice(Math.abs(price))}`;
}

export default function SofaCustomiser({ selection, setSelection }) {

  // Selected options
  const selectedSofa =
    sofas.find((sofa) => sofa.name === selection.model) || sofas[0];

  const selectedFabric =
    fabrics.find((fabric) => fabric.name === selection.fabric) || fabrics[0];

  const selectedConfiguration =
    configurations.find(
      (config) => config.name === selection.configuration
    ) || configurations[0];

  // Dynamic price calculation
  const totalPrice =
    selectedSofa.price +
    selectedFabric.price +
    selectedConfiguration.price;

  // Update selection
  const updateSelection = (key, value) => {
    setSelection((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section
      id="customise"
      className="bg-[#FAF8F2] px-5 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="mb-14 text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#F0EDE5] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#98634E]">
            <span>♧</span>
            Live Specification Studio
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#29251F] sm:text-5xl">
            Tailor Your Living Centerpiece
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#756D64] sm:text-base">
            Select your architecture, tone, upholstery, and seating scale.
            Explore your choices and see the price update instantly.
          </p>

        </div>

        {/* Main Customiser */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT: Sofa Preview */}
          <div className="lg:sticky lg:top-24">

            <div className="rounded-[30px] border border-[#E9E3D9] bg-white p-3 sm:p-4">

              {/* Sofa Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#F0EDE5]">

                <Image
                  key={selectedSofa.id}
                  src={selectedSofa.image}
                  alt={`${selectedSofa.name} sofa`}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition duration-700"
                />

                {/* Model Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-[#FAF8F2] px-4 py-2 text-xs font-semibold text-[#29251F] shadow-sm">
                  {selectedSofa.name} Model
                </span>

                {/* Configuration Badge */}
                <span className="absolute right-4 top-4 rounded-full bg-[#FAF8F2] px-4 py-2 text-xs font-semibold text-[#89563F] shadow-sm">
                  {selection.configuration}
                </span>

                {/* Selected Colour */}
                <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-[#FAF8F2] px-4 py-2 text-xs font-medium text-[#29251F] shadow-sm">
                  <span
                    className="h-3 w-3 rounded-full border border-black/10"
                    style={{
                      backgroundColor: colorOptions[selection.color],
                    }}
                  />
                  {selection.color}
                </span>

                {/* Free Swatches Badge */}
                <span className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-full bg-[#FAF8F2] px-4 py-2 text-xs font-medium text-[#29251F] shadow-sm sm:flex">
                  <ShieldCheck size={14} className="text-[#98634E]" />
                  Free Swatches Available
                </span>

              </div>

              {/* Preview Details */}
              <div className="px-3 pb-3 pt-6 sm:px-4">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#81786F]">
                  Your Selected Sofa
                </p>

                <h3 className="mt-2 font-serif text-3xl text-[#29251F]">
                  {selectedSofa.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#81786F]">
                  {selectedSofa.description}
                </p>

                {/* Price Card */}
                <div className="mt-6 flex w-full flex-col items-start gap-3 rounded-2xl bg-[#F0EDE5] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-full">

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#81786F]">
                      Real-time Estimate
                    </p>

                    <p className="mt-1 font-serif text-3xl font-semibold text-[#89513D]">
                      {formatPrice(totalPrice)}
                    </p>
                  </div>

                  <span className="inline-flex items-center rounded-full bg-[#E5EAD9] px-3 py-2 text-[10px] font-semibold text-[#647052]">
                    ✓ Price Updated
                  </span>

                </div>

              </div>
            </div>

            {/* Workshop Note */}
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#E9E3D9] bg-white px-5 py-4 sm:rounded-full">

              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-[#98634E]"
              />

              <p className="text-xs leading-6 text-[#756D64]">
                Every custom selection is carefully considered to help
                create a sofa that complements your living space.
              </p>

            </div>

          </div>

          {/* RIGHT: Customisation Options */}
          <div className="rounded-[28px] border border-[#E9E3D9] bg-white p-5 sm:p-8 lg:p-8">

            {/* STEP 01: Model */}
            <div className="border-b border-[#E9E3D9] pb-8">

              <div className="mb-5 flex items-center justify-between">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#89513D]">
                  Step 01 / 04
                </span>

                <span className="text-[10px] font-medium text-[#81786F]">
                  Base Architecture
                </span>

              </div>

              <h3 className="mb-5 font-serif text-2xl text-[#29251F]">
                Choose Sofa Model
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                {sofas.map((sofa) => {
                  const active = selection.model === sofa.name;

                  return (
                    <button
                      key={sofa.id}
                      type="button"
                      onClick={() => {
                        setSelection((prev) => ({
                          ...prev,
                          model: sofa.name,
                          color: sofa.colors.includes(prev.color)
                            ? prev.color
                            : sofa.colors[0],
                        }));
                      }}
                      aria-pressed={active}
                      className={`relative rounded-[22px] border p-4 text-left transition ${active
                        ? "border-[#89513D] bg-[#F8F4F0] ring-1 ring-[#89513D]"
                        : "border-[#E9DCD5] hover:border-[#98634E]"
                        }`}
                    >

                      {active && (
                        <Check
                          size={15}
                          className="absolute right-3 top-3 text-[#89513D]"
                        />
                      )}

                      <p className="text-sm font-semibold text-[#29251F]">
                        {sofa.name}
                      </p>

                      <p className="mt-2 text-xs text-[#81786F]">
                        {modelDescriptions[sofa.name]}
                      </p>

                      <p className="mt-3 text-xs font-bold text-[#89513D]">
                        {formatPrice(sofa.price)}
                      </p>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* STEP 02: Colour */}
            <div className="border-b border-[#E9E3D9] py-8">

              <div className="mb-5 flex items-center justify-between">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#89513D]">
                  Step 02 / 04
                </span>

                <span className="text-xs font-medium text-[#89513D]">
                  {selection.color}
                </span>

              </div>

              <h3 className="mb-6 font-serif text-2xl text-[#29251F]">
                Choose Fabric Colour
              </h3>

              <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-5">

                {selectedSofa.colors.map((color) => {
                  const active = selection.color === color;

                  return (
                    <button
                      key={color}
                      type="button"
                      onClick={() => updateSelection("color", color)}
                      aria-label={`Select ${color}`}
                      aria-pressed={active}
                      className="flex flex-col items-center gap-2"
                    >

                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition ${active
                          ? "scale-110 border-[#98634E] ring-2 ring-[#98634E]/20"
                          : "border-transparent hover:scale-110"
                          }`}
                        style={{
                          backgroundColor: colorOptions[color] || "#D8C3A5",
                        }}
                      >

                        {active && (
                          <Check
                            size={18}
                            className={
                              ["Charcoal", "Blue", "Green"].includes(color)
                                ? "text-white"
                                : "text-[#29251F]"
                            }
                          />
                        )}

                      </span>

                      <span className="text-[11px] text-[#756D64]">
                        {color}
                      </span>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* STEP 03: Fabric */}
            <div className="border-b border-[#E9E3D9] py-8">

              <div className="mb-5 flex items-center justify-between">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#89513D]">
                  Step 03 / 04
                </span>

                <span className="text-[10px] font-medium text-[#81786F]">
                  Upholstery
                </span>

              </div>

              <h3 className="mb-5 font-serif text-2xl text-[#29251F]">
                Choose Fabric Type
              </h3>

              <div className="space-y-3">

                {fabrics.map((fabric) => {
                  const active = selection.fabric === fabric.name;

                  return (
                    <button
                      key={fabric.name}
                      type="button"
                      onClick={() => updateSelection("fabric", fabric.name)}
                      aria-pressed={active}
                      className={`flex w-full items-center gap-3 rounded-full border p-4 text-left transition ${active
                        ? "border-[#89513D] bg-[#F8F4F0] ring-1 ring-[#89513D]"
                        : "border-[#E9DCD5] hover:border-[#98634E]"
                        }`}
                    >

                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${active
                          ? "border-[#89513D] bg-[#89513D]"
                          : "border-[#D8C3B9]"
                          }`}
                      >
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        )}
                      </span>

                      <span className="min-w-0 flex-1">

                        <span className="block text-sm font-semibold text-[#29251F]">
                          {fabric.name}
                        </span>

                        <span className="mt-1 block text-xs text-[#81786F]">
                          {fabricDescriptions[fabric.name]}
                        </span>

                      </span>

                      <span className="shrink-0 text-xs font-medium text-[#89513D]">
                        {fabric.price === 0
                          ? "Included"
                          : `+${formatPrice(fabric.price)}`}
                      </span>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* STEP 04: Seating */}
            <div className="pt-8">

              <div className="mb-5 flex items-center justify-between">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#89513D]">
                  Step 04 / 04
                </span>

                <span className="text-[10px] font-medium text-[#81786F]">
                  Spatial Footprint
                </span>

              </div>

              <h3 className="mb-5 font-serif text-2xl text-[#29251F]">
                Choose Seating Configuration
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                {configurations.map((config) => {
                  const active =
                    selection.configuration === config.name;

                  return (
                    <button
                      key={config.name}
                      type="button"
                      onClick={() =>
                        updateSelection("configuration", config.name)
                      }
                      aria-pressed={active}
                      className={`rounded-[22px] border p-4 text-left transition ${active
                        ? "border-[#89513D] bg-[#F8F4F0] ring-1 ring-[#89513D]"
                        : "border-[#E9DCD5] hover:border-[#98634E]"
                        }`}
                    >

                      <p className="text-sm font-semibold text-[#29251F]">
                        {config.name}
                      </p>

                      <p className="mt-2 text-xs text-[#81786F]">
                        {configurationDescriptions[config.name]}
                      </p>

                      <p className="mt-3 text-xs font-semibold text-[#89513D]">
                        {formatAdjustment(config.price)}
                      </p>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* Configuration Summary */}
            <div className="mt-8 rounded-[22px] border border-[#E5D8CF] bg-[#F0EDE5] p-5 sm:p-6">

              <div className="flex flex-wrap items-center justify-between gap-3">

                <p className="text-[10px] font-bold uppercase tracking-widest text-[#81786F]">
                  Your Configuration
                </p>

                <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-[#89513D]">
                  Live Quote
                </span>

              </div>

              <h3 className="mt-4 font-serif text-xl leading-relaxed text-[#29251F] sm:text-2xl">
                The {selectedSofa.name} · {selection.color} ·{" "}
                {selection.fabric} · {selection.configuration}
              </h3>

              <div className="my-5 border-t border-[#E2D8CC]" />

              {/* Price Details */}
              <div className="space-y-3 text-sm">

                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <span className="text-[#756D64]">
                    Base Architecture ({selectedSofa.name})
                  </span>

                  <span className="shrink-0 font-medium text-[#29251F]">
                    {formatPrice(selectedSofa.price)}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-[#756D64]">
                    Fabric Tier ({selectedFabric.name})
                  </span>

                  <span className="shrink-0 font-medium text-[#29251F]">
                    {formatAdjustment(selectedFabric.price)}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-[#756D64]">
                    Seating Configuration ({selectedConfiguration.name})
                  </span>

                  <span className="shrink-0 font-medium text-[#29251F]">
                    {formatAdjustment(selectedConfiguration.price)}
                  </span>
                </div>

              </div>

              <div className="my-5 border-t border-[#E2D8CC]" />

              {/* Final Price */}
              <div className="flex flex-wrap items-center justify-between gap-2">

                <p className="text-sm font-bold text-[#29251F]">
                  Total Calculated Price
                </p>

                <p className="text-xl font-bold text-[#89513D]">
                  {formatPrice(totalPrice)}
                </p>

              </div>

              {/* Enquiry CTA */}
              <Link
                href="#enquiry"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#98634E] px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#80513F]"
              >
                Sync Selection to Enquiry Form
                <ArrowDown size={16} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}