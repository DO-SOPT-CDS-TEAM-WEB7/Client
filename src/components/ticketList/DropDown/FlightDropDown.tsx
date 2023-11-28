import React, { useState } from 'react';
import styled from 'styled-components';

import { CheckImg, DownArrow, UpArrowImg } from '../../../assets/image';
// eslint-disable-next-line import/order
import { Arrow, Cancle, Confirm, Name, OptionContainer, Select, SelectBtnContainer } from './DropBox.style';

// API 연결 필요
const FlightDropDown = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false);
  const onClickDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropDownClicked(!dropDownClicked);
  };

  return (
    <>
      <Select onClick={onClickDropDown} $isOpen={dropDownClicked}>
        <Name $isOpen={dropDownClicked}>항공사</Name>
        {dropDownClicked ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <OptionContainer $isOpen={dropDownClicked} $width="17.8rem" $left="43.4rem">
        <List>
          <StyledLabel htmlFor="ANA">
            <StyledInput type="checkbox" id="ANA" name="ANA" />
            <StyledTextContainer>
              <Path>ANA (전일본공수)</Path>
              <Price>622,301원부터</Price>
            </StyledTextContainer>
          </StyledLabel>
          <StyledLabel htmlFor="ANA">
            <StyledInput type="checkbox" id="ANA" name="ANA" />
            <StyledTextContainer>
              <Path>Peach</Path>
              <Price>330,500원부터</Price>
            </StyledTextContainer>
          </StyledLabel>
        </List>
        <SelectBtnContainer>
          <Cancle>취소</Cancle>
          <Confirm>적용하기</Confirm>
        </SelectBtnContainer>
      </OptionContainer>
    </>
  );
};

export default FlightDropDown;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
`;

const StyledInput = styled.input`
  appearance: none;
  margin-left: 2rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.skscanGrey200};
  background-image: url('${CheckImg}');
  background-position: 50% 40%;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  width: 2rem;
  height: 2rem;

  &:checked {
    background-color: ${({ theme }) => theme.colors.skscanSecondary};
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.6rem 0;
  user-select: none;
  width: 17.8rem;
`;
const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.2rem;
`;

const Path = styled.span`
  ${({ theme }) => theme.fonts.caption02};

  margin-bottom: 0.3rem;
`;
const Price = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey600};
  ${({ theme }) => theme.fonts.caption05};
`;
