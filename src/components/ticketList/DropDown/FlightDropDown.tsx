import React, { useState } from 'react';

// eslint-disable-next-line import/order
import { DownArrow, UpArrowImg } from '../../../assets/image';
// eslint-disable-next-line import/order
import { Arrow, Cancle, Confirm, Name, OptionContainer, Select, SelectBtnContainer } from './DropDown.style';
import { List, Path, Price, StyledInput, StyledLabel, StyledTextContainer } from './InputCustom.style';

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
