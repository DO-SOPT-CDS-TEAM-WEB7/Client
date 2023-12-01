import styled from 'styled-components';

import SearchBar from '../common/SearchBar';

const Nav = () => {
  return (
    <NavContainer>
      <Title>수백만 개의 저가 항공권, 검색 한 번으로 간단하게</Title>
      <SearchBar />
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 4.8rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.skscanWt};
  ${({ theme }) => theme.fonts.heading04};
`;
