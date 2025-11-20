'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>

            {/* About the Park */}
            <Link
              href="/history"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/history')
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About the Park
            </Link>
            <Link
              href="/challenges"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/challenges')
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Ongoing Challenges
            </Link>


            {/* NEW Survey Page */}
            <Link
              href="/survey"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/survey')
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Survey
            </Link>

            {/* Ideas */}
            <Link
              href="/ideas"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/ideas')
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Ideas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
