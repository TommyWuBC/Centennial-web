'use client';

import { useState, useEffect } from 'react';
import { Idea, getIdeas, createIdea, upvoteIdea, deleteIdea, hasVoted, markAsVoted, generateVoterId } from '@/lib/utils';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { isAdmin, logout } from '@/lib/auth';
import DeleteModal from '@/components/DeleteModal';
import AdminLogin from '@/components/AdminLogin';

export default function IdeasPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [sortBy, setSortBy] = useState<'top' | 'newest'>('newest');
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [deleteModal, setDeleteModal] = useState<{ show: boolean; ideaId: string | null }>({
    show: false,
    ideaId: null,
  });
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    loadIdeas();
  }, [sortBy]);

  const loadIdeas = async () => {
    setLoading(true);
    const fetchedIdeas = await getIdeas(sortBy);
    setIdeas(fetchedIdeas);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim().length === 0 || content.trim().length === 0) {
      alert('Please fill in both title and content');
      return;
    }

    if (title.length > 80) {
      alert('Title must be 80 characters or less');
      return;
    }

    if (content.length > 300) {
      alert('Content must be 300 characters or less');
      return;
    }

    setSubmitting(true);
    const ideaId = await createIdea(title.trim(), content.trim());
    
    if (ideaId) {
      setTitle('');
      setContent('');
      setShowForm(false);
      await loadIdeas();
    } else {
      alert('Failed to create idea. Please try again.');
    }
    setSubmitting(false);
  };

  const handleUpvote = async (ideaId: string) => {
    if (hasVoted(ideaId)) {
      return; // Already voted
    }

    const voterId = generateVoterId();
    const success = await upvoteIdea(ideaId, voterId);
    
    if (success) {
      markAsVoted(ideaId);
      await loadIdeas();
    }
  };

  const handleDelete = async () => {
    if (!deleteModal.ideaId) return;
    
    const success = await deleteIdea(deleteModal.ideaId);
    if (success) {
      setDeleteModal({ show: false, ideaId: null });
      await loadIdeas();
    } else {
      alert('Failed to delete idea. Please try again.');
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Unknown date';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
            Community Ideas
          </h1>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('newest')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  sortBy === 'newest'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Newest
              </button>
              <button
                onClick={() => setSortBy('top')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  sortBy === 'top'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Top
              </button>
            </div>
            {!isAdmin(user) ? (
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Admin Login
              </button>
            ) : (
              <button
                onClick={async () => {
                  await logout();
                  setUser(null);
                }}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-800 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>
        <p className="text-lg text-gray-600">
            This is a platform where you can suggest improvements you'd like to see to the Georgia World Congress Center Authority.
            You can also upvote ideas by clicking the upwards arrow next to the idea.
          </p>
        <div className="mt-10 mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            {showForm ? 'Cancel' : '+ Share Your Idea'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title <span className="text-gray-500">({title.length}/80)</span>
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={80}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief title for your idea..."
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-gray-500">({content.length}/300)</span>
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={300}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your idea for improving the park..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              {submitting ? 'Submitting...' : 'Submit Idea'}
            </button>
          </form>
        )}

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading ideas...</p>
          </div>
        ) : ideas.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">No ideas yet. Be the first to share!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => handleUpvote(idea.id)}
                      disabled={hasVoted(idea.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        hasVoted(idea.id)
                          ? 'bg-blue-100 text-blue-600 cursor-not-allowed'
                          : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
                      }`}
                      title={hasVoted(idea.id) ? 'Already voted' : 'Upvote'}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <span className="text-sm font-semibold text-gray-700 mt-1">
                      {idea.votes}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {idea.title}
                    </h3>
                    <p className="text-gray-700 mb-3 whitespace-pre-wrap">
                      {idea.content}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{formatDate(idea.createdAt)}</span>
                      {isAdmin(user) && (
                        <button
                          onClick={() => setDeleteModal({ show: true, ideaId: idea.id })}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <DeleteModal
        show={deleteModal.show}
        onConfirm={handleDelete}
        onCancel={() => setDeleteModal({ show: false, ideaId: null })}
      />

      {showLogin && (
        <AdminLogin
          onLogin={(user) => {
            setUser(user);
            setShowLogin(false);
          }}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
}

