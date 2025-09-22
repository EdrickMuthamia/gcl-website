import React from "react";

export default function Expertise() {
  const services = [
    {
      title: "Service & Support Promise",
      description:
        "We provide comprehensive service and support for all our equipment, ensuring your operations run smoothly and efficiently.",
      features: [
        "24/7 Technical Support",
        "Regular Maintenance Services",
        "Rapid Response Time",
        "Expert Technicians",
      ],
    },
    {
      title: "Quality Assurance",
      description:
        "Our commitment to quality is unwavering. We maintain the highest standards in equipment selection and maintenance.",
      features: [
        "Rigorous Equipment Testing",
        "Regular Quality Audits",
        "Industry-Leading Standards",
        "Certified Equipment",
      ],
    },
    {
      title: "Flexibility",
      description:
        "We understand that every project is unique. Our flexible solutions are designed to meet your specific needs.",
      features: [
        "Customized Equipment Solutions",
        "Flexible Rental Terms",
        "Project-Specific Support",
        "Scalable Options",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With years of experience in the construction industry, we provide
            expert solutions and superior service to meet all your equipment
            needs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <ul role="list" className="mt-8 space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
