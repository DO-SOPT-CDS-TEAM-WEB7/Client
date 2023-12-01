import {
  ExpediaNoBgImg,
  InterparkNoBgImg,
  MyrealtripNoBgImg,
  TommorowTourNoBgImg,
  TripDotComNoBgImg,
  TripleNoBgImg,
  VerygoodTravelNoBgImg,
  YellowBallonNoBgImg,
} from '../assets/image';

type AgencyNoBgImgType = {
  // eslint-disable-next-line no-unused-vars
  [key in string]: string;
};

const AGENCY_NO_BG_IMG: AgencyNoBgImgType = {
  인터파크: InterparkNoBgImg,
  트리플: TripleNoBgImg,
  마이리얼트립: MyrealtripNoBgImg,
  노랑풍선: YellowBallonNoBgImg,
  트립닷컴: TripDotComNoBgImg,
  참좋은여행: VerygoodTravelNoBgImg,
  내일여행: TommorowTourNoBgImg,
  익스피디아: ExpediaNoBgImg,
};

export default AGENCY_NO_BG_IMG;
