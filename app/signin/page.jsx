import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <section class="py-24 lg:py-28 bg-black overflow-hidden">
      <div class="container px-4 mx-auto">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-heading mb-4 text-6xl text-white tracking-tighter">
            Create a free account
          </h2>
          <p class="mb-16 text-xl text-white tracking-tight">
            Use and re-use tons of responsive sections too a main create the
            perfect layout. Sections are ready.
          </p>
          <form class="flex flex-wrap -m-3" action="#">
            <div class="w-full md:w-1/2 p-3">
              <label class="block">
                <input
                  class="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                  id="signUpInput1-1"
                  type="text"
                  placeholder="First Name"
                />
              </label>
            </div>
            <div class="w-full md:w-1/2 p-3">
              <label class="block">
                <input
                  class="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                  id="signUpInput1-2"
                  type="email"
                  placeholder="Email Address"
                />
              </label>
            </div>
            <div class="w-full md:w-1/2 p-3">
              <label class="block">
                <input
                  class="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                  id="signUpInput1-3"
                  type="password"
                  placeholder="Password"
                />
              </label>
            </div>
            <div class="w-full md:w-1/2 p-3">
              <label class="block">
                <input
                  class="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                  id="signUpInput1-4"
                  type="password"
                  placeholder="Confirm Password"
                />
              </label>
            </div>
            <div class="w-full p-3">
              <div class="relative flex p-px bg-transparent overflow-hidden rounded-lg">
                <div class="inline-block">
                  <input
                    class="form-input opacity-0 absolute top-px z-10 h-5 w-5"
                    id="signUpCheckbox1-1"
                    type="checkbox"
                    name="confirm"
                    value="yes"
                  />
                  <div class="mr-2.5 text-transparent border border-gray-500 w-5 h-5 relative top-px flex justify-center items-center rounded">
                    <svg
                      class="w-2.5 h-2.5"
                      width="9"
                      height="7"
                      viewbox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.604248 3.77081L2.68758 5.85415L7.89591 0.645813"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-3">
              <a
                class="inline-block mb-7 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                href="#"
              >
                Create Free Account
              </a>
              <span class="font-medium text-white tracking-tight">
                <span>Already have an account?</span>
                <Link href="/login" className=" bg-red-500">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
