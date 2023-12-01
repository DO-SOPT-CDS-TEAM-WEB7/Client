/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from 'react';
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

// 각 드롭다운 Props
export interface DropDownProps {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onToggle: (dropdownName: DropdownName) => void;
  flightList?: MinPriceListData[];
  checkboxHandler?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onCancle?: () => void;
}

// 항공사 체크박스 Props
export interface CheckboxHandlerProps {
  checkboxHandler?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const DropDown = (props: CheckboxHandlerProps) => {
  const { checkboxHandler } = props;
  // 각 드롭다운 handling
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null);
  // 항공권 최소값 리스트 저장용
  const [minPriceList, setMinPriceList] = useState<MinPriceListData[]>([]);

  const getMinList = async () => {
    try {
      const {
        data: { data },
      } = await getMinPriceList();
      setMinPriceList(data.airMinPriceDtoList);
    } catch (e) {
      console.log(e);
    }
  };

  // 기본 드롭다운 handler
  // 열고 닫힘만 관여
  const handleDropDownClick = (dropdownName: DropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // 항공권 리스트 드롭다운 handler
  // 체크리스트 동적 생성
  const handleDropDownFlightFilter = (dropdownName: DropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    getMinList();
  };

  // 취소버튼 누르면 닫히게
  const handelCancelClick = () => {
    setActiveDropdown(null);
  };

  // 화면 외부 클릭 handling
  const dropDownRef = useRef(null);
  const closeDropDown = () => {
    setActiveDropdown(null);
  };
  useClickOutside(dropDownRef, closeDropDown);

  return (
    <DropDownContainer ref={dropDownRef}>
      <PathDropDown isOpen={activeDropdown === 'path'} onToggle={handleDropDownClick} onCancle={handelCancelClick} />
      <TimeDropDown isOpen={activeDropdown === 'time'} onToggle={handleDropDownClick} onCancle={handelCancelClick} />
      <DurationDropDown
        isOpen={activeDropdown === 'duration'}
        onToggle={handleDropDownClick}
        onCancle={handelCancelClick}
      />
      <FlightDropDown
        isOpen={activeDropdown === 'flight'}
        onToggle={handleDropDownFlightFilter}
        flightList={minPriceList}
        checkboxHandler={checkboxHandler}
        onCancle={handelCancelClick}
      />
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
