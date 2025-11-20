'use client';

import Link from 'next/link';

export default function ChallengesPage() {
  return (
    <div className="relative min-h-screen">

      {/* ---------- FAINT BACKGROUND ---------- */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/images/bricks.png')",
        }}
      ></div>

      {/* ---------- WHITE CONTENT CONTAINER ---------- */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-10">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ongoing Challenges at Centennial Olympic Park
            </h1>
            <p className="text-lg text-gray-600">
              Below are some issues that you may be experiencing with the park, based on common consensus.
            </p>
          </div>

          {/* ---------- Canva Slide 1 ---------- */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100 relative">
            <div className="relative w-full" style={{ paddingTop: '130%' }}>
              <iframe
                src="https://www.canva.com/design/DAG5RRYQhqY/_yqBt2GHAZbmgsM7WgUO6Q/view?embed"
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

            {/* Hidden text (for accessibility only) */}
            <div className="sr-only">
              Gun Restriction. Guns are currently legally allowed on Centennial Park property...
            </div>
            <div className="sr-only">
              Nighttime Safety. Not enough lights and limited security...
            </div>
            <div className="sr-only">
              Public Funding. Maintenance costs such as renovations, landscaping, and safety...
            </div>
            <div className="sr-only">
              Limited Large Events. The park no longer hosts large events like Shaky Knees...
            </div>
          </div>

          {/* ---------- Canva Slide 2 ---------- */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100 relative">
            <div className="relative w-full" style={{ paddingTop: '130%' }}>
              <iframe
                src="https://www.canva.com/design/DAG5RYggLoA/Zh-jyZWK_9gXgHTfoDyEjg/view?embed"
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

          {/* Next page button */}
          <div className="text-center mt-12">
            <Link
              href="/survey"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors shadow-lg text-lg"
            >
              Begin a short survey →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
