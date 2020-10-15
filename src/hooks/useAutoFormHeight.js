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

  const handleFormHeightSubmit = useCallback((e) => {
    const { name, style } = ref.current;

    e.preventDefault();
    name === 'post' ? (style.height = '100px') : (style.height = '50px');
  }, []);

  return { handleFormHeightSubmit };
};
