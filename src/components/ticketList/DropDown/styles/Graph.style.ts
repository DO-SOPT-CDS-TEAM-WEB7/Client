import styled from 'styled-components';

export const DepartArriveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2.8rem 0.8rem;
`;
export const DepartArrive = styled.span`
  margin-bottom: 0.3rem;
  color: ${({ theme }) => theme.colors.skscanBk};
  ${({ theme }) => theme.fonts.caption02};
`;
export const Time = styled.span`
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.skscanGrey600};
  ${({ theme }) => theme.fonts.caption05};
`;
export const GraphImg = styled.img`
  width: 26.4rem;
  height: 2.4rem;
`;
