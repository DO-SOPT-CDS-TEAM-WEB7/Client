import React, { useState } from 'react';
import styled from 'styled-components';

import { CheckImg, DownArrow, TabGraphImg, UpArrowImg } from '../../assets/image';

const DurationDropDown = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const onClickDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropDownClicked(!dropDownClicked);
  };
  return (
    <>
      <Select onClick={onClickDropDown} $isOpen={dropDownClicked}>
        <Name>총 소요시간</Name>
        {dropDownClicked ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>
      <OptionContainer $isOpen={dropDownClicked}>
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

const Select = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${({ $isOpen, theme }) => ($isOpen ? theme.colors.skscanSecondary : theme.colors.skscanGrey150)};
  border-radius: 0.8rem;
  cursor: pointer;
  padding: 0.8rem 1rem 0.8rem 1.6rem;

  &.end {
    margin-left: 37.6rem;
  }
`;

const Name = styled.span<{ $isOpen: boolean }>`
  ${({ theme }) => theme.fonts.caption02};

  margin-right: 2.2rem;
  color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.skscanSecondary : theme.colors.skscanGrey800)};
`;

const Arrow = styled.img`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
`;

const OptionContainer = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  top: 4.9rem;
  left: 28.5rem;
  z-index: 1;
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanSecondary};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  padding-top: 2rem;
  width: 32rem;
`;

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

const SelectBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey150};
  padding: 2rem 2rem 2rem 0;
  width: 100%;
`;

const Cancle = styled.button`
  color: ${({ theme }) => theme.colors.skscanGrey600};
  ${({ theme }) => theme.fonts.caption01};
`;
const Confirm = styled.button`
  color: ${({ theme }) => theme.colors.skscanSecondary};
  ${({ theme }) => theme.fonts.caption01};
`;
