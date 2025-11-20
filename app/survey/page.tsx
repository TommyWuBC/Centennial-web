'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const formId = process.env.NEXT_PUBLIC_GOOGLE_FORM_ID ?? '';
  const handleContinue = () => router.push('/ideas');

  return (
    <div className="relative min-h-screen">

      {/* ---- FAINT BACKGROUND IMAGE ---- */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/images/bricks.png')",
        }}
      ></div>

      {/* ---- MAIN CONTENT ---- */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* White readable container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Centennial Olympic Park Community Feedback
            </h1>
            <p className="text-lg text-gray-700">
              To help us improve the park, please share your experiences through this short anonymous survey.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            {formId ? (
              <iframe
                src={`https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true`}
                width="100%"
                height="900"
                frameBorder="0"
                className="w-full"
                title="Centennial Olympic Park Survey"
              >
                Loading…
              </iframe>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  Please configure your Google Form ID in the environment variables.
                </p>
                <p className="text-sm text-gray-500">
                  Add NEXT_PUBLIC_GOOGLE_FORM_ID to your .env.local file
                </p>
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={handleContinue}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
            >
              See and share ideas for improving the park →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
