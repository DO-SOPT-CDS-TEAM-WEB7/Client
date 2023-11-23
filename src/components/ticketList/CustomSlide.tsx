import styled from 'styled-components';

interface CustomSlideProps {
  hotelName: string;
  hotelRoom: string;
  hotelBed: string;
}

const CustomSlide = (props: CustomSlideProps) => {
  const { hotelName, hotelRoom, hotelBed } = props;
  return (
    <ElementContainer>
      <ElementImg alt="이미지" />
      <DescriptionWrapper>
        <HotelDescription>
          <HotelName>{hotelName}</HotelName>
          <HotelInfoContainer>
            <HotelInfo>{hotelRoom}</HotelInfo>
            <HotelInfo>{hotelBed}</HotelInfo>
          </HotelInfoContainer>
        </HotelDescription>
        <HotelPriceStarContainer>
          <HotelStarContainer>
            <HotelStarImg alt="별점" />
            <HotelStarRate>4.7</HotelStarRate>
            <HotelStarNum>(173)</HotelStarNum>
          </HotelStarContainer>
          <HotelPriceContainer>
            <HotelPrice>75,113원</HotelPrice>
            <HotelPerDay>/박</HotelPerDay>
          </HotelPriceContainer>
        </HotelPriceStarContainer>
      </DescriptionWrapper>
    </ElementContainer>
  );
};

export default CustomSlide;

const ElementContainer = styled.article`
  border: 1px solid;
  border-radius: 1.6rem;
  width: 25rem;
  height: 30.8rem;
`;

const ElementImg = styled.img`
  border-radius: 0.1rem 0.1rem 0 0;
  width: 100%;
  height: 20.2rem;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid;
  padding: 2rem;
  height: 10.6rem;
`;

const HotelDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const HotelName = styled.p`
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.fonts.body05};
`;

const HotelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 0.5rem;
  ${({ theme }) => theme.fonts.caption02};
`;

const HotelInfo = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey700};
`;

const HotelPriceStarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HotelStarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.6rem;
  ${({ theme }) => theme.fonts.caption02};
`;

const HotelStarImg = styled.img`
  margin: 0.3rem;
`;

const HotelStarRate = styled.span`
  padding: 0.35rem 0;
  color: ${({ theme }) => theme.colors.skscanBk};
`;

const HotelStarNum = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey700};
`;

const HotelPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const HotelPrice = styled.span`
  margin-right: 0.2rem;
  color: ${({ theme }) => theme.colors.skscanBk};
  ${({ theme }) => theme.fonts.caption01};
`;

const HotelPerDay = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey700};
  ${({ theme }) => theme.fonts.caption02};
`;

// 가격 부분 flex 작성 필요, 커밋 푸시 필요
// children으로 변경 필요
// 반응형 필요
// 반응형일시 화살표 포지션 정하기
