import styled from 'styled-components';

import { CheckImg } from '../../../assets/image';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
`;

export const StyledInput = styled.input`
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

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.6rem 0;
  user-select: none;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.2rem;
`;

export const Path = styled.span`
  ${({ theme }) => theme.fonts.caption02};

  margin-bottom: 0.3rem;
`;
export const Price = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey600};
  ${({ theme }) => theme.fonts.caption05};
`;
