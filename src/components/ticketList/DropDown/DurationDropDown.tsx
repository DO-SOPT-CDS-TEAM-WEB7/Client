// eslint-disable-next-line import/order
import { DownArrow, TabGraphImg, UpArrowImg } from '../../../assets/image';
// eslint-disable-next-line import/order
import { DropDownProps } from '../DropDown';
import ButtonContainer from './ButtonContainer';
import { Arrow, DropDownContainer, Name, Option, Select } from './styles/DropDown.style';
import { GraphImg, Time, TimeContainer } from './styles/Graph.style';

const DurationDropDown = (props: DropDownProps) => {
  const { isOpen, onToggle } = props;
  return (
    <DropDownContainer>

      <Select onClick={() => onToggle('duration')} $isOpen={isOpen}>
        <Name $isOpen={isOpen}>총 소요시간</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <Option $isOpen={isOpen} $width="32rem" $left="28.5rem">
        <TimeContainer>
          <Time>2.0시간 - 14.0시간</Time>
          <GraphImg src={TabGraphImg} alt="그래프" />
        </TimeContainer>

        <ButtonContainer />
      </Option>
    </DropDownContainer>
  );
};

export default DurationDropDown;
