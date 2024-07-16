import { useEffect } from 'react';

const useFocusControl = () => {
  useEffect(() => {
    const handleClick = (event) => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

export default useFocusControl;
