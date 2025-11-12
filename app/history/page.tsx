'use client';

import Link from 'next/link';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Centennial Olympic Park
          </h1>
          <p className="text-lg text-gray-600">
            Discover the history and significance of Atlanta&apos;s iconic park
          </p>
        </div>

        {/* Canva Page 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100">
          <div className="relative w-full" style={{ paddingTop: '130%' }}>
            <iframe
              src="https://www.canva.com/design/DAG4gAREQtQ/IuybfbSTDc70YNiAd5XqnQ/view?embed"
              loading="lazy"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{
                border: 'none',
                backgroundColor: 'white',
                borderRadius: '1rem',
                transform: 'scale(1.03)',
                transformOrigin: 'center',
              }}
            ></iframe>
          </div>
        </div>

        {/* Canva Page 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100">
          <div className="relative w-full" style={{ paddingTop: '130%' }}>
            <iframe
              src="https://www.canva.com/design/DAG4gH6uFXs/0weifFYcBubcsG2u2tqOHA/view?embed"
              loading="lazy"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{
                border: 'none',
                backgroundColor: 'white',
                borderRadius: '1rem',
                transform: 'scale(1.03)',
                transformOrigin: 'center',
              }}
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/ideas"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors shadow-lg text-lg"
          >
            See and Share Ideas →
          </Link>
        </div>
      </div>
    </div>
  );
}
