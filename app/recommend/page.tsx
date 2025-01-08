'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { crystals } from '../data/crystals';
import type { Crystal, Mood, ZodiacSign, Intention } from '../types/crystal';
import Image from 'next/image';

export default function RecommendPage() {
  const [zodiacSign, setZodiacSign] = useState<ZodiacSign | ''>('');
  const [mood, setMood] = useState<Mood | ''>('');
  const [intention, setIntention] = useState<Intention | ''>('');
  const [recommendedCrystals, setRecommendedCrystals] = useState<Crystal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const zodiacSigns: ZodiacSign[] = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const moods: { value: Mood; label: string; icon: string }[] = [
    { value: 'happy', label: 'Happy', icon: '😊' },
    { value: 'sad', label: 'Sad', icon: '😢' },
    { value: 'anxious', label: 'Anxious', icon: '😰' },
    { value: 'peaceful', label: 'Peaceful', icon: '😌' },
    { value: 'energetic', label: 'Energetic', icon: '⚡' },
    { value: 'tired', label: 'Tired', icon: '😴' }
  ];

  const intentions: { value: Intention; label: string; icon: string }[] = [
    { value: 'love', label: 'Love & Relationships', icon: '❤️' },
    { value: 'career', label: 'Career & Success', icon: '💼' },
    { value: 'health', label: 'Health & Wellness', icon: '🌿' },
    { value: 'wisdom', label: 'Wisdom & Knowledge', icon: '📚' },
    { value: 'protection', label: 'Protection & Safety', icon: '🛡️' },
    { value: 'abundance', label: 'Abundance & Prosperity', icon: '✨' },
    { value: 'spirituality', label: 'Spiritual Growth', icon: '🕊️' },
    { value: 'creativity', label: 'Creativity & Inspiration', icon: '🎨' }
  ];

  const getRecommendations = () => {
    if (!zodiacSign || !mood || !intention) return;
    
    setIsLoading(true);
    setShowResults(false);

    // Enhanced recommendation algorithm
    const recommendations = crystals.filter(crystal => {
      const matchesZodiac = crystal.zodiacSigns.includes(zodiacSign) || crystal.zodiacSigns.includes('All');
      
      // Mood-based filtering logic
      const moodMatches: Record<Mood, string[]> = {
        happy: ['Love', 'Peace', 'Divine Connection'],
        sad: ['Healing', 'Love', 'Peace'],
        anxious: ['Protection', 'Purification', 'Peace'],
        peaceful: ['Peace', 'Divine Connection', 'Healing'],
        energetic: ['Amplification', 'Clarity', 'Protection'],
        tired: ['Healing', 'Amplification', 'Energy']
      };

      // Intention-based filtering logic
      const intentionMatches: Record<Intention, string[]> = {
        love: ['Love', 'Peace', 'Healing'],
        career: ['Clarity', 'Amplification', 'Protection'],
        health: ['Healing', 'Purification', 'Energy'],
        wisdom: ['Clarity', 'Divine Connection', 'Amplification'],
        protection: ['Protection', 'Purification', 'Peace'],
        abundance: ['Amplification', 'Energy', 'Divine Connection'],
        spirituality: ['Divine Connection', 'Peace', 'Purification'],
        creativity: ['Clarity', 'Energy', 'Divine Connection']
      };

      const hasMatchingMoodProperty = crystal.properties.some(prop => 
        moodMatches[mood].includes(prop)
      );

      const hasMatchingIntentionProperty = crystal.properties.some(prop => 
        intentionMatches[intention].includes(prop)
      );

      return matchesZodiac && (hasMatchingMoodProperty || hasMatchingIntentionProperty);
    });

    // Simulate API delay
    setTimeout(() => {
      setRecommendedCrystals(recommendations);
      setIsLoading(false);
      setShowResults(true);
      // 滚动到结果区域
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find Your Perfect Crystal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let us guide you to the crystals that resonate with your zodiac sign, current mood, and intentions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Selection Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Zodiac Sign Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Zodiac Sign
              </label>
              <select
                value={zodiacSign}
                onChange={(e) => setZodiacSign(e.target.value as ZodiacSign)}
                className="w-full p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select your sign</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign} value={sign}>
                    {sign}
                  </option>
                ))}
              </select>
            </div>

            {/* Mood Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Mood
              </label>
              <div className="grid grid-cols-3 gap-2">
                {moods.map(({ value, label, icon }) => (
                  <button
                    key={value}
                    onClick={() => setMood(value)}
                    className={`p-2 rounded-xl border transition-all duration-300 ${
                      mood === value
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-200'
                    }`}
                  >
                    <div className="text-xl mb-1">{icon}</div>
                    <div className="text-xs">{label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Intention Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Intention
              </label>
              <div className="grid grid-cols-2 gap-2">
                {intentions.map(({ value, label, icon }) => (
                  <button
                    key={value}
                    onClick={() => setIntention(value)}
                    className={`p-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                      intention === value
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-200'
                    }`}
                  >
                    <span className="text-xl">{icon}</span>
                    <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={getRecommendations}
              disabled={!zodiacSign || !mood || !intention || isLoading}
              className="w-full bg-purple-500 text-white py-4 rounded-xl hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300 relative"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Finding your perfect crystal...
                </span>
              ) : (
                'Get Crystal Recommendations'
              )}
            </button>
          </div>

          {/* Results Section */}
          <div id="results" className={`space-y-6 ${showResults ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            {recommendedCrystals.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Recommended Crystals for You
                </h2>
                <div className="grid gap-6">
                  {recommendedCrystals.map((crystal) => (
                    <motion.div
                      key={crystal.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex">
                        <div className="w-1/3">
                          <div className="relative h-full">
                            <Image 
                              src={crystal.image} 
                              alt={crystal.name}
                              width={500}  // 根据实际需要设置宽度
                              height={300} // 根据实际需要设置高度
                            />
                          </div>
                        </div>
                        <div className="w-2/3 p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {crystal.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{crystal.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {crystal.properties.map((property) => (
                              <span
                                key={property}
                                className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm"
                              >
                                {property}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 