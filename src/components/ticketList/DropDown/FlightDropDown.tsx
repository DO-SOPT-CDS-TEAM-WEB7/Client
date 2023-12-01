/* eslint-disable import/order */

import { DownArrow, UpArrowImg } from '../../../assets/image';
import { DropDownProps } from '../DropDown';
import ButtonContainer from './ButtonContainer';
import { Arrow, DropDownContainer, Name, Option, Select } from './styles/DropDown.style';
import { List, Path, Price, StyledInput, StyledLabel, StyledText } from './styles/InputCustom.style';

// API 연결 필요
const FlightDropDown = (props: DropDownProps) => {
  const { isOpen, onToggle, flightList } = props;

  return (
    <DropDownContainer>
      <Select onClick={() => onToggle('flight')} $isOpen={isOpen}>
        <Name $isOpen={isOpen}>항공사</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <Option $isOpen={isOpen} $width="17.8rem" $left="43.4rem">
        <List>
          {flightList?.map((item) => (
            <StyledLabel htmlFor={item.airId.toString()} key={item.airId}>
              <StyledInput type="checkbox" id={item.airId.toString()} name={item.airName} />
              <StyledText>
                <Path>{item.airName}</Path>
                <Price>{item.minPriceString}</Price>
              </StyledText>
            </StyledLabel>
          ))}
        </List>
        <ButtonContainer />
      </Option>
    </DropDownContainer>
  );
};

export default FlightDropDown;
