/* stylelint-disable selector-class-pattern */
import 'react-datepicker/dist/react-datepicker.css';

import { ko } from 'date-fns/locale';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <CalendarWrapper>
      <StyledDatePicker
        locale={ko}
        dateFormat="MM.dd"
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        monthsShown={2}
      />
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.section``;

const StyledDatePicker = styled(DatePicker)`
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading09};

  &:focus {
    outline: none;
  }
`;
