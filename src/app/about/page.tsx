import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/about.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function page() {
  return (
    <section className="bg-gray-900">
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              fill
              alt="About Image"
              src={aboutImage}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Grow your audience
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
