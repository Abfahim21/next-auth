import Image from "next/image";
import React from "react";
import projectImage from "../../../public/project.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <section className="bg-gray-900">
      <Header />
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt=""
                fill
                src={projectImage}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-800">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-800"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>

              <p className="mt-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
