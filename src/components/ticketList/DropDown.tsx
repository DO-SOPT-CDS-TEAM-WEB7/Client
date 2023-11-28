import { useState } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/order
import DurationDropDown from './DropDown/DurationDropDown';
import FlightDropDown from './DropDown/FlightDropDown';
import PathDropDown from './DropDown/PathDropDown';
import RecommendDropDown from './DropDown/RecommendDropDown';
import TimeDropDown from './DropDown/TimeDropDown';

// 하나만 클릭되게 설정 필요
// 받아온 API로 map 돌릴 수 있도록
type DropdownName = 'path' | 'time' | 'duration' | 'flight' | 'recommend';

export interface DropDownProps {
  isOpen: boolean;
  onToggle: (dropdownName: DropdownName) => void;
}

const DropDown = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null);

  const handleDropDownClick = (dropdownName: DropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  return (
    <DropDownContainer>
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
