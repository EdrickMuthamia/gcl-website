import React from "react";
import { useRef, useEffect } from "react";

function useRevealOnScroll() {
  const ref = useRef([]);
  // Remove reveal-visible when not intersecting, so animation can replay on rescroll
  useEffect(() => {
    const elements = ref.current;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          } else {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const elements = ref.current;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const revealRefs = useRevealOnScroll();

  const sections = [
    {
      key: "about",
      title: (
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mb-10 drop-shadow-lg">
          About GCL Construction Equipment Ltd
        </h1>
      ),
      content: (
        <div className="prose prose-lg max-w-none text-black dark:text-gray-300 space-y-6">
          <p>
            For more than 10 years GCL Construction Equipment Ltd has been one
            of the leading rental services of construction equipment in the
            construction industry.
          </p>
          <p>
            GCL Construction Equipment LTD supplies a wide range of specialized
            construction machinery for pipeline construction, maintenance, and
            repair.
          </p>
          <p>
            As a manufacturer, GCL Construction Equipment LTD provides high
            quality pipeline equipment under its own label.
          </p>
          <p>
            Our business outline consists of a program of heavy-duty earthmoving
            equipment.
          </p>
          <p>
            GCL Construction Equipment LTD has a global presence in rental fleet
            with key earthmoving brands.
          </p>
          <p>
            Our dynamic rental fleet includes equipment from several
            manufacturers, with opportunities for sale and rental of related
            equipment such as mandrels, pipe facing machines, dozers, rollers,
            trucks, and excavators.
          </p>
          <p>
            Our head office and equipment yard is located along Mombasa road,
            Nairobi, enabling us to ship equipment worldwide quickly and
            efficiently.
          </p>
          <div className="bg-gradient-to-r from-orange-500/30 to-purple-700/30 backdrop-blur-md rounded-xl p-6 mt-6 border border-orange-400/40 shadow-lg">
            <h4 className="text-lg font-bold text-orange-300 mb-4">
              Our Head Office
            </h4>
            <p className="text-gray-200">
              Highway Mall, Uhuru highway (Opp. Nyayo national stadium), Nairobi
              <br />
              <span className="text-orange-300">Email:</span>{" "}
              globeconceptske@gmail.com
              <br />
              <span className="text-orange-300">Phone:</span> +254 (0) 733 977
              750
              <br />
              <span className="text-orange-300">Website:</span>{" "}
              www.essequipmentkenya.com
            </p>
          </div>
          <p>
            To meet worldwide customers' demands locally, GCL Construction
            Equipment LTD has established an extensive network of regional
            companies, agents, and partners.
          </p>
        </div>
      ),
    },
    {
      key: "rental",
      title: (
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-8 drop-shadow-md">
          Rental and Sales
        </h2>
      ),
      content: (
        <div className="prose prose-lg max-w-none text-black dark:text-gray-300 space-y-6">
          <p>
            GCL Construction Equipment LTD focuses on sales and rental of high
            quality new and used equipment for roads, dams, pipeline, and
            housing construction projects.
          </p>
          <p>
            Our rental fleet is amongst the largest and most modern in the
            country, supplied in first class condition and compliant with the
            latest HSE-standards.
          </p>
        </div>
      ),
    },
    {
      key: "vision",
      title: (
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-500 mb-8 drop-shadow-md">
          Our Vision
        </h2>
      ),
      content: (
        <div className="prose prose-lg max-w-none text-black dark:text-gray-300 space-y-6">
          <p>
            We pride ourselves on providing top-tier earthmoving, mining,
            construction, and agriculture equipment services within Kenya and
            beyond.
          </p>
          <p>
            Our relationships with major brands and skilled technicians position
            us to offer the best service and support.
          </p>
          <p>
            Our experience in earthmoving and open cast mining enables us to
            support any operation in the toughest climates.
          </p>
          <p>
            Our facilities are professionally staffed and well-equipped to
            support you when and where it matters.
          </p>
          <div className="bg-gradient-to-r from-orange-500/30 to-purple-700/30 backdrop-blur-md rounded-xl p-6 mt-8 border border-orange-400/40 shadow-lg">
            <p className="text-gray-200 italic">
              Signed
              <br />
              <strong className="text-orange-300">Eric Mwenda</strong>
              <br />
              Director GCL Construction Equipment Ltd
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "expertise",
      title: (
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 mb-8 drop-shadow-md">
          Our Expertise
        </h2>
      ),
      content: (
        <div className="prose prose-lg max-w-none text-black dark:text-gray-300 space-y-6">
          <p>
            GCL Construction Equipment Ltd is more than a supplier. We offer
            third party equipment inspection, service, reviews, flexible rental
            terms, and attractive financing and transportation opportunities.
          </p>
          <p>
            We assist in sourcing alternatives and provide advisory roles in
            establishing equipment needs, offering a wide range of products and
            services for maximum project efficiency and productivity.
          </p>
        </div>
      ),
    },
    {
      key: "quality",
      title: (
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 mb-8 drop-shadow-md">
          Quality, Flexibility, Reliability
        </h2>
      ),
      content: (
        <div className="prose prose-lg max-w-none text-black dark:text-gray-300 space-y-6">
          <p>
            Delivering on time requires flexibility and timely information.
            Communication and customer focus are key.
          </p>
          <p>
            Equipment must meet project requirements, be well maintained, easy
            to operate, and comply with local standards. This is our Quality.
          </p>
          <p>
            We are clear with expectations in equipment, service, and finance.
            Meeting requirements is our Reliability.
          </p>
          <p>
            For over 30 years, GCL Construction Equipment Ltd has established
            its name and reputation in the global market for pipeline equipment.
          </p>
          <p>
            We continuously improve to remain a flexible, customer-focused
            partner you can build on and rely on!
          </p>
        </div>
      ),
    },
    {
      key: "summary",
      title: (
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mb-8 drop-shadow-md">
          Summary
        </h2>
      ),
      content: (
        <div className="prose prose-lg max-w-none text-black dark:text-gray-300 space-y-6">
          <p>
            By offering a wide range of products and services, worldwide
            support, engineering, and technical expertise, GCL Construction
            Equipment provides comfort of a single supply source.
          </p>
          <p>
            We take pride in our team, who continually demonstrate our core
            values: Quality - Flexibility - Reliability. Our commitment is to
            provide first class service, on time and on budget.
          </p>
          <div className="bg-gradient-to-r from-gray-700/60 to-gray-900/80 backdrop-blur-md rounded-xl p-6 mt-6 border border-purple-400/40 shadow-lg">
            <p className="text-gray-200 font-medium">
              We will not compromise our values, ethics, integrity, passion or
              professionalism in our dealings with all stakeholders.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "values",
      title: null,
      content: (
        <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 rounded-2xl p-10 text-center shadow-2xl border border-orange-400/40 animate-pulse">
          <h3 className="text-3xl font-extrabold text-white mb-4 tracking-widest drop-shadow-lg">
            Our Key Values
          </h3>
          <p className="text-white text-xl font-semibold tracking-wide">
            STRENGTH, PERFORMANCE & RELIABILITY UNDER ALL CIRCUMSTANCES.
            <br />
            <span className="text-orange-200">READY FOR FUTURE CHALLENGES</span>
          </p>
        </div>
      ),
      wrapperClass: "mx-auto max-w-4xl mt-20",
    },
  ];

  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {sections.map((section, idx) => (
          <div
            key={section.key}
            ref={(el) => (revealRefs.current[idx] = el)}
            className={`opacity-0 translate-y-10 transition-all duration-700 ease-out ${
              section.wrapperClass ||
              "mx-auto max-w-4xl mt-20 glassmorphism-card"
            }`}
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            {section.title}
            {section.content}
          </div>
        ))}
        <style>{`
          .glassmorphism-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            border-radius: 1.5rem;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.08);
            padding: 2.5rem 2rem;
          }
          .reveal-visible {
            opacity: 1 !important;
            transform: none !important;
          }
        `}</style>
      </div>
    </div>
  );
}