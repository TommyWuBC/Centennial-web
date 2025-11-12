'use client';

import { useState } from 'react';
import { loginWithGoogle } from '@/lib/auth';
import { User } from 'firebase/auth';

interface AdminLoginProps {
  onLogin: (user: User) => void;
  onClose?: () => void;
}

export default function AdminLogin({ onLogin, onClose }: AdminLoginProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const user = await loginWithGoogle();
    setLoading(false);

    if (user) {
      onLogin(user);
    } else {
      setError('Google login failed. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Admin Login</h3>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            {loading ? (
              'Signing in...'
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303C33.928 32.329 29.395 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C34.246 6.676 29.379 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c11.046 0 20-8.954 20-20 0-1.341-.138-2.651-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306 14.691l6.571 4.819C14.367 15.108 18.787 12 24 12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C34.246 6.676 29.379 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.311 0 10.122-2.042 13.748-5.373l-6.357-5.375C29.395 36 24 36 24 36c-5.383 0-9.907-3.652-11.476-8.625l-6.534 5.025C9.656 39.663 16.318 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303c-.897 2.658-2.623 4.909-4.886 6.552l.004-.003 6.357 5.375C36.351 40.707 44 36 44 24c0-1.341-.138-2.651-.389-3.917z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </>
            )}
          </button>
          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
}