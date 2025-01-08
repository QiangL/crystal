'use client';

import { useState } from 'react';
import { crystals } from '../data/crystals';
import { motion } from 'framer-motion';
import Image from 'next/image'

export default function CrystalsPage() {
  const [selectedCrystal, setSelectedCrystal] = useState(crystals[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCrystals = crystals.filter(crystal =>
    crystal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crystal.properties.some(prop => prop.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Crystal Encyclopedia
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the healing properties and spiritual significance of various crystals
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by crystal name or property..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
            />
            <svg
              className="absolute right-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Crystal List */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Crystal Collection</h2>
              <div className="space-y-2 max-h-[600px] overflow-y-auto custom-scrollbar">
                {filteredCrystals.map((crystal) => (
                  <motion.button
                    key={crystal.id}
                    onClick={() => setSelectedCrystal(crystal)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      selectedCrystal.id === crystal.id
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="font-medium">{crystal.name}</h3>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Crystal Details */}
          <div className="lg:col-span-8">
            <motion.div
              key={selectedCrystal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64 md:h-96">
                <Image 
                  src={selectedCrystal.image} 
                  alt={selectedCrystal.name}
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                  {selectedCrystal.name}
                </h2>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-gray-600 text-lg mb-6">{selectedCrystal.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-purple-800">Properties</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCrystal.properties.map((property) => (
                        <span
                          key={property}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                        >
                          {property}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-blue-800">Effects</h3>
                    <ul className="space-y-2">
                      {selectedCrystal.effects.map((effect) => (
                        <li key={effect} className="flex items-center text-gray-600">
                          <span className="mr-2">✨</span>
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3 text-indigo-800">Compatible Zodiac Signs</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCrystal.zodiacSigns.map((sign) => (
                      <span
                        key={sign}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
} 