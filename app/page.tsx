'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          A Better Centennial Olympic Park
        </h1>
        <h2 className="text-xl font-bold text-gray-800 leading-relaxed mb-6 mt-6 text-center">
        THANK YOU FOR SCANNING THE QR CODE!
        </h2>
        <p className="text-xl text-gray-800 leading-relaxed mb-6 mt-6">
          We are a local student organization with the goal to highlight existing issues of the park and why they need to be addressed. 
          We are looking to gather community feedback and suggestions in hopes of encouraging the Georgia World Congress Center Authority (GWCCA) 
          to implement meaningful improvements to Centennial Olympic park.
        </p>

        <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-2">
          <Image
            src="/images/atlanta-park.jpg"
            alt="Centennial Olympic Park"
            width={1400}
            height={900}
            className="w-full h-auto"
          />
        </div>

        {/* Image credit */}
        <p className="text-xs text-gray-500 mt-1 text-center">
          Image from atlantaparent.com
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Navigate through the pages to learn about the park, share your personal experiences, and read insights submitted by others. Your voice 
        plays a vital role in helping shape a better future for the park.
        Enjoy your visit!
        </p>

        <div className="text-center mt-10">
          <Link
            href="/history"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-10 rounded-lg shadow-lg transition"
          >
            Read about the Park →
          </Link>
        </div>
      </div>
    </div>
  );
}
