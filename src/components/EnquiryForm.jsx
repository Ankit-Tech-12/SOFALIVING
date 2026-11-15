"use client";

import { useState } from "react";
import { sofas, fabrics, configurations } from "@/data/sofas";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function EnquiryForm({ selection }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    requirements: "",
    swatchKit: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedSofa = sofas.find(
    (sofa) => sofa.name === selection.model
  );

  const selectedFabric = fabrics.find(
    (fabric) => fabric.name === selection.fabric
  );

  const selectedConfiguration = configurations.find(
    (config) => config.name === selection.configuration
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setSubmitted(true);

    console.log("Enquiry Details:", {
      ...formData,
      selection,
    });
  };

  const inputClass =
    "mt-2 w-full rounded-full border border-[#E9DCD5] bg-[#FAF8F2] px-5 py-4 text-sm text-[#29251F] outline-none transition placeholder:text-[#999087] focus:border-[#98634E]";

  return (
    <section
      id="enquiry"
      className="bg-[#FAF8F2] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#89513D]">
            Personalized Consultation
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#29251F] sm:text-5xl">
            Request a Consultation & Swatch Kit
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#756D64] sm:text-base">
            Our design consultants will prepare a complimentary
            fabric sample box and connect with you to discuss
            your perfect sofa.
          </p>

        </div>

        {/* Form */}
        <div className="mx-auto max-w-3xl rounded-[26px] border border-[#EAE5DD] bg-white p-6 shadow-sm sm:p-10">

          {submitted ? (

            <div className="py-12 text-center">

              <CheckCircle2
                size={55}
                className="mx-auto text-[#89513D]"
              />

              <h3 className="mt-6 font-serif text-3xl text-[#29251F]">
                Thank You!
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#756D64]">
                Your enquiry has been recorded successfully.
                Your selected sofa configuration is ready for review.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-7 rounded-full border border-[#98634E] px-6 py-3 text-sm text-[#89513D] transition hover:bg-[#F8F4F0]"
              >
                Submit Another Enquiry
              </button>

            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              {/* Name and Phone */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label className="text-xs font-semibold text-[#29251F]">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Sen"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#29251F]">
                    Phone Number (+91) *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210 (10 digits)"
                    className={inputClass}
                  />
                </div>

              </div>

              {/* Email */}
              <div className="mt-6">

                <label className="text-xs font-semibold text-[#29251F]">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />

              </div>

              {/* Selected Configuration */}
              <div className="mt-7 rounded-2xl border border-[#E9DCD5] bg-[#F7F4EF] p-5">

                <div className="flex flex-wrap items-center justify-between gap-2">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#89513D]">
                    Synchronized Customiser Data
                  </p>

                  <span className="text-[10px] text-[#81786F]">
                    Auto-populated from Customiser
                  </span>

                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">

                  <div>
                    <label className="text-[10px] text-[#81786F]">
                      Model Selection
                    </label>

                    <div className="mt-2 rounded-full border border-[#E9DCD5] bg-white px-3 py-3 text-xs">
                      {selectedSofa.name}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-[#81786F]">
                      Fabric & Colour
                    </label>

                    <div className="mt-2 rounded-full border border-[#E9DCD5] bg-white px-3 py-3 text-xs">
                      {selectedFabric.name} · {selection.color}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-[#81786F]">
                      Seating Size
                    </label>

                    <div className="mt-2 rounded-full border border-[#E9DCD5] bg-white px-3 py-3 text-xs">
                      {selectedConfiguration.name}
                    </div>
                  </div>

                </div>

              </div>

              {/* City and Requirements */}
              <div className="mt-6 grid gap-6 sm:grid-cols-2">

                <div>
                  <label className="text-xs font-semibold text-[#29251F]">
                    Delivery City & Pincode *
                  </label>

                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai, 400001"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#29251F]">
                    Special Dimensions or Room Requirements
                  </label>

                  <textarea
                    name="requirements"
                    rows={1}
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="e.g. Maximum length 96 inches..."
                    className="mt-2 min-h-[110px] resize-none w-full resize-y rounded-2xl border border-[#E9DCD5] bg-[#FAF8F2] px-5 py-4 text-sm outline-none transition placeholder:text-[#999087] focus:border-[#98634E]"
                  />
                </div>

              </div>

              {/* Swatch Checkbox */}
              <label className="mt-7 flex cursor-pointer items-start gap-3">

                <input
                  type="checkbox"
                  name="swatchKit"
                  checked={formData.swatchKit}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-[#89513D]"
                />

                <span className="text-xs leading-6 text-[#756D64]">
                  Send a complimentary physical fabric swatch box
                  (including the chosen fabric and 3 curated alternatives)
                  to my delivery address at zero cost.
                </span>

              </label>

              {/* Submit */}
              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#92533D] px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#78422F]"
              >
                Submit Bespoke Enquiry
                <ArrowRight size={17} />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2">

                <ShieldCheck size={14} className="text-[#89513D]" />

                <p className="text-center text-[10px] tracking-wide text-[#81786F]">
                  Protected by end-to-end craft confidentiality.
                  No marketing spam.
                </p>

              </div>

            </form>

          )}

        </div>

      </div>
    </section>
  );
}