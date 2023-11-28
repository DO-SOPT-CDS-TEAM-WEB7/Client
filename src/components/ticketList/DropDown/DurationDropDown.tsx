import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/order
import { DownArrow, TabGraphImg, UpArrowImg } from '../../../assets/image';
import ButtonContainer from './ButtonContainer';
import { Arrow, Name, OptionContainer, Select } from './styles/DropDown.style';
import { DepartArriveContainer, GraphImg, Time } from './styles/Graph.style';

const DurationDropDown = (props) => {
  const { isOpen, onToggle } = props;
  return (
    <DurationDropDownContainer>
      <Select onClick={() => onToggle('duration')} $isOpen={isOpen}>
        <Name $isOpen={isOpen}>총 소요시간</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>
      <OptionContainer $isOpen={isOpen} $width="32rem" $left="28.5rem">
        <DepartArriveContainer>
          <Time>2.0시간 - 14.0시간</Time>
          <GraphImg src={TabGraphImg} alt="그래프" />
        </DepartArriveContainer>

        <ButtonContainer />
      </OptionContainer>
    </DurationDropDownContainer>
  );
};

// DurationDropDown.displayName = 'DurationDropDown';

export default DurationDropDown;

const DurationDropDownContainer = styled.div``;
