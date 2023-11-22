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

const FooterWrapper = styled.footer``;

const SelectBoxWrapper = styled.div``;

const SelectBox = styled.select``;

const SelectBoxOption = styled.option``;

const LeftSide = styled.div``;

const NavList = styled.nav``;

const NavMenu = styled.ol``;

const NavTitle = styled.h1``;

const NavItem = styled.li``;

const TextWrapper = styled.div``;

const Text = styled.p``;

const CopyRight = styled.p``;
