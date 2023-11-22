import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { BackwardArrow, ForwardArrow } from '../../assets/image';
// import Test from '../priceCompare/CarouselTest';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = (props: CarouselProps) => {
  const { children } = props;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    variableWidth: true,
  };
  return <StlyedSlider {...settings}>{children}</StlyedSlider>;
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

// interface TestProps {
//   style?: React.CSSProperties;
//   width?: string;
//   height?: string;
// }

// 내가 정의하는 컴포넌트 (라이브러리의 div.slick-slide의 자식으로 꽉 차도록)
// 컴포넌트 만들어서 export할 때 내 width랑 height값 넘겨주기
// const Test = (props: TestProps) => {
//   const { style } = props;
//   return <TestDiv style={{ ...style, width: '25rem', height: '21.7rem' }}></TestDiv>;
// };

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
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    background-color: ${({ theme }) => theme.colors.skscanWt};
  }

  .slick-list {
    width: 100%;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    margin-right: 1.6rem;
    border: 1px solid;
    width: 25rem;
    height: 21.7rem;
  }
`;
/* 
.slick-slider (전체 요소 포함 부모)
  > .slick-list (눈에 보이는 요소 포함 부모)
    > .slick-track (전체 요소 포함 track)
        > .slick-slide (라이브러리 상 각 요소 wrapper)
            > .내가 정의한 컴포넌트 요소

라이브러리 상의 각 요소들 wrapper
.slick-slide {
    width: 내 컴포넌트 element width값
    height: 내 컴포넌트 element height값
}
 */

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

// const TestDiv = styled.div`
//   width: 25rem;
//   height: 21.7rem;
// `;
