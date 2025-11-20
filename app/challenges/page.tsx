'use client';

import Link from 'next/link';

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ongoing Challenges at Centennial Olympic Park
          </h1>
          <p className="text-lg text-gray-600">
            Below are some issues that you may be experiencing with the park, based on common consensus.
          </p>
        </div>

        {/* Canva Slide 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100">
          <div className="relative w-full" style={{ paddingTop: '130%' }}>
            <iframe
              src="https://www.canva.com/design/DAG5Qm8cDXY/5rZoYXqe69zuZgwY4HGw3Q/view?embed"
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
          {/* Hidden text for accessibility / text-to-speech */}
          <div className="sr-only">
          Gun Restriction.
          Guns are currently legally allows on Centennial Park property which creates
          an unsafe environment for everyone present. Lawmakers are pushing for the House Bill 472 which
          calls for gun-free events at the park. Without gun restrictions many Atlantans may be hesitant
          about spending time at the park.
        </div>

        {/* Hidden text for accessibility / text-to-speech */}
        <div className="sr-only">
          Nighttime Safety.
          Not enough lights around the park and lack of security during the night.
          The park is known for many homeless people present especially at night which creates an unsafe environment
          especially for female travelers.
        </div>
        
        {/* Hidden text for accessibility / text-to-speech */}
        <div className="sr-only">
          Public Funding.
          Maintaining the park such as renovations, landscaping, public safety, and overall maintenance
           is expensive and funding may serve as a concern.
        </div>
        {/* Hidden text for accessibility / text-to-speech */}
        <div className="sr-only">
           Limited Large Events.
           The park no longer plans on hosting large events including music festivals like Shaky Knees due to damage 
           on the grass. Attempts at hosting large gatherings are often shut down preventing the formation of community connections that the park was 
           once created and intended for during the Olympics.
           The majority of visitors to the park are attending the many events that the park once hosted, 
           without these events the popularity of Centennial will decrease as will the sense of community.
          </div>
        </div>

        {/* Canva Slide 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100">
          <div className="relative w-full" style={{ paddingTop: '130%' }}>
            <iframe
              src="https://www.canva.com/design/DAG5QnYIMlQ/hzXiKotuFjQ4-UydupyuBQ/view?embed"
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
  );
}
