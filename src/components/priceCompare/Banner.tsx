import styled from 'styled-components';

import { HeadBanner } from '../../assets/image';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImg src={HeadBanner} />
      <BannerContents>
        <Title>삿포로</Title>
        <Description>서울 · 삿포로 왕복 항공편</Description>
      </BannerContents>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  position: absolute;
  top: 3.6rem;
  left: 0;
  width: 100%;
`;

const BannerImg = styled.img`
  position: absolute;
  width: 100%;
  height: 17.3rem;
`;

const BannerContents = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  margin-top: 7.2rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.heading01}

  color: ${({ theme }) => theme.colors.skscanWt};
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.caption03}

  color: ${({ theme }) => theme.colors.skscanWt};
`;
