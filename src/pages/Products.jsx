import React, { useState } from "react";
import { equipmentData, categories } from "../data/equipmentData";
import EquipmentCard from "../components/EquipmentCard";
import Modal from "../components/Modal";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const filteredEquipment =
    selectedCategory === "all"
      ? equipmentData
      : equipmentData.filter(
          (equipment) => equipment.category === selectedCategory
        );

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Our Equipment
        </h2>
        
        {/* Equipment Types Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
            Equipment Range
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Wheeled Excavators */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-400 mb-4">Wheeled Excavators</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Efficient, flexible and powerful. Liebherr excavators are true multi-taskers. Designed to deliver the speed and power to get the job done. Innovative technology, high lift capacity, maximum digging forces and low fuel consumption all add up to high productivity and time saving.
              </p>
            </div>
            
            {/* Crawler Excavators */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-400 mb-4">Crawler Excavators</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Tailor-made to offer an extensive range of machines and attachments. The range includes over 400 models featuring operating weights of between 14t and 804t and engine outputs of between 90kW and 400kW. All working attachments are designed and manufactured by Liebherr.
              </p>
            </div>
            
            {/* Crawler Tractors / Bulldozers */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-400 mb-4">Crawler Tractors / Bulldozers</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Power and innovative technology are the hallmarks of Liebherr crawler tractors. Whether for heavy ripping work, moving material or fine-grading, crawler dozers from Liebherr are powerful machines for every application.
              </p>
            </div>
            
            {/* Wheel Loaders */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-400 mb-4">Wheel Loaders</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Powerful wheel loaders of all size categories make a reliable contribution to commercial success. The low fuel consumption reduces operating costs and increases productivity with high handling capacity.
              </p>
            </div>
          </div>
          
          {/* Equipment Guarantees */}
          <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 mb-16">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">All Equipment Key Guarantees</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="text-orange-400 font-bold text-sm">LOW OPERATING COSTS</div>
              <div className="text-orange-400 font-bold text-sm">FUEL EFFICIENT</div>
              <div className="text-orange-400 font-bold text-sm">LOW MAINTENANCE</div>
              <div className="text-orange-400 font-bold text-sm">MAXIMUM UPTIME</div>
              <div className="text-orange-400 font-bold text-sm">INTERNATIONAL SERVICE NETWORK</div>
              <div className="text-orange-400 font-bold text-sm">ADVANCED TECHNOLOGY</div>
              <div className="text-orange-400 font-bold text-sm">IN-HOUSE COMPONENT PRODUCTION</div>
              <div className="text-orange-400 font-bold text-sm">QUALITY STANDARDS</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              selectedCategory === "all"
                ? "bg-orange-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredEquipment.map((equipment) => (
            <EquipmentCard
              key={equipment.id}
              equipment={equipment}
              onClick={(equipment) => setSelectedEquipment(equipment)}
            />
          ))}
        </div>

        {/* Equipment Details Modal */}
        {selectedEquipment && (
          <Modal
            isOpen={!!selectedEquipment}
            onClose={() => setSelectedEquipment(null)}
            equipment={selectedEquipment}
          />
        )}
      </div>
    </div>
  );
}
