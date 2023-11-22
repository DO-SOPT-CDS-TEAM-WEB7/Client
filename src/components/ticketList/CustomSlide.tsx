import styled from 'styled-components';

interface CustomSlideProps {
  hotelName: string;
  hotelRoom: string;
  hotelBed: string;
}

const CustomSlide = (props: CustomSlideProps) => {
  const { hotelName, hotelRoom, hotelBed } = props;
  return (
    <ElementWrapper>
      <ElementImg alt="이미지" />
      <DescriptionWrapper>
        <HotelDescription>
          <HotelName>{hotelName}</HotelName>
          <HotelInfoContainer>
            <HotelInfo>{hotelRoom}</HotelInfo>
            <HotelInfo>{hotelBed}</HotelInfo>
          </HotelInfoContainer>
        </HotelDescription>
      </DescriptionWrapper>
    </ElementWrapper>
  );
};

export default CustomSlide;

const ElementWrapper = styled.article`
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
  padding: 0.2rem;
`;

const HotelDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: felx-start;
`;

const HotelName = styled.p`
  ${({ theme }) => theme.fonts.body05};
`;

const HotelInfoContainer = styled.div`
  margin-top: 0.5rem;
  ${({ theme }) => theme.fonts.caption02};
`;

const HotelInfo = styled.span``;
