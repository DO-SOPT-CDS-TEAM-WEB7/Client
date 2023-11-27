import styled from 'styled-components';

import { LeftArticleImg, RightArticleImg1, RightArticleImg2 } from '../../assets/image';

const Insight = () => {
  return (
    <InsightContainer>
      <Title>여행 가기 전, 스카이스캐너 인사이트로 준비해요</Title>
      <ArticleContainer>
        <LeftArticle>
          <ArticleImg src={LeftArticleImg} alt="LeftArticleImg" />
          <ArticleInfo className="left">
            <LeftArticleType>트렌드 알아보기</LeftArticleType>
            <ArticleContent>
              <ContentTitle className="left">맛성비 여행 좋아하세요?</ContentTitle>
              <ContentDetail>
                최신 여행 업계와 여행객들의 트렌드를 알려드리는
                <br />
                스카이스캐너만의 트래블 2024 보고서를 공개해요
              </ContentDetail>
            </ArticleContent>
          </ArticleInfo>
        </LeftArticle>
        <RightArticles>
          <RightArticle>
            <ArticleImg src={RightArticleImg1} alt="RightArticleImg1" />
            <ArticleInfo className="right">
              <RightArticleType>스카이스캐너 활용법</RightArticleType>
              <ContentTitle className="right">
                저렴한 비행기 티켓을
                <br />
                찾아내는 방법 7가지
              </ContentTitle>
            </ArticleInfo>
          </RightArticle>
          <RightArticle>
            <ArticleImg src={RightArticleImg2} alt="RightArticleImg2" />
            <ArticleInfo className="right">
              <RightArticleType>항공권 예매 꿀팁</RightArticleType>
              <ContentTitle className="right">
                마감임박 항공권,
                <br />
                이렇게 찾아봐요
              </ContentTitle>
            </ArticleInfo>
          </RightArticle>
        </RightArticles>
      </ArticleContainer>
    </InsightContainer>
  );
};

export default Insight;

const InsightContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading04};
`;

const ArticleContainer = styled.section`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  height: 38rem;
`;

const Article = styled.div`
  display: flex;
  position: relative;
`;

const LeftArticle = styled(Article)`
  width: 60.4rem;
`;

const RightArticles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.6rem;
`;

const RightArticle = styled(Article)`
  width: 100%;
  height: 18.2rem;
`;

const ArticleImg = styled.img`
  z-index: -1;
  border-radius: 0.8rem;
  overflow: hidden;
  object-fit: cover;
`;

const ArticleInfo = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &.left {
    padding: 2.4rem 2.5rem;
  }

  &.right {
    padding: 2rem 2.4rem;
  }
`;

const ArticleType = styled.span`
  border-radius: 6rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  width: max-content;
  color: ${({ theme }) => theme.colors.skscanGrey900};
`;

const LeftArticleType = styled(ArticleType)`
  padding: 1.6rem 2.8rem;
  ${({ theme }) => theme.fonts.heading07};
`;

const RightArticleType = styled(ArticleType)`
  padding: 1rem 2rem;
  ${({ theme }) => theme.fonts.heading13};
`;

const ArticleContent = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const ContentTitle = styled.span`
  color: ${({ theme }) => theme.colors.skscanWt};

  &.left {
    ${({ theme }) => theme.fonts.heading02};
  }

  &.right {
    ${({ theme }) => theme.fonts.heading06};
  }
`;

const ContentDetail = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey100};
  ${({ theme }) => theme.fonts.body04};
`;
