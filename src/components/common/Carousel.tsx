import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { BackwardArrow, ForwardArrow } from '../../assets/image';
import CustomSlide from '../ticketList/CustomSlide';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow currentSlide={currentSlide} />,
    prevArrow: <PrevArrow currentSlide={currentSlide} />,
    afterChange: (index) => setCurrentSlide(index),
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  // data에 따른 map, prop 전달
  return (
    <CarouselContainer>
      <StlyedSlider {...settings}>
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
        <CustomSlide hotelName="삿포로의 호스텔" hotelRoom="더블룸 (전용 욕실)" hotelBed="침대 1개" />
      </StlyedSlider>
    </CarouselContainer>
  );
};

export default Carousel;

interface ArrowProps {
  currentSlide?: number;
  className?: string;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// 전체 요소 개수 -1 -4 만큼 넣어주기
const NextArrow = (props: ArrowProps) => {
  const { currentSlide, className, style, onClick } = props;
  return (
    <NextBtn
      className={className}
      style={{ ...style, display: 'flex', visibility: currentSlide === 6 ? 'hidden' : 'visible' }}
      onClick={onClick}>
      <ArrowImg src={ForwardArrow} alt="다음으로" />
    </NextBtn>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { currentSlide, className, style, onClick } = props;
  return (
    <PrevBtn
      className={className}
      style={{ ...style, display: 'flex', visibility: currentSlide === 0 ? 'hidden' : 'visible' }}
      onClick={onClick}>
      <ArrowImg src={BackwardArrow} alt="이전으로" />
    </PrevBtn>
  );
};

/*
.slick-slide > div  // 아이템 간 여백값 넣어주기
.slick-list // 아이템 간 여백값 넣어주기
*/

const StlyedSlider = styled(Slider)`
  position: relative;

  .slick-slide > div {
    padding-right: 1.6rem;
  }

  .slick-list {
    margin-right: -1.6rem;
  }

  .slick-prev::before,
  .slick-next::before {
    display: none;
    opacity: 0;
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    background-color: ${({ theme }) => theme.colors.skscanWt};
  }
`;

// 2번째 : 맨 오른쪽 여백 제외하기 (아이템간 여백만큼 빼주기)
const CarouselContainer = styled.section`
  padding: 0 14.4rem 0 16rem;
`;

// position 맞추기
const NextBtn = styled.div`
  position: absolute;
  right: 1.5rem;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border: 1px solid ${({ theme }) => theme.colors.skscanGrey150};
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  width: 4.2rem;
  height: 4.2rem;
`;

// position 맞추기
const PrevBtn = styled.div`
  position: absolute;
  left: -2.1rem;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border: 1px solid ${({ theme }) => theme.colors.skscanGrey150};
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  width: 4.2rem;
  height: 4.2rem;
`;

const ArrowImg = styled.img`
  width: 0.897rem;
  height: 1.559rem;
`;
