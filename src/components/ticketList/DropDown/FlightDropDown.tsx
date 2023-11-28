import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/order
import { DownArrow, UpArrowImg } from '../../../assets/image';
import ButtonContainer from './ButtonContainer';
import { Arrow, Name, OptionContainer, Select } from './styles/DropDown.style';
import { List, Path, Price, StyledInput, StyledLabel, StyledTextContainer } from './styles/InputCustom.style';

// API 연결 필요
const FlightDropDown = (props) => {
  const { isOpen, onToggle } = props;

  return (
    <FlightDropDownContainer>
      <Select onClick={() => onToggle('flight')} $isOpen={isOpen}>
        <Name $isOpen={isOpen}>항공사</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <OptionContainer $isOpen={isOpen} $width="17.8rem" $left="43.4rem">
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
        <ButtonContainer />
      </OptionContainer>
    </FlightDropDownContainer>
  );
};

export default FlightDropDown;

const FlightDropDownContainer = styled.div``;
