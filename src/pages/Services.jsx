import React from "react";

export default function Services() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Services & Support
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We guarantee you 24/7 support with a maximum delivery promise of top-line efficiency. 
            We run local in-house training programs and yearly global upskilling programs.
          </p>
        </div>

        {/* Service Guarantees */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <dt className="text-lg font-semibold leading-7 text-orange-900 dark:text-orange-400">
                Strong OEM Partnerships
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Direct relationships with major equipment manufacturers ensuring authentic parts and service.
                </p>
              </dd>
            </div>
            <div className="flex flex-col bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <dt className="text-lg font-semibold leading-7 text-orange-900 dark:text-orange-400">
                Real-Time Equipment Monitoring
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Advanced monitoring systems to track equipment performance and prevent downtime.
                </p>
              </dd>
            </div>
            <div className="flex flex-col bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <dt className="text-lg font-semibold leading-7 text-orange-900 dark:text-orange-400">
                Local Upskilling Programmes
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Comprehensive training programs to ensure optimal equipment operation and safety.
                </p>
              </dd>
            </div>
            <div className="flex flex-col bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <dt className="text-lg font-semibold leading-7 text-orange-900 dark:text-orange-400">
                Operator Supervision
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Expert supervision and guidance to maximize equipment efficiency and safety.
                </p>
              </dd>
            </div>
            <div className="flex flex-col bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <dt className="text-lg font-semibold leading-7 text-orange-900 dark:text-orange-400">
                Skilled On-Site Support
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Professional technicians available on-site for immediate technical support.
                </p>
              </dd>
            </div>
            <div className="flex flex-col bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <dt className="text-lg font-semibold leading-7 text-orange-900 dark:text-orange-400">
                Immediate Response
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  24/7 emergency response team ready to address any equipment issues promptly.
                </p>
              </dd>
            </div>
            <div className="flex flex-col bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <dt className="text-lg font-semibold leading-7 text-orange-900 dark:text-orange-400">
                On-Site Spares Availability
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Comprehensive spare parts inventory maintained on-site for quick repairs.
                </p>
              </dd>
            </div>
            <div className="flex flex-col bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <dt className="text-lg font-semibold leading-7 text-orange-900 dark:text-orange-400">
                Streamlined Logistics
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Efficient logistics network ensuring timely equipment delivery worldwide.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Equipment Guarantees */}
        <div className="mx-auto mt-24 max-w-2xl lg:text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Equipment Guarantees
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            All our equipment comes with these key guarantees for maximum performance and reliability.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Performance Guarantees</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Low Operating Costs</span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Fuel Efficient</span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Low Maintenance</span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Maximum Uptime</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technology & Support</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">International Service Network</span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Advanced Technology</span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">In-House Component Production</span>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Quality, Flexibility, Reliability</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}