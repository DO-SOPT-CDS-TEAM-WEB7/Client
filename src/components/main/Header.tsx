import styled from 'styled-components';

import { AirplaneIcon, CarIcon, GlobeIcon, HotelIcon, LikeIcon, Logo, MenuIcon, ProfileIcon } from '../../assets/icon';

const Header = () => {
  return (
    <HeaderBar>
      <HeaderContainer>
        <IconImg src={Logo} alt="Logo" />
        <IconWrapper>
          <IconImg src={GlobeIcon} alt="GlobeIcon" />
          <IconImg src={LikeIcon} alt="LikeIcon" />
          <IconImg src={ProfileIcon} alt="ProfileIcon" />
          <PageName>로그인</PageName>
          <IconImg src={MenuIcon} alt="MenuIcon" />
        </IconWrapper>
      </HeaderContainer>
      <NavContainer>
        <NavWrapper>
          <IconImg src={AirplaneIcon} alt="AirplaneIcon" />
          <PageName>항공</PageName>
        </NavWrapper>
        <NavWrapper>
          <IconImg src={HotelIcon} alt="HotelIcon" />
          <PageName>호텔</PageName>
        </NavWrapper>
        <NavWrapper>
          <IconImg src={CarIcon} alt="CarIcon" />
          <PageName>렌터카</PageName>
        </NavWrapper>
      </NavContainer>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.skscanPrimary};
  height: 14.6rem;
  color: ${({ theme }) => theme.colors.skscanWt};
`;

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.section`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const PageName = styled.span`
  /* 빈 스타일드 컴포넌트 태그를 주고 싶었는데 어떻게 해야될지를 모르겠어요ㅜ */
  text-align: center;
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 1.6rem;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const IconImg = styled.img`
  object-fit: contain;
`;
