import 'react-datepicker/dist/react-datepicker.css';

import { CalendarContainer, CalendarContainerProps } from 'react-datepicker';
import styled from 'styled-components';

import { CloseIcon } from '../../assets/icon';

interface CalendarItemProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: CalendarContainerProps;
}

const CalendarItem = (props: CalendarItemProps) => {
  const { data, setShow } = props;
  return (
    <StyledCalendarContainer>
      <CalendarHeader>
        <TypeWrapper>
          <Type className="blue">특정날짜</Type>
          <Type className="grey">조정가능</Type>
        </TypeWrapper>
        <CloseBtn
          type="button"
          onClick={() => {
            setShow(false);
          }}>
          <IconImg src={CloseIcon} alt="CloseBtn" />
        </CloseBtn>
      </CalendarHeader>
      <MonthContainer>{data.children}</MonthContainer>
    </StyledCalendarContainer>
  );
};

export default CalendarItem;

const StyledCalendarContainer = styled(CalendarContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  margin: 0;
`;

const TypeWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-radius: 4rem;
  background-color: ${({ theme }) => theme.colors.skscanGrey100};
`;

const Type = styled.span`
  border-radius: 4rem;
  padding: 1.2rem 1.8rem;
  width: 9.2rem;
  height: 4.4rem;
  ${({ theme }) => theme.fonts.body06};

  &.blue {
    background-color: ${({ theme }) => theme.colors.skscanSecondary};
    color: ${({ theme }) => theme.colors.skscanWt};
  }

  &.grey {
    color: ${({ theme }) => theme.colors.skscanGrey500};
  }
`;

const IconImg = styled.img`
  object-fit: contain;
`;

const MonthContainer = styled.div`
  display: flex;
  gap: 2.4rem;
`;
