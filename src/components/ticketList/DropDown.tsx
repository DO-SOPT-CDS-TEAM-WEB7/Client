/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import { useRef, useState } from 'react';
import styled from 'styled-components';

import { getMinPriceList } from '../../apis/getMinPriceList';
import useClickOutside from '../../hooks/useOpenDropDown';
import { MinPriceListData } from '../../types/ticketList';
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
  flightList?: MinPriceListData[];
}

const DropDown = () => {
  // 각 드롭다운 handling
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null);
  const [minPriceList, setMinPriceList] = useState<MinPriceListData[]>([]);

  const getMinList = async () => {
    try {
      const {
        data: { data },
      } = await getMinPriceList();
      setMinPriceList(data.airMinPriceDtoList);
      console.log(data.airMinPriceDtoList);
      console.log(minPriceList);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDropDownClick = (dropdownName: DropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleDropDownFlightFilter = (dropdownName: DropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    getMinList();
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
      <FlightDropDown isOpen={activeDropdown === 'flight'} onToggle={handleDropDownFlightFilter} flightList={minPriceList}/>
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
