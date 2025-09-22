import React from "react";
import PropTypes from "prop-types";

export default function EquipmentCard({ equipment, onClick }) {
  return (
    <div
      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-200 hover:border-blue-400 hover:from-blue-50 hover:to-white"
      onClick={() => onClick(equipment)}
    >
      <div className="aspect-h-3 aspect-w-4 bg-gradient-to-br from-gray-100 to-gray-200 sm:aspect-none sm:h-56 relative overflow-hidden">
        <img
          src={equipment.imageUrl}
          alt={equipment.name}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
          HOT DEAL
        </div>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
          From KSh 5,000/day
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-3 p-6">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
          <span aria-hidden="true" className="absolute inset-0" />
          {equipment.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {equipment.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-green-600">Available Now</span>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-semibold">Free Delivery</span>
          </div>
          <button
            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 group-hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              onClick(equipment);
            }}
          >
            View Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

EquipmentCard.propTypes = {
  equipment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
