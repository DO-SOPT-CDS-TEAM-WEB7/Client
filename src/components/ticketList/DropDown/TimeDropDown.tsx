import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/order
import { DownArrow, TabGraphImg, UpArrowImg } from '../../../assets/image';
import ButtonContainer from './ButtonContainer';
// eslint-disable-next-line import/order
import { Arrow, Name, OptionContainer, Select } from './styles/DropDown.style';
import { DepartArrive, DepartArriveContainer, GraphImg, Time } from './styles/Graph.style';

const TimeDropDown = (props) => {
  const { isOpen, onToggle } = props;

  return (
    <TimeDropDownContainer>
      <Select onClick={() => onToggle('time')} $isOpen={isOpen}>
        <Name $isOpen={isOpen}>출발 시간대 설정</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <OptionContainer $isOpen={isOpen} $width="32rem" $left="10.9rem">
        <DepartArriveContainer>
          <DepartArrive>가는 날 출발시간</DepartArrive>
          <Time>오전 12:00 - 오후 11:59</Time>
          <GraphImg src={TabGraphImg} alt="그래프" />
        </DepartArriveContainer>
        <DepartArriveContainer>
          <DepartArrive>오는 날 출발시간</DepartArrive>
          <Time>오전 12:00 - 오후 11:59</Time>
          <GraphImg src={TabGraphImg} alt="그래프" />
        </DepartArriveContainer>
        <ButtonContainer />
      </OptionContainer>
    </TimeDropDownContainer>
  );
};

export default TimeDropDown;

const TimeDropDownContainer = styled.div``;
