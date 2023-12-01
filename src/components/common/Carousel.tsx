import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { BackwardArrow, ForwardArrow } from '../../assets/image';

interface CarouselProps {
  children: React.ReactNode;
  dataLength: number;
}

const Carousel = (props: CarouselProps) => {
  const { children, dataLength } = props;
  const disappearindex: number = dataLength - 4;
  const [currentslide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow currentslide={currentslide} disappearindex={disappearindex} />,
    prevArrow: <PrevArrow currentslide={currentslide} disappearindex={disappearindex} />,
    afterChange: (index: number) => setCurrentSlide(index),
    beforeChange: (next: number) => setCurrentSlide(next),
  };

  // data에 따른 map, prop 전달
  return (
    <CarouselContainer>
      <StlyedSlider {...settings}>{children}</StlyedSlider>
    </CarouselContainer>
  );
};

export default Carousel;

interface ArrowProps {
  className?: string;
  disappearindex?: number;
  currentslide?: number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// 전체 요소 개수 -1 -3 만큼 넣어주기
const NextArrow = (props: ArrowProps) => {
  const { disappearindex, className, currentslide, style, onClick } = props;
  return (
    <NextBtn
      className={className}
      style={{ ...style, display: 'flex', visibility: currentslide === disappearindex ? 'hidden' : 'visible' }}
      onClick={onClick}>
      <ArrowImg src={ForwardArrow} alt="다음으로" />
    </NextBtn>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { currentslide, className, style, onClick } = props;
  return (
    <PrevBtn
      className={className}
      style={{ ...style, display: 'flex', visibility: currentslide === 0 ? 'hidden' : 'visible' }}
      onClick={onClick}>
      <ArrowImg src={BackwardArrow} alt="이전으로" />
    </PrevBtn>
  );
};

// 캐러셀 컴포넌트 라이브러리 레이아웃 커스텀
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

const CarouselContainer = styled.section`
  display: block;
  padding-right: -1.6rem;
`;

// 화살표 커스텀
const NextBtn = styled.div`
  position: absolute;
  right: -2.1rem;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey150};
  border-radius: 5rem;
  box-shadow: 0 0.4rem 2.5rem 0;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  width: 4.2rem;
  height: 4.2rem;
`;

const PrevBtn = styled.div`
  position: absolute;
  left: -2.1rem;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey150};
  border-radius: 5rem;
  box-shadow: 0 0.4rem 2.5rem 0;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  width: 4.2rem;
  height: 4.2rem;
`;

const ArrowImg = styled.img`
  width: 0.897rem;
  height: 1.559rem;
`;
