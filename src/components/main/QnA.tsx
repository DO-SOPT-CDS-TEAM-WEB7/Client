import styled from 'styled-components';

import { ArrowDownIcon, ArrowRightGrayIcon } from '../../assets/icon';

const QnA = () => {
  return (
    <QnAContainer>
      <QnAHeader>
        <Title>자주 묻는 질문을 확인해보세요</Title>
        <SeeAll>
          전체보기
          <IconImg src={ArrowRightGrayIcon} alt="ArrowRightGrayIcon" />
        </SeeAll>
      </QnAHeader>
      <QnAListContainer>
        <QnAListWrapper>
          <ListContent>항공권을 예약한 후에는 어떻게 되나요?</ListContent>
          <IconImg src={ArrowDownIcon} alt="ArrowDownIcon" />
        </QnAListWrapper>
        <QnAListWrapper>
          <ListContent>특가 및 저가 항공권에 대한 최신 정보를 받아보려면 어떻게 해야 하나요?</ListContent>
          <IconImg src={ArrowDownIcon} alt="ArrowDownIcon" />
        </QnAListWrapper>
        <QnAListWrapper>
          <ListContent>지금 어디로 가는 항공권을 예약하는 게 좋은가요?</ListContent>
          <IconImg src={ArrowDownIcon} alt="ArrowDownIcon" />
        </QnAListWrapper>
        <QnAListWrapper>
          <ListContent>이산화탄소 배출량이 적은 항공편을 예약할 수 있나요?</ListContent>
          <IconImg src={ArrowDownIcon} alt="ArrowDownIcon" />
        </QnAListWrapper>
      </QnAListContainer>
    </QnAContainer>
  );
};

export default QnA;

const QnAContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  margin-bottom: 7.9rem;
`;

const QnAHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading04};
`;

const SeeAll = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.skscanGrey800};
  ${({ theme }) => theme.fonts.body04};
`;

const QnAListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const QnAListWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey150};
  padding: 1.8rem 2rem;
  width: 100%;
  height: 5.8rem;
`;

const ListContent = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.body03};
`;

const IconImg = styled.img`
  object-fit: contain;
`;
