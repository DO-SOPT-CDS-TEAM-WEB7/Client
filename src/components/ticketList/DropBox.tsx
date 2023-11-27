import React from 'react';
import styled from 'styled-components';

import { DownArrow } from '../../assets/image';

const DropBox = () => {
  return (
    <DropBoxContainer>
      <Select>
        <Name>경유</Name>
        <Arrow src={DownArrow} alt="아래 화살표" />
      </Select>
      <Select>
        <Name>출발 시간대 설정</Name>
        <Arrow src={DownArrow} alt="아래 화살표" />
      </Select>
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
