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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Equipment
        </h2>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
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
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
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
