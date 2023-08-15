import React from "react";
import Header from "../components/Header";

export default function products() {
  return (
    <div>
      <Header />
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://wallpaperaccess.com/full/1743472.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <span class="mt-1 text-lg font-medium text-gray-900">$35</span>
              <button className=" float-right bg-red-500 rounded-md text-white p-1">
                add to cart
              </button>
            </a>

            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://wallpaperaccess.com/full/1743472.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <span class="mt-1 text-lg font-medium text-gray-900">$35</span>
              <button className=" float-right bg-red-500 rounded-md text-white p-1">
                add to cart
              </button>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://wallpaperaccess.com/full/1743472.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <span class="mt-1 text-lg font-medium text-gray-900">$35</span>
              <button className=" float-right bg-red-500 rounded-md text-white p-1">
                add to cart
              </button>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://wallpaperaccess.com/full/1743472.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <span class="mt-1 text-lg font-medium text-gray-900">$35</span>
              <button className=" float-right bg-red-500 rounded-md text-white p-1">
                add to cart
              </button>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://wallpaperaccess.com/full/1743472.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <span class="mt-1 text-lg font-medium text-gray-900">$35</span>
              <button className=" float-right bg-red-500 rounded-md text-white p-1">
                add to cart
              </button>
            </a>

            {/* <!-- More products... --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
