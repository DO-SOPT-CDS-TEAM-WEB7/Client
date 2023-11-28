import React, { useState } from 'react';
import styled from 'styled-components';

import { DownArrow, UpArrowImg } from '../../../assets/image';
// eslint-disable-next-line import/order
import { Arrow, Name, OptionContainer, Select } from './styles/DropDown.style';

const RecommendDropDown = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const onClickDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropDownClicked(!dropDownClicked);
  };
  return (
    <RecommendDropDownContainer>
      <Select onClick={onClickDropDown} $isOpen={dropDownClicked} className="end">
        <Name $isOpen={dropDownClicked}>추천순</Name>
        {dropDownClicked ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <OptionContainer $isOpen={dropDownClicked} $width="10.9rem" $left="93.7rem" className="end">
        <List>
          <SortName>최저가순</SortName>
          <SortName>최단시간순</SortName>
          <SortName>출국 시간순</SortName>
          <SortName className="end">귀국 시간순</SortName>
        </List>
      </OptionContainer>
    </RecommendDropDownContainer>
  );
};

export default RecommendDropDown;

const RecommendDropDownContainer = styled.div``;

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
