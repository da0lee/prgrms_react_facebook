import { useCallback, useEffect } from 'react';

export const useAutoFormHeight = (ref) => {
  useEffect(() => {
    const handleFormHeight = () => {
      const { scrollHeight, clientHeight, style } = ref.current;
      if (scrollHeight !== clientHeight) {
        style.height = `${scrollHeight}px`;
      }
    };
    ref.current?.addEventListener('input', handleFormHeight);
    return () => {
      ref?.current?.removeEventListener('input', handleFormHeight);
    };
  }, [ref]);

  const handleResetSubmit = useCallback((e) => {
    const { style } = ref.current;

    e.preventDefault();
    style.height = 'auto';
  }, []);

  return { handleResetSubmit };
};
