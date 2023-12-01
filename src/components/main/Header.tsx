import styled from 'styled-components';

import { AirplaneIcon, CarIcon, GlobeIcon, HotelIcon, LikeIcon, Logo, MenuIcon, ProfileIcon } from '../../assets/icon';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBar>
        <HeaderWrapper>
          <IconImg src={Logo} alt="Logo" />
          <IconWrapper>
            <IconImg src={GlobeIcon} alt="GlobeIcon" />
            <IconImg src={LikeIcon} alt="LikeIcon" />
            <IconImg src={ProfileIcon} alt="ProfileIcon" />
            <PageName className="login">로그인</PageName>
            <IconImg src={MenuIcon} alt="MenuIcon" />
          </IconWrapper>
        </HeaderWrapper>
        <NavContainer>
          <NavWrapper>
            <IconImg src={AirplaneIcon} alt="AirplaneIcon" />
            <PageName>항공</PageName>
          </NavWrapper>
          <NavWrapper>
            <IconImg src={HotelIcon} alt="HotelIcon" />
            <PageName className="inactive">호텔</PageName>
          </NavWrapper>
          <NavWrapper>
            <IconImg src={CarIcon} alt="CarIcon" />
            <PageName className="inactive">렌터카</PageName>
          </NavWrapper>
        </NavContainer>
      </HeaderBar>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  position: absolute;
  left: 0;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.skscanPrimary};
  padding: 3.4rem calc((100vw - 104.6rem) / 2) 0;
  width: 100%;
  height: 35.3rem;
  color: ${({ theme }) => theme.colors.skscanWt};
`;

const HeaderBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const PageName = styled.span`
  ${({ theme }) => theme.fonts.body04};

  &.active {
    ${({ theme }) => theme.fonts.heading12};
  }

  &.login {
    ${({ theme }) => theme.fonts.body06};
  }

  &.inactive {
    color: ${({ theme }) => theme.colors.skscanGrey500};
  }
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
