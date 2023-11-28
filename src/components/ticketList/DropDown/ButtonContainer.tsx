import React from 'react';
import styled from 'styled-components';

const ButtonContainer = () => {
  return (
    <SelectBtnContainer>
      <Cancle>취소</Cancle>
      <Confirm>적용하기</Confirm>
    </SelectBtnContainer>
  );
};

export default ButtonContainer;

export const SelectBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey150};
  padding: 2rem 2rem 2rem 0;
  width: 100%;
`;

export const Cancle = styled.button`
  color: ${({ theme }) => theme.colors.skscanGrey600};
  ${({ theme }) => theme.fonts.caption01};
`;
export const Confirm = styled.button`
  color: ${({ theme }) => theme.colors.skscanSecondary};
  ${({ theme }) => theme.fonts.caption01};
`;
