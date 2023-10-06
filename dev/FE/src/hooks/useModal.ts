import { useState, useCallback, useEffect } from 'react';

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState<number>(0);

  const openToggle = useCallback(() => {
    setScrollTop(document.documentElement.scrollTop);
    setisOpen(true);
  }, []);

  const closeToggle = useCallback(() => {
    setScrollTop(document.documentElement.scrollTop);
    setisOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return {
    isOpen,
    openToggle,
    closeToggle,
    scrollTop,
  };
}
