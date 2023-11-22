import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <LeftSide>
        <SelectBoxWrapper>
          <SelectBox>
            <SelectBoxOption disabled selected>
              대한민국
            </SelectBoxOption>
          </SelectBox>
          <SelectBox>
            <SelectBoxOption disabled selected>
              한국어
            </SelectBoxOption>
          </SelectBox>
          <SelectBox>
            <SelectBoxOption disabled selected>
              KRW
            </SelectBoxOption>
          </SelectBox>
        </SelectBoxWrapper>
        <TextWrapper>
          <Text>전 세계 저가 항공권을 비교하고 예약하세요</Text>
          <CopyRight>© Skyscanner Ltd 2002 – 2023</CopyRight>
        </TextWrapper>
      </LeftSide>
      <NavList>
        <NavMenu>
          <NavTitle>회사</NavTitle>
          <NavItem>회사 소개</NavItem>
          <NavItem>파트너 소개</NavItem>
        </NavMenu>
        <NavMenu>
          <NavTitle>약관</NavTitle>
          <NavItem>개인정보처리방침</NavItem>
          <NavItem>서비스 약관</NavItem>
          <NavItem>쿠키 정책</NavItem>
        </NavMenu>
        <NavMenu>
          <NavTitle>지원</NavTitle>
          <NavItem>개인정보 설정</NavItem>
          <NavItem>공지사항/FAQ</NavItem>
          <NavItem>전세계 사이트</NavItem>
        </NavMenu>
      </NavList>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 5.1rem 16rem 10.2rem;
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const SelectBox = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.skscanGrey150};
  border-radius: 0.4rem;
  padding: 1.2rem 1.6rem;
  color: ${({ theme }) => theme.colors.skscanGrey800};
`;

const SelectBoxOption = styled.option`
  padding: 1.6rem;
  ${({ theme }) => theme.fonts.caption02}

  color:${({ theme }) => theme.colors.skscanGrey800};
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.6rem;
`;

const NavList = styled.nav`
  display: flex;
  gap: 1.6rem;
`;

const NavMenu = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 16rem;
`;

const NavTitle = styled.h1`
  ${({ theme }) => theme.fonts.body06}

  color: ${({ theme }) => theme.colors.skscanGrey800};
`;

const NavItem = styled.li`
  cursor: pointer;
  ${({ theme }) => theme.fonts.caption02}

  color: ${({ theme }) => theme.colors.skscanGrey600};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.body05}

  color: ${({ theme }) => theme.colors.skscanGrey800};
`;

const CopyRight = styled.p`
  ${({ theme }) => theme.fonts.body06}

  color: ${({ theme }) => theme.colors.skscanGrey800};
`;
