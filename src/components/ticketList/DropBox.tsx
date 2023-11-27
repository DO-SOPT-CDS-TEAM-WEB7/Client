import React from 'react';
import styled from 'styled-components';

import { DownArrow } from '../../assets/image';
import PathDropDown from './PathDropDown';
import TimeDropDown from './TimeDropDown';

const DropBox = () => {
  return (
    <DropBoxContainer>
      <PathDropDown />
      <TimeDropDown />

      <Select>
        <Name>총 소요시간</Name>
        <Arrow src={DownArrow} alt="아래 화살표" />
      </Select>
      <Select>
        <Name>항공사</Name>
        <Arrow src={DownArrow} alt="아래 화살표" />
      </Select>
      <Select className="end">
        <Name>추천순</Name>
        <Arrow src={DownArrow} alt="아래 화살표" />
      </Select>
    </DropBoxContainer>
  );
};

export default DropBox;

const DropBoxContainer = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin: 4.8rem 0 2.5rem;
  width: 100%;
`;

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
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanSecondary};
  border-radius: 0.8rem;
  padding-top: 2rem;
  width: 17.8rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input``;
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
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
