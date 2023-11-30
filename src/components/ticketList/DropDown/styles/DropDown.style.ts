import styled from 'styled-components';

export const DropDownContainer = styled.div``;

export const Select = styled.div<{ $isOpen: boolean }>`
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

export const Name = styled.span<{ $isOpen: boolean }>`
  ${({ theme }) => theme.fonts.caption02};

  margin-right: 2.2rem;
  color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.skscanSecondary : theme.colors.skscanGrey800)};
`;

export const Arrow = styled.img`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
`;

export const Option = styled.div<{ $isOpen: boolean; $width: string; $left: string }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  top: 4.9rem;
  left: ${({ $left }) => $left};
  z-index: 1;
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanSecondary};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  padding-top: 2rem;
  width: ${({ $width }) => $width};
  ${({ theme }) => theme.effects.boxDrop2};

  &.end {
    padding: 0;
  }
`;
