import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/order
import { DownArrow, UpArrowImg } from '../../../assets/image';
import ButtonContainer from './ButtonContainer';
import { Arrow, Name, OptionContainer, Select } from './styles/DropDown.style';
import { List, Path, Price, StyledInput, StyledLabel, StyledTextContainer } from './styles/InputCustom.style';

const PathDropDown = (props) => {
  const { isOpen, onToggle } = props;
  return (
    <PathDropDownContainer>
      <Select onClick={() => onToggle('path')} $isOpen={isOpen} id="path">
        <Name $isOpen={isOpen}>경유</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <OptionContainer $isOpen={isOpen} $width="17.8rem" $left="0">
        <List>
          <StyledLabel htmlFor="직항">
            <StyledInput type="checkbox" id="직항" name="직항" />
            <StyledTextContainer>
              <Path>직항</Path>
              <Price>000,000원부터</Price>
            </StyledTextContainer>
          </StyledLabel>
          <StyledLabel htmlFor="직항">
            <StyledInput type="checkbox" id="직항" name="직항" />
            <StyledTextContainer>
              <Path>직항</Path>
              <Price>000,000원부터</Price>
            </StyledTextContainer>
          </StyledLabel>
          <StyledLabel htmlFor="직항">
            <StyledInput type="checkbox" id="직항" name="직항" />
            <StyledTextContainer>
              <Path>2번 이상 경유</Path>
              <Price>없음</Price>
            </StyledTextContainer>
          </StyledLabel>
        </List>
        <ButtonContainer />
      </OptionContainer>
    </PathDropDownContainer>
  );
};

// PathDropDown.displayName = 'PathDropDown';
export default PathDropDown;

const PathDropDownContainer = styled.div``;
