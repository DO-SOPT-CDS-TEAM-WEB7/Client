import React, { useState } from 'react';
import styled from 'styled-components';

import { DownArrow, TabGraphImg, UpArrowImg } from '../../../assets/image';
// eslint-disable-next-line import/order
import { Arrow, Cancle, Confirm, Name, OptionContainer, Select, SelectBtnContainer } from './styles/DropDown.style';

const TimeDropDown = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const onClickDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropDownClicked(!dropDownClicked);
  };

  return (
    <>
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
    </>
  );
};

export default TimeDropDown;

const DepartArriveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2.8rem 0.8rem;
`;
const DepartArrive = styled.span`
  margin-bottom: 0.3rem;
  color: ${({ theme }) => theme.colors.skscanBk};
  ${({ theme }) => theme.fonts.caption02};
`;
const Time = styled.span`
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.skscanGrey600};
  ${({ theme }) => theme.fonts.caption05};
`;
const GraphImg = styled.img`
  width: 26.4rem;
  height: 2.4rem;
`;
