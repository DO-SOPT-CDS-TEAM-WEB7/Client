import styled from 'styled-components';

import { DownArrow, UpArrowImg } from '../../../assets/image';
import { DropDownProps } from '../DropDown';
// eslint-disable-next-line import/order
import { Arrow, Name, OptionContainer, Select } from './styles/DropDown.style';

const RecommendDropDown = (props: DropDownProps) => {
  const { isOpen, onToggle } = props;

  return (
    <RecommendDropDownContainer>
      <Select onClick={() => onToggle('recommend')} $isOpen={isOpen} className="end">
        <Name $isOpen={isOpen}>추천순</Name>
        {isOpen ? <Arrow src={UpArrowImg} alt="닫기 화살표" /> : <Arrow src={DownArrow} alt="열기 화살표" />}
      </Select>

      <OptionContainer $isOpen={isOpen} $width="10.9rem" $left="93.7rem" className="end">
        <List>
          <SortName>최저가순</SortName>
          <SortName>최단시간순</SortName>
          <SortName>출국 시간순</SortName>
          <SortName className="end">귀국 시간순</SortName>
        </List>
      </OptionContainer>
    </RecommendDropDownContainer>
  );
};

export default RecommendDropDown;

const RecommendDropDownContainer = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SortName = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey150};
  cursor: pointer;
  padding: 1.15rem 0 1.15rem 1.6rem;
  color: ${({ theme }) => theme.colors.skscanGrey800};
  ${({ theme }) => theme.fonts.caption02};

  &.end {
    border-bottom: none;
  }
`;
