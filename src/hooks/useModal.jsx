import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
    console.log("bouton cliqué")
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;
