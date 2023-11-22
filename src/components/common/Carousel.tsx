import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { BackwardArrow, ForwardArrow } from '../../assets/image';

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
    <NextBtn className={className} style={{ ...style, display: 'flex' }} onClick={onClick}>
      <ArrowImg src={ForwardArrow} alt="다음으로" />
    </NextBtn>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <PrevBtn className={className} style={{ ...style, display: 'flex' }} onClick={onClick}>
      <ArrowImg src={BackwardArrow} alt="이전으로" />
    </PrevBtn>
  );
};

const StlyedSlider = styled(Slider)`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0 16rem;

  .slick-prev::before,
  .slick-next::before {
    display: none;
    opacity: 0;
  }

  .slick-prev:hover,
  .slick-prev:focus {
    background-color: ${({ theme }) => theme.colors.skscanWt};
  }

  .slick-slide div {
    display: flex;
    align-items: center;
    border: 1px solid;
    width: 25rem;
    height: 30.8rem;
  }
`;

const NextBtn = styled.div`
  position: absolute;
  right: 13.9rem;
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

const PrevBtn = styled.div`
  position: absolute;
  left: 13.9rem;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border: 1px solid ${({ theme }) => theme.colors.skscanGrey150};
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  width: 4.2rem;
  height: 4.2rem;
`;
