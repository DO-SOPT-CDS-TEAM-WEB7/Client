import react from 'React';
import styled from 'styled-components';

import Carousel from '../common/Carousel';

const TEST = ['1', 2, 3, 4, 5];

const CarouselTest = () => {
  return (
    <Carousel>
      {TEST.map((item, idx) => (
        <Test key={idx} width="25rem" height="21.7rem">
          {item}
        </Test>
      ))}
    </Carousel>
  );
};

interface TestProps {
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  children: any;
}

const Test = (props: TestProps) => {
  const { style, children, width, height } = props;
  const combinedStyle: React.CSSProperties = {
    ...(style || {}),
    width,
    height,
  };

  return <TestDiv style={combinedStyle}>{children}</TestDiv>;
};

export default CarouselTest;

const TestDiv = styled.div`
  width: 25rem;
  height: 21.7rem;
`;
