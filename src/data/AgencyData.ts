import {
  내일투어Img,
  노랑풍선Img,
  마이리얼트립Img,
  익스피디아Img,
  인터파크Img,
  참좋은여행Img,
  트리플Img,
  트립닷컴Img,
} from '../assets/image';

type AgencyImgType = {
  // eslint-disable-next-line no-unused-vars
  [key in string]: string;
};

const AGENCY_IMG: AgencyImgType = {
  인터파크: 인터파크Img,
  트리플: 트리플Img,
  마이리얼트립: 마이리얼트립Img,
  노랑풍선: 노랑풍선Img,
  트립닷컴: 트립닷컴Img,
  참좋은여행: 참좋은여행Img,
  내일여행: 내일투어Img,
  익스피디아: 익스피디아Img,
};

export default AGENCY_IMG;
