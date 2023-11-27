import React, { useState } from 'react';
import styled from 'styled-components';

import { CheckImg, DownArrow, UpArrowImg } from '../../assets/image';

const PathDropDown = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const onClickDropDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropDownClicked(!dropDownClicked);
  };

  return (
    <>
      <Select onClick={onClickDropDown} $isOpen={dropDownClicked}>
        <Name>경유</Name>
        {dropDownClicked ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <OptionContainer $isOpen={dropDownClicked}>
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
        <SelectBtnContainer>
          <Cancle>취소</Cancle>
          <Confirm>적용하기</Confirm>
        </SelectBtnContainer>
      </OptionContainer>
    </>
  );
};

export default PathDropDown;

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

const StyledInput = styled.input`
  appearance: none;
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

  margin-bottom: 0.3rem;
`;
const Price = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey600};
  ${({ theme }) => theme.fonts.caption05};
`;

const SelectBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
