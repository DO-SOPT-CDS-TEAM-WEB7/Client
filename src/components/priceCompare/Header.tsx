import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ChevronLeft, PriceCompareLogo } from '../../assets/icon';

const Header = () => {
  return (
    <HeaderContainer>
      <ContentsContainer>
        <Contents>
          <GoBackContainer to="/ticketList">
            <StyledImg src={ChevronLeft} />
            <GoBackText>돌아가기</GoBackText>
          </GoBackContainer>
          <StyledLogo src={PriceCompareLogo} />
        </Contents>
      </ContentsContainer>
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
  z-index: -1;
  background-color: ${({ theme }) => theme.colors.skscanGrey50};
  padding-top: 1rem;
  width: 100%;
  height: 100%;
`;

const ContentsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.skscanWt};
  height: 3.6rem;
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
