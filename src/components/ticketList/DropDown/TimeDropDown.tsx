import React, { useState } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/order
import { DownArrow, TabGraphImg, UpArrowImg } from '../../../assets/image';
// eslint-disable-next-line import/order
import { Arrow, Cancle, Confirm, Name, OptionContainer, Select, SelectBtnContainer } from './styles/DropDown.style';
import { DepartArrive, DepartArriveContainer, GraphImg, Time } from './styles/Graph.style';

const TimeDropDown = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const onClickDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropDownClicked(!dropDownClicked);
  };

  return (
    <TimeDropDownContainer>
      <Select onClick={onClickDropDown} $isOpen={dropDownClicked}>
        <Name $isOpen={dropDownClicked}>출발 시간대 설정</Name>
        {dropDownClicked ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <OptionContainer $isOpen={dropDownClicked} $width="32rem" $left="10.9rem">
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
        <SelectBtnContainer>
          <Cancle>취소</Cancle>
          <Confirm>적용하기</Confirm>
        </SelectBtnContainer>
      </OptionContainer>
    </TimeDropDownContainer>
  );
};

export default TimeDropDown;

const TimeDropDownContainer = styled.div``;
