import styled from 'styled-components';

import { LogoIcon } from '../../assets/icon';
import { AirplaneImg, BedImg, CarImg, SearchImg } from '../../assets/image';

const Nav = () => {
  return (
    <NavContainer>
      <LanUl>
        <LanLi clicked={true}>한국어</LanLi>
        <LanLi clicked={false}>English</LanLi>
        <LanLi clicked={false}>日本語</LanLi>
        <LanLi clicked={false}>中文</LanLi>
      </LanUl>
      <SearchBar>
        <img src={LogoIcon} alt="로고" />
        <SearchBarUl>
          <SearchBarLi>도움말</SearchBarLi>
          <SearchBarLi>위시리스트</SearchBarLi>
          <SearchBarLi>로그인</SearchBarLi>
          <Search src={SearchImg} alt="검색 아이콘" />
        </SearchBarUl>
      </SearchBar>
      <MenuUl>
        <MenuLi clicked={true}>
          <MenuImg src={AirplaneImg} />
          <MenuSpan>항공권</MenuSpan>
        </MenuLi>
        <MenuLi clicked={false}>
          <MenuImg src={BedImg} />
          <MenuSpan>호텔</MenuSpan>
        </MenuLi>
        <MenuLi clicked={false}>
          <MenuImg src={CarImg} />
          <MenuSpan>렌터카</MenuSpan>
        </MenuLi>
      </MenuUl>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  position: relative;
  margin-bottom: 14.8rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey150};
  padding-top: 3.6rem;
`;
const LanUl = styled.ul`
  display: flex;
  position: absolute;
  top: 0.8rem;
  right: 0;
  align-items: center;
  justify-content: space-between;
`;
const LanLi = styled.li<{ clicked: boolean }>`
  margin-right: 1.2rem;
  cursor: pointer;
  padding: 0.4rem;
  color: ${({ clicked, theme }) => (clicked ? theme.colors.skscanGrey900 : theme.colors.skscanGrey700)};
  ${({ clicked, theme }) => (clicked ? theme.fonts.caption03 : theme.fonts.caption05)};
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SearchBarUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.05rem 0;
`;
const SearchBarLi = styled.li`
  margin-right: 2.4rem;
  cursor: pointer;
  padding: 0.4rem;
  ${({ theme }) => theme.fonts.body06};
`;
const Search = styled.img`
  cursor: pointer;
  width: 3.6rem;
  height: 3.6rem;
`;
const MenuUl = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
`;
const MenuLi = styled.div<{ clicked: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 1.2rem;
  border-bottom: ${({ clicked, theme }) => (clicked ? `0.1rem solid ${theme.colors.skscanBk}` : 'none')};
  cursor: pointer;
  padding: 0.4rem;
`;
const MenuImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
const MenuSpan = styled.span`
  margin: 0.35rem 0 0.35rem 0.2rem;
  ${({ theme }) => theme.fonts.caption01};
`;
