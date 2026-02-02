'use client';

import React from 'react';
import PostCard from './PostCard';

export default function Feed() {
  return (
    <main className="flex-1 max-w-[680px] mx-auto pt-20 pb-8 px-4">
      {/* Search Bar in Feed */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Rechercher sur Facebook"
            className="w-full h-10 px-4 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
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

