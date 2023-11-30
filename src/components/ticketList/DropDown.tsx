import { useRef, useState } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/order
import useClickOutside from '../../hooks/useOpenDropDown';
import DurationDropDown from './DropDown/DurationDropDown';
import FlightDropDown from './DropDown/FlightDropDown';
import PathDropDown from './DropDown/PathDropDown';
import RecommendDropDown from './DropDown/RecommendDropDown';
import TimeDropDown from './DropDown/TimeDropDown';

type DropdownName = 'path' | 'time' | 'duration' | 'flight' | 'recommend';

export interface DropDownProps {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onToggle: (dropdownName: DropdownName) => void;
}

const DropDown = () => {
  // 각 드롭다운 handling
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null);

  const handleDropDownClick = (dropdownName: DropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // 화면 외부 클릭 handling
  const dropDownRef = useRef(null);
  const closeDropDown = () => {
    setActiveDropdown(null);
  };
  useClickOutside(dropDownRef, closeDropDown);

  return (
    <DropDownContainer ref={dropDownRef}>
      <PathDropDown isOpen={activeDropdown === 'path'} onToggle={handleDropDownClick} />
      <TimeDropDown isOpen={activeDropdown === 'time'} onToggle={handleDropDownClick} />
      <DurationDropDown isOpen={activeDropdown === 'duration'} onToggle={handleDropDownClick} />
      <FlightDropDown isOpen={activeDropdown === 'flight'} onToggle={handleDropDownClick} />
      <RecommendDropDown isOpen={activeDropdown === 'recommend'} onToggle={handleDropDownClick} />
    </DropDownContainer>
  );
};

export default DropDown;

const DropDownContainer = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin: 4.8rem 0 2.5rem;
  width: 100%;
`;
