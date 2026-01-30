'use client';

import React from 'react';
import PostCard from './PostCard';

export default function Feed() {
  return (
    <main className="flex-1 max-w-[680px] mx-auto pt-20 pb-8 px-4">
      {/* Search Bar in Feed */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Rechercher sur Photo"
            className="w-full h-10 px-4 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="12" cy="19" r="2"/>
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        <PostCard
          author="Cantinho das Receitas"
          time="12 h"
          content="Frango com Bacon..."
          imageUrl="/chicken-bacon.jpg"
        />
      </div>
    </main>
  );
}

