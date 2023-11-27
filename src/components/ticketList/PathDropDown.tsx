import React from 'react';
import styled from 'styled-components';

import { DownArrow } from '../../assets/image';

const PathDropDown = () => {
  return (
    <>
      <Select>
        <Name>경유</Name>
        <Arrow src={DownArrow} alt="아래 화살표" />
      </Select>
      <OptionContainer>
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
              <Path>직항</Path>
              <Price>000,000원부터</Price>
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

export default PathDropDown;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey150};
  border-radius: 0.8rem;
  padding: 0.8rem 1rem 0.8rem 1.6rem;

  &.end {
    margin-left: 37.6rem;
  }
`;

const Name = styled.span`
  ${({ theme }) => theme.fonts.caption02};

  margin-right: 2.2rem;
`;

const Arrow = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const OptionContainer = styled.div`
  position: absolute;
  top: 4.9rem;
  left: 0;
  z-index: 1;
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanSecondary};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  padding-top: 2rem;
  width: 17.8rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
`;

const StyledInput = styled.input``;
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.6rem 0 0.6rem 2rem;
  user-select: none;
`;
const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.2rem;
`;

const Path = styled.span`
  ${({ theme }) => theme.fonts.caption02};
`;
const Price = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey600};
  ${({ theme }) => theme.fonts.caption05};
`;

const SelectBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 0.1rem solid #D9D9D9;
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
