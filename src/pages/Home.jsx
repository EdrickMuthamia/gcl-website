import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 sm:text-7xl mb-6">
              GCL Construction Equipment
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-800 mx-auto mb-8 rounded-full"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              For more than 10 years, GCL Construction Equipment Ltd has been one of the leading rental services of construction equipment in the construction industry. We supply specialized machinery including pipelayers, welding tractors, bending machines, dozers, rollers, trucks and excavators with global shipping capabilities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/products"
                className="rounded-md bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-orange-700 hover:to-orange-800 hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                View Our Equipment
              </Link>
              <a
                href="tel:+254733977750"
                className="rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500 hover:scale-105 transition-all duration-300"
              >
                Call Now: +254 733 977 750
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <Link
                to="/contact"
                className="text-base font-semibold leading-6 text-orange-600 hover:text-orange-500 transition-colors duration-300"
              >
                Get Free Quote <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              GCL Construction Equipment Ltd supplies a wide range of specialized construction machinery including pipelayers, welding tractors, bending machines, dozers, rollers, trucks and excavators. As a manufacturer, we provide high quality pipeline equipment under our own label. Our head office and equipment yard is located along Uhuru Highway in Nairobi, enabling us to ship equipment worldwide quickly and efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              At GCL Construction Equipment Ltd we pride ourselves on our ability to provide top of the range earthmoving, mining, construction and agriculture equipment services within Kenya and beyond. Our entrenched relationships with major earthmoving brands and competent, highly skilled service technicians puts us in the prime position to offer the very best service and support. Our vast experience in earthmoving and open cast mining affords us the utmost confidence to support any operation in the toughest of Kenyan climates and territories.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  Accountability
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We are involved, responsible and dedicated to our organization, its investors and our customers.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  Integrity
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We are committed to being honorable and disciplined in all our dealings.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  Innovation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We are determined to find the best available solutions to solve problems quickly and effectively.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  Courage
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We are bold, always striving to believe in bigger and better achievements.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  Support
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We are in the industry of service and know that our primary focus on offering the very best levels of support is what sets us apart from our competitors.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  Leadership
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We endeavour to work smartly, always finding ways to improve our service offering, to do more – faster.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  Partnership
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We try to find common ground in all our interactions, as we all like to work with people that we can relate to.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  Commitment
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    We are deadline-driven to achieve maximum productivity on all levels.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-4">"GCL provided excellent equipment for our highway project. Professional service and reliable machinery."</p>
              <p className="text-white font-semibold">- Kenya National Highways Authority</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-4">"Outstanding equipment quality and 24/7 support. GCL helped us complete our mining project ahead of schedule."</p>
              <p className="text-white font-semibold">- East African Portland Cement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-4">"Reliable equipment and exceptional service. GCL has been our trusted partner for over 5 years."</p>
              <p className="text-white font-semibold">- China Road & Bridge Corporation</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-white/80 font-semibold">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-white/80 font-semibold">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-white/80 font-semibold">Support Available</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-white/80 font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
