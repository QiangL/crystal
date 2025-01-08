import Link from 'next/link';
import { crystals } from './data/crystals';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Explore the Magical World of Crystals
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover your perfect crystal and experience the power of energy resonance
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/recommend" 
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Get Recommendations
          </Link>
          <Link 
            href="/crystals" 
            className="bg-white text-purple-500 px-6 py-3 rounded-lg hover:bg-gray-50 transition duration-300 border border-purple-500"
          >
            Browse Crystals
          </Link>
        </div>
      </section>

      {/* Featured Crystals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Crystals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crystals.map((crystal) => (
            <div key={crystal.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <Image 
                  src={crystal.image} 
                  alt={crystal.name}
                  width={500}  // 根据实际需要设置宽度
                  height={300} // 根据实际需要设置高度
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{crystal.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{crystal.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
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
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Crystal Guide</h3>
          <p className="text-gray-600 mb-4">Explore crystal properties, effects, and zodiac compatibility</p>
          <Link 
            href="/crystals" 
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Learn More →
          </Link>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Personalized Recommendations</h3>
          <p className="text-gray-600 mb-4">Get crystal recommendations based on your zodiac sign and mood</p>
          <Link 
            href="/recommend" 
            className="text-purple-500 hover:text-purple-600 font-medium"
          >
            Get Recommendations →
          </Link>
        </div>
      </section>
    </div>
  );
}
