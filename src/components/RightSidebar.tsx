'use client';

import React from 'react';

const contacts = [
  { name: 'Contact 1', online: true },
  { name: 'Contact 2', online: true },
  { name: 'Contact 3', online: false },
  { name: 'Contact 4', online: true },
  { name: 'Contact 5', online: false },
];

export default function RightSidebar() {
  return (
    <aside className="fixed right-0 top-14 w-[280px] h-[calc(100vh-56px)] overflow-y-auto py-4 px-4">
      {/* Anniversaires Section */}
      <div className="mb-6">
        <h3 className="text-[17px] font-semibold text-gray-700 mb-3">Anniversaires</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1877F2]/20 rounded-lg flex items-center justify-center">
              <span className="text-lg">🎂</span>
            </div>
          </div>
          <button className="text-[#1877F2] text-sm font-medium hover:underline">
            Voir tout : 15 <span className="text-[#1877F2]">▼</span>
          </button>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="mb-6">
        <h3 className="text-[17px] font-semibold text-gray-700 mb-3">Contacts</h3>
        <div className="flex items-center justify-between mb-3">
          <div></div>
          <button className="text-[#1877F2] text-sm font-medium hover:underline">
            Voir tout : 15 <span className="text-[#1877F2]">▼</span>
          </button>
        </div>
        <div className="space-y-1">
          {contacts.map((contact, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <span className="text-[15px] text-gray-800">{contact.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Second Anniversaires Section */}
      <div>
        <h3 className="text-[17px] font-semibold text-gray-700 mb-3">Anniversaires</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1877F2]/20 rounded-lg flex items-center justify-center">
              <span className="text-lg">🎂</span>
            </div>
          </div>
          <button className="text-[#1877F2] text-sm font-medium hover:underline">
            Voir tout : 15 <span className="text-[#1877F2]">▼</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

