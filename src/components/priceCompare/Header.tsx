import styled from 'styled-components';

import { ChevronLeft, PriceCompareLogo } from '../../assets/icon';

const Header = () => {
  return (
    <HeaderContainer>
      <Contents>
        <GoBackContainer>
          <StyledImg src={ChevronLeft} />
          <GoBackText>돌아가기</GoBackText>
        </GoBackContainer>
        <StyledImg src={PriceCompareLogo} />
      </Contents>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding-top: 1rem;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 57.3rem;
`;

const GoBackContainer = styled.div`
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
