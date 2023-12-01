// eslint-disable-next-line import/order
import { DownArrow, TabGraphImg, UpArrowImg } from '../../../assets/image';
// eslint-disable-next-line import/order
import { DropDownProps } from '../DropDown';
import ButtonContainer from './ButtonContainer';
import { Arrow, DropDownContainer, Name, Option, Select } from './styles/DropDown.style';
import { Depart, GraphImg, Time, TimeContainer } from './styles/Graph.style';

const TimeDropDown = (props: DropDownProps) => {
  const { isOpen, onToggle, onCancle } = props;

  return (
    <DropDownContainer>
      <Select onClick={() => onToggle('time')} $isOpen={isOpen}>
        <Name $isOpen={isOpen}>출발 시간대 설정</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <Option $isOpen={isOpen} $width="32rem" $left="10.9rem">
        <TimeContainer>
          <Depart>가는 날 출발시간</Depart>
          <Time>오전 12:00 - 오후 11:59</Time>
          <GraphImg src={TabGraphImg} alt="그래프" />
        </TimeContainer>
        <TimeContainer>
          <Depart>오는 날 출발시간</Depart>
          <Time>오전 12:00 - 오후 11:59</Time>
          <GraphImg src={TabGraphImg} alt="그래프" />
        </TimeContainer>
        <ButtonContainer onCancel={onCancle} />
      </Option>
    </DropDownContainer>
  );
};

export default TimeDropDown;
