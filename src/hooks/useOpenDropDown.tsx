import { useEffect, useState } from 'react';

const useOpenDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [elem, setElem] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // 창의 아무 곳이나 클릭하면 없애기 
    const onClickDropDown = (e) => {
      if (elem !== null && !elem.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClickDropDown);
    }

    return () => {
      window.removeEventListener('click', onClickDropDown);
    };
  }, [isOpen, elem]);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, elem, toggleDropDown, setElem };
};

export default useOpenDropDown;
