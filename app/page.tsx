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

        <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src="/images/atlanta-park.jpg"   // <-- You'll add this file, see Step 4
            alt="Centennial Olympic Park"
            width={1400}
            height={900}
            className="w-full h-auto"
          />
        </div>

        <p className="text-xl text-gray-800 leading-relaxed mb-6">
          Centennial Olympic Park is one of Atlanta’s most iconic public spaces, 
          but it also faces challenges that impact how visitors experience it. 
          Our goal is to highlight existing issues and gather community feedback 
          in hopes of encouraging the Georgia World Congress Center Authority (GWCCA) 
          to implement meaningful improvements.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Through this project, you can explore the park’s history, share your 
          personal experiences, and read insights submitted by others. Your voice 
          plays a vital role in helping shape a better future for the park.
        </p>

        <div className="text-center mt-10">
          <Link
            href="/survey"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-10 rounded-lg shadow-lg transition"
          >
            Read Park History →
          </Link>
        </div>
      </div>
    </div>
  );
}
