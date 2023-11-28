import React, { useState } from 'react';
import styled from 'styled-components';

import { DownArrow, TabGraphImg, UpArrowImg } from '../../../assets/image';
// eslint-disable-next-line import/order
import { Arrow, Cancle, Confirm, Name, OptionContainer, Select, SelectBtnContainer } from './DropBox.style';

const DurationDropDown = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const onClickDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropDownClicked(!dropDownClicked);
  };
  return (
    <>
      <Select onClick={onClickDropDown} $isOpen={dropDownClicked}>
        <Name $isOpen={dropDownClicked}>총 소요시간</Name>
        {dropDownClicked ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>
      <OptionContainer $isOpen={dropDownClicked} $width="32rem" $left="28.5rem">
        <DepartArriveContainer>
          <Time>2.0시간 - 14.0시간</Time>
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

export default DurationDropDown;

const DepartArriveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2.8rem 0.8rem;
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
