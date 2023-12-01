/* eslint-disable import/order */
import { DownArrow, UpArrowImg } from '../../../assets/image';
import { DropDownProps } from '../DropDown';
import ButtonContainer from './ButtonContainer';
import { Arrow, DropDownContainer, Name, Option, Select } from './styles/DropDown.style';
import { List, Path, Price, StyledInput, StyledLabel, StyledText } from './styles/InputCustom.style';

const PathDropDown = (props: DropDownProps) => {
  const { isOpen, onToggle, onCancle } = props;

  return (
    <DropDownContainer>
      <Select onClick={() => onToggle('path')} $isOpen={isOpen} id="path">
        <Name $isOpen={isOpen}>경유</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <Option $isOpen={isOpen} $width="17.8rem" $left="0">
        <List>
          <StyledLabel htmlFor="직항">
            <StyledInput type="checkbox" id="직항" name="직항" />
            <StyledText>
              <Path>직항</Path>
              <Price>000,000원부터</Price>
            </StyledText>
          </StyledLabel>
          <StyledLabel htmlFor="직항">
            <StyledInput type="checkbox" id="직항" name="직항" />
            <StyledText>
              <Path>직항</Path>
              <Price>000,000원부터</Price>
            </StyledText>
          </StyledLabel>
          <StyledLabel htmlFor="경유">
            <StyledInput type="checkbox" id="직항" name="직항" />
            <StyledText>
              <Path>2번 이상 경유</Path>
              <Price>없음</Price>
            </StyledText>
          </StyledLabel>
        </List>
        <ButtonContainer onCancel={onCancle}/>
      </Option>
    </DropDownContainer>
  );
};

export default PathDropDown;
