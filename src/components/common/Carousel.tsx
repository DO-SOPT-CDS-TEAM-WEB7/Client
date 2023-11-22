import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { BackwardImg, ForwardImg } from '../../assets/image';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <StlyedSlider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
      <div>
        <h3>9</h3>
      </div>
    </StlyedSlider>
  );
};

export default Carousel;

interface ArrowProps {
  className?: string;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <NextBtn className={className} style={style} onClick={onClick}>
      <ArrowImg src={ForwardImg} alt="다음으로" />
    </NextBtn>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <PrevBtn className={className} style={style} onClick={onClick}>
      <ArrowImg src={BackwardImg} alt="이전으로" />
    </PrevBtn>
  );
};

const StlyedSlider = styled(Slider)`
  position: relative;
  padding: 2rem;

  .slick-prev::before,
  .slick-next::before {
    display: none;
    opacity: 0;
  }

  .slick-slide {
    cursor: pointer;
    height: 5rem;
  }
`;

const NextBtn = styled.div`
  position: absolute;
  right: 1rem;
  z-index: 3;
  width: 4.2rem;
  height: 4.2rem;
`;

const ArrowImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;

const PrevBtn = styled.div`
  position: absolute;
  left: 1rem;
  z-index: 3;
  width: 4.2rem;
  height: 4.2rem;
`;
