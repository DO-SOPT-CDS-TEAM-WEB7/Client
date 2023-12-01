import {
  ExpediaImg,
  InterparkImg,
  MyrealtripImg,
  TommorowTourImg,
  TripDotComImg,
  TripleImg,
  VerygoodTravelImg,
  YellowBallonImg,
} from '../assets/image';

type AgencyImgType = {
  // eslint-disable-next-line no-unused-vars
  [key in string]: string;
};

const AGENCY_IMG: AgencyImgType = {
  인터파크: InterparkImg,
  트리플: TripleImg,
  마이리얼트립: MyrealtripImg,
  노랑풍선: YellowBallonImg,
  트립닷컴: TripDotComImg,
  참좋은여행: VerygoodTravelImg,
  내일여행: TommorowTourImg,
  익스피디아: ExpediaImg,
};

export default AGENCY_IMG;
