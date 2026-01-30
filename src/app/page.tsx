'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import Feed from '@/components/Feed';
import Modal from '@/components/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay to simulate the design
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);

    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <Header />
      <div className="flex">
        <LeftSidebar />
        <div className="flex-1 ml-[280px] mr-[280px]">
          <Feed />
        </div>
        <RightSidebar />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
