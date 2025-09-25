import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal({ isOpen, onClose, equipment }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 px-6 pb-6 pt-6 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-8 border border-gray-200">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-semibold leading-6 text-gray-900"
                    >
                      {equipment.name}
                    </Dialog.Title>
                    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <img
                          src={equipment.imageUrl}
                          alt={equipment.name}
                          className="w-full h-80 object-cover rounded-xl shadow-lg border border-gray-200"
                        />
                      </div>
                      <div className="sm:col-span-6">
                        <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                          <h4 className="text-lg font-bold text-orange-900 mb-2">
                            Description
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {equipment.description}
                          </p>
                        </div>
                      </div>
                      <div className="sm:col-span-6">
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">
                            Specifications
                          </h4>
                          <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                          {Object.entries(equipment.specifications).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="bg-white rounded-lg p-3 shadow-sm border border-gray-100"
                              >
                                <dt className="text-sm font-semibold text-orange-600 capitalize">
                                  {key}
                                </dt>
                                <dd className="mt-1 text-base font-medium text-gray-900">
                                  {value}
                                </dd>
                              </div>
                            )
                          )}
                          </dl>
                        </div>
                      </div>
                      {equipment.features && (
                        <div className="sm:col-span-6">
                          <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                            <h4 className="text-lg font-bold text-orange-900 mb-3">
                              Key Features
                            </h4>
                            <ul className="space-y-3">
                              {equipment.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                  <svg className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="font-medium">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-8 sm:mt-6 sm:flex sm:flex-row-reverse gap-4 border-t border-gray-200 pt-6">
                  <a
                    href="tel:+254733977750"
                    className="inline-flex w-full justify-center items-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-3 text-base font-bold text-white shadow-lg hover:from-orange-700 hover:to-orange-800 hover:scale-105 transition-all duration-300 sm:w-auto"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call for Rental
                  </a>
                  <a
                    href="/contact"
                    className="mt-3 inline-flex w-full justify-center items-center rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 text-base font-bold text-white shadow-lg hover:from-green-700 hover:to-green-800 hover:scale-105 transition-all duration-300 sm:mt-0 sm:w-auto"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Get Quote
                  </a>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-xl bg-gray-100 px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-200 hover:scale-105 transition-all duration-300 sm:mt-0 sm:w-auto border border-gray-300"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  equipment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    specifications: PropTypes.object.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
