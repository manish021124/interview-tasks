"use client";
import React, { useState } from "react";

const SearchFilter = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter items based on the search term
  // Convert both item and serch term to lowercase for case-insensitive matching
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-6 rounded-lg max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-3 h-10 text-black border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-disc list-inside w-full bg-gray-800 p-4 rounded-lg shadow-inner">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="mb-2 text-gray-200 text-lg hover:text-blue-500 transition duration-300">
              {item}
            </li>
          ))
        ) : (
          <li className="mb-2 text-gray-200">No items found.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
