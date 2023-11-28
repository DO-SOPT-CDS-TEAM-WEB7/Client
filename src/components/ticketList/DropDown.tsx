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

const DropDown = () => {
  return (
    <DropDownContainer>
      <PathDropDown />
      <TimeDropDown />
      <DurationDropDown />
      <FlightDropDown />
      <RecommendDropDown />
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
