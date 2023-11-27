import React, { useState } from 'react';
import styled from 'styled-components';

import { CheckImg, DownArrow, UpArrowImg } from '../../assets/image';

const RecommendDropDown = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const onClickDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropDownClicked(!dropDownClicked);
  };
  return (
    <>
      <Select onClick={onClickDropDown} $isOpen={dropDownClicked} className="end">
        <Name $isOpen={dropDownClicked}>추천순</Name>
        {dropDownClicked ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <OptionContainer $isOpen={dropDownClicked}>
        <List>
          <SortName>최저가순</SortName>
          <SortName>최단시간순</SortName>
          <SortName>출국 시간순</SortName>
          <SortName className="end">귀국 시간순</SortName>
        </List>
      </OptionContainer>
    </>
  );
};

export default RecommendDropDown;

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
  margin-right: 2.2rem;
  ${({ theme }) => theme.fonts.caption02};

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
  left: 93.7rem;
  z-index: 1;
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanSecondary};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  width: 10.9rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SortName = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey150};
  cursor: pointer;
  padding: 1.15rem 0 1.15rem 1.6rem;
  color: ${({ theme }) => theme.colors.skscanGrey800};
  ${({ theme }) => theme.fonts.caption02};

  &.end {
    border-bottom: none;
  }
`;
