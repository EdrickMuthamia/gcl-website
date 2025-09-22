import React from "react";

const projects = [
  {
    id: 1,
    title: "Commercial Building Development",
    description:
      "Provided essential construction equipment for a major commercial building project, including excavators, cranes, and concrete mixing equipment.",
    imageUrl: "/assets/bulldozer.jpg",
    location: "Downtown Business District",
    duration: "18 months",
    equipment: ["Excavators", "Tower Cranes", "Concrete Mixers"],
  },
  {
    id: 2,
    title: "Highway Infrastructure",
    description:
      "Supplied heavy machinery for a significant highway expansion project, ensuring timely completion and quality construction.",
    imageUrl: "/assets/red-excavator.jpg",
    location: "Metropolitan Highway System",
    duration: "24 months",
    equipment: ["Road Rollers", "Pavers", "Dump Trucks"],
  },
  {
    id: 3,
    title: "Residential Complex",
    description:
      "Supported the construction of a large residential complex with comprehensive equipment solutions.",
    imageUrl: "/assets/wheel-loader.jpeg",
    location: "Suburban Development Area",
    duration: "15 months",
    equipment: ["Bulldozers", "Mobile Cranes", "Concrete Pumps"],
  },
];

export default function Projects() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how our equipment and expertise have contributed to
            successful construction projects across various sectors.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    {project.duration}
                  </time>
                  <span className="text-gray-500">{project.location}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Equipment Used:
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.equipment.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
