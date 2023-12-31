import styled from 'styled-components';

import { HeartImg, StarImg } from '../../assets/image';

export interface HotelItemProps {
  hotelImg: string;
  hotelName: string;
  hotelRoom: string;
  hotelBed: string;
  hotelRate: number;
  hotelReview: string;
  hotelPrice: string;
}

const HotelItem = (props: HotelItemProps) => {
  const { hotelImg, hotelName, hotelRoom, hotelBed, hotelRate, hotelReview, hotelPrice } = props;
  return (
    <HotelItemContainer>
      <Heart src={HeartImg} alt="좋아요" />
      <ElementImg src={hotelImg} alt="이미지" />
      <DescriptionWrapper>
        <HotelDescription>
          <HotelName>{hotelName}</HotelName>
          <HotelInfoContainer>
            <HotelRoomInfo>{hotelRoom}</HotelRoomInfo>
            <HotelBedInfo>{hotelBed}</HotelBedInfo>
          </HotelInfoContainer>
        </HotelDescription>
        <HotelPriceStarContainer>
          <HotelStarContainer>
            <HotelStarImg src={StarImg} alt="별점" />
            <HotelStarRate>{hotelRate}</HotelStarRate>
            <HotelStarNum>{hotelReview}</HotelStarNum>
          </HotelStarContainer>
          <HotelPriceContainer>
            <HotelPrice>{hotelPrice}</HotelPrice>
            <HotelPerDay>/박</HotelPerDay>
          </HotelPriceContainer>
        </HotelPriceStarContainer>
      </DescriptionWrapper>
    </HotelItemContainer>
  );
};

export default HotelItem;

const HotelItemContainer = styled.article`
  position: relative;
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
  border: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.skscanGrey200};
  border-bottom: 1px solid ${({ theme }) => theme.colors.skscanGrey200};
  border-left: 1px solid ${({ theme }) => theme.colors.skscanGrey200};
  border-radius: 0 0 1.6rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  padding: 2rem;
  height: 10.6rem;
`;

const HotelDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HotelName = styled.p`
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.fonts.body05};
`;

const HotelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  ${({ theme }) => theme.fonts.caption02};
`;

const HotelRoomInfo = styled.span`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.skscanGrey700};
`;
const HotelBedInfo = styled.span`
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
  margin-bottom: 1.9rem;
  ${({ theme }) => theme.fonts.caption02};
`;

const HotelStarImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const HotelStarRate = styled.span`
  padding: 0.35rem 0;
  color: ${({ theme }) => theme.colors.skscanBk};
`;

const HotelStarNum = styled.span`
  padding: 0.35rem 0 0.35rem 0.2rem;
  color: ${({ theme }) => theme.colors.skscanGrey700};
`;

const HotelPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
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

const Heart = styled.img`
  position: absolute;
  top: 0.8rem;
  right: 1.2rem;
  cursor: pointer;
  width: 4.8rem;
  height: 4.8rem;
`;
