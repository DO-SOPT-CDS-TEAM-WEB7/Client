import React from 'react';
import styled from 'styled-components';

import { DownArrow } from '../../assets/image';
import DurationDropDown from './DurationDropDown';
import FlightDropDown from './FlightDropDown';
import PathDropDown from './PathDropDown';
import RecommendDropDown from './RecommendDropDown';
import TimeDropDown from './TimeDropDown';

const DropBox = () => {
  return (
    <DropBoxContainer>
      <PathDropDown />
      <TimeDropDown />
      <DurationDropDown />
      <FlightDropDown />
      <RecommendDropDown />
    </DropBoxContainer>
  );
};

export default DropBox;

const DropBoxContainer = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin: 4.8rem 0 2.5rem;
  width: 100%;
`;
