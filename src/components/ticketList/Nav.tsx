import React from 'react';
import styled from 'styled-components';

import { AirplaneImg, BedImg, CarImg, LogoIcon, SearchImg } from '../../assets/image';

const Nav = () => {
  return (
    <St.NavContainer>
      <St.LanUl>
        <St.LanLi clicked={true}>한국어</St.LanLi>
        <St.LanLi clicked={false}>English</St.LanLi> {/* 폰트 디자인 수정 필 */}
        <St.LanLi clicked={false}>日本語</St.LanLi>
        <St.LanLi clicked={false}>中文</St.LanLi>
      </St.LanUl>
      <St.SearchBarContainer>
        <img src={LogoIcon} alt="로고" />
        <St.SearchBarUl>
          <St.SearchBarLi>도움말</St.SearchBarLi>
          <St.SearchBarLi>위시리스트</St.SearchBarLi>
          <St.SearchBarLi>로그인</St.SearchBarLi>
          <St.SearchImg src={SearchImg} alt="검색 아이콘" />
        </St.SearchBarUl>
      </St.SearchBarContainer>
      <St.MenuUl>
        <St.MenuLi clicked={true}>
          <St.MenuImg src={AirplaneImg} />
          <St.MenuSpan>항공권</St.MenuSpan>
        </St.MenuLi>
        <St.MenuLi clicked={false}>
          <St.MenuImg src={BedImg} />
          <St.MenuSpan>호텔</St.MenuSpan>
        </St.MenuLi>
        <St.MenuLi clicked={false}>
          <St.MenuImg src={CarImg} />
          <St.MenuSpan>렌터카</St.MenuSpan>
        </St.MenuLi>
      </St.MenuUl>
    </St.NavContainer>
  );
};

export default Nav;

const St = {
  NavContainer: styled.nav`
    position: relative;
    padding: 3.6rem 16rem;
  `,
  LanUl: styled.ul`
    display: flex;
    position: absolute;
    top: 0.8rem;
    right: 14.8rem;
    align-items: center;
    justify-content: space-between;
  `,
  LanLi: styled.li<{ clicked: boolean }>`
    margin-right: 1.2rem;
    cursor: pointer;
    padding: 0.4rem;
    ${({ clicked, theme }) => (clicked ? theme.fonts.caption03 : theme.fonts.caption04)};
  `,
  SearchBarContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  SearchBarUl: styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.05rem 0;
  `,
  SearchBarLi: styled.li`
    margin-right: 2.4rem;
    cursor: pointer;
    padding: 0.4rem;
    ${({ theme }) => theme.fonts.body06};
  `,
  SearchImg: styled.img`
    cursor: pointer;
    width: 3.6rem;
    height: 3.6rem;
  `,
  MenuUl: styled.ul`
    display: flex;
    position: absolute;
    top: 8.7rem;
    left: 16rem;
    align-items: center;
    margin-top: 0.85rem;
  `,
  MenuLi: styled.div<{ clicked: boolean }>`
    display: flex;
    align-items: center;
    margin-right: 1.2rem;
    border-bottom: ${({ clicked, theme }) => (clicked ? `1px solid ${theme.colors.skscanBk}` : 'none')};
    cursor: pointer;
    padding: 0.4rem;
  `,
  MenuImg: styled.img`
    width: 2.4rem;
    height: 2.4rem;
  `,
  MenuSpan: styled.span`
    margin: 0.35rem 0 0.35rem 0.2rem;
    ${({ theme }) => theme.fonts.caption01};
  `,
};
