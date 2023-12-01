import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ChevronLeft, PriceCompareLogo } from '../../assets/icon';

const Header = () => {
  return (
    <HeaderContainer>
      <Contents>
        <GoBackContainer to="/ticketList">
          <StyledImg src={ChevronLeft} />
          <GoBackText>돌아가기</GoBackText>
        </GoBackContainer>
        <StyledLogo src={PriceCompareLogo} />
      </Contents>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  padding-top: 1rem;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  width: 104.6rem;
`;

const GoBackContainer = styled(Link)`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: space-between;
  width: 7.3rem;
`;

const GoBackText = styled.span`
  ${({ theme }) => theme.fonts.caption02}

  color:${({ theme }) => theme.colors.skscanSecondary};
`;

const StyledImg = styled.img``;

const StyledLogo = styled.img`
  margin-left: 40rem;
`;
