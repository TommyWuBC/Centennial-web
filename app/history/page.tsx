'use client';

import Link from 'next/link';

export default function HistoryPage() {
  return (
    <div className="relative min-h-screen">

      {/* ---------- FAINT BACKGROUND IMAGE ---------- */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/images/bricks.png')",
        }}
      ></div>

      {/* ---------- WHITE CONTENT BOX ---------- */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-10">

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Centennial Olympic Park
            </h1>
            <p className="text-lg text-gray-600">
              Discover the park's history and its importance to Atlanta
            </p>
          </div>

          {/* ---------- Canva Page 1 ---------- */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100 relative">
            <div className="relative w-full" style={{ paddingTop: '130%' }}>
              <iframe
                src="https://www.canva.com/design/DAG5RaL8q54/OVUjv3517RAXzIsED-Vnpg/view?embed"
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

            {/* Hidden text for accessibility */}
            <div className="sr-only">
              Formerly a rundown area in downtown Atlanta, the
              Atlanta Committee for Olympic Games planned for development beginning in 1993
              in preparation to host the 1996 Olympics. Development of housing for the incoming
              athletes displaced many residents that lived in the houses around the park.
              Statistics report that 22% of residents in the area were not rehoused after
              the displacement, raising issues of gentrification. Centennial Olympic Park
              opened in July 1996 for the Olympic Games hosting many international events.
              In July 27, 2026 a bomb exploded in the park killing two and injuring over 100.
              The park temporarily closed after this tragedy. Following the bombing, the
              park underwent reconstruction and was redesigned for public use. In 1998,
              the park reopened with more green space and the Fountain of Rings.
            </div>
          </div>

          {/* ---------- Canva Page 2 ---------- */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100 relative">
            <div className="relative w-full" style={{ paddingTop: '130%' }}>
              <iframe
                src="https://www.canva.com/design/DAG5RU4B5rk/wvjAZ1iZdW6GIIb8ymb5Ag/view?embed"
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

            {/* Hidden text for accessibility */}
            <div className="sr-only">
              Centennial Park serves as an entertainment district, hosting concerts and festivals.
              Surrounding attractions including The World of Coca-Cola and the Georgia Aquarium
              draw tourists. Centennial Park is often called “the crown jewel of Atlanta’s downtown.”
              In 2010, the park was expanded and modernized with better landscaping, walking paths,
              and lighting. The 1996 Olympic Legacy Plaza was created to honor the games.
              Centennial Olympic Park continues to symbolize renewal, resilience, and community.
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/challenges"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors shadow-lg text-lg"
            >
              Learn about areas for improvements →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
