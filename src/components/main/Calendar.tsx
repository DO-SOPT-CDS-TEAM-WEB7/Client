import 'react-datepicker/dist/react-datepicker.css';

import { ko } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/icon';
import { userInputState, userInputType } from '../../states/userInputState';
import formatDate from '../../utils/formateDate';
// eslint-disable-next-line import/order
import CalendarItem from './CalendarItem';
type MoveBtnProps = {
  $headerCount: number;
};

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEnddate] = useState<Date | null>(null);
  const setUserInput = useSetRecoilState(userInputState);
  const userInput = useRecoilValue(userInputState);

  // 요일 변환
  // '2024-01-04'
  function searchBarFormatDate(inputDate: Date | string): string {
    const daysOfWeek: string[] = ['일', '월', '화', '수', '목', '금', '토'];

    const dateObject: Date = new Date(inputDate);
    const month: number = dateObject.getMonth() + 1;
    const day: number = dateObject.getDate();
    const dayOfWeek: string = daysOfWeek[dateObject.getDay()];

    const formattedDate: string = `${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}(${dayOfWeek})`;

    return formattedDate;
  }

  const formattedStartDate = searchBarFormatDate(userInput.startDate);
  const formattedEndDate = searchBarFormatDate(userInput.endDate);
  const placeholder =
    userInput.startDate && userInput.endDate ? `${formattedStartDate} ~ ${formattedEndDate}` : '날짜 선택';

  const selectDays = (dates: [Date, Date]) => {
    setStartDate(dates[0]);
    setEnddate(dates[1]);

    setUserInput((prev: userInputType) => ({
      ...prev,
      startDate: formatDate(dates[0]),
      endDate: formatDate(dates[1]),
    }));
  };

  const [isSame, setSame] = useState(false);

  useEffect(() => {
    setSame(
      startDate?.getFullYear() === endDate?.getFullYear() &&
        startDate?.getMonth() === endDate?.getMonth() &&
        startDate?.getDate() === endDate?.getDate(),
    );
  }, [startDate, endDate]);

  const [show, setShow] = useState(true);

  return (
    <CalendarWrapper $isSame={isSame} $show={show}>
      <StyledDatePicker
        renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
          <StyledHeader>
            <MoveBtn type="button" className="left" $headerCount={customHeaderCount} onClick={decreaseMonth}>
              <IconImg src={ArrowLeftIcon} alt="ArrowLeftIcon" />
            </MoveBtn>
            <DateHeader>
              {monthDate.toLocaleString('ko', {
                month: 'long',
                year: 'numeric',
              })}
            </DateHeader>
            <MoveBtn type="button" className="right" $headerCount={customHeaderCount} onClick={increaseMonth}>
              <IconImg src={ArrowRightIcon} alt="ArrowRightIcon" />
            </MoveBtn>
          </StyledHeader>
        )}
        placeholderText={placeholder}
        locale={ko}
        dateFormat="MM.dd(EE)"
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        selectsRange={true}
        onChange={selectDays}
        onInputClick={() => setShow(true)}
        monthsShown={2}
        showDisabledMonthNavigation
        disabledKeyboardNavigation
        onChangeRaw={(e) => e.preventDefault()}
        renderDayContents={(day) => <DayWrapper>{day}</DayWrapper>}
        calendarContainer={(props) => <CalendarItem data={props} setShow={setShow} />}
      />
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.section<{ $isSame: boolean; $show: boolean }>`
  position: relative;

  & div {
    margin: 0;
    padding: 0;
  }

  .react-datepicker-popper {
    inset: 0 -33.8rem auto auto !important;
    visibility: ${({ $show }) => ($show ? null : 'hidden')};
    margin-top: 5.35rem;
    border-radius: 1.2rem;
    background-color: ${({ theme }) => theme.colors.skscanWt};
    padding: 2.4rem;
    color: ${({ theme }) => theme.colors.skscanGrey900};
    ${({ theme }) => theme.effects.boxDrop};
  }

  /* stylelint-disable selector-class-pattern */
  .react-datepicker__input-container ::placeholder {
    color: ${({ theme }) => theme.colors.skscanGrey900};
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__header {
    border: none;
    background-color: ${({ theme }) => theme.colors.skscanWt};
  }

  .react-datepicker__day-names {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 2rem;
    height: 4.8rem;
    ${({ theme }) => theme.fonts.body03};

    & > div {
      display: flex;
      justify-content: center;
    }
  }

  .react-datepicker__month {
    ${({ theme }) => theme.fonts.body03};
  }

  .react-datepicker__week {
    display: flex;
  }

  .react-datepicker__day {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin: 1.1rem 0.5rem;
    border-radius: 50%;
    width: 3.8rem;
    height: 3.8rem;

    &:hover {
      border: 0.15rem solid ${({ theme }) => theme.colors.skscanSecondary};
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.skscanWt};
    }

    &--today {
      background-color: ${({ theme }) => theme.colors.skscanGrey100};
      font-weight: 500;
    }

    &--outside-month {
      visibility: hidden;
    }

    &--disabled {
      color: ${({ theme }) => theme.colors.skscanGrey400} !important;
      pointer-events: none;
    }

    &--selected,
    &--in-selecting-range,
    &--in-range {
      margin: 1.1rem 0;
      border: none !important;
      border-radius: 0 !important;
      background-color: ${({ theme }) => theme.colors.skscanSecondary2}!important;
      width: 4.8rem;
      color: ${({ theme }) => theme.colors.skscanSecondary}!important;
    }

    &--selecting-range-start,
    &--selecting-range-end,
    &--range-start,
    &--range-end {
      margin: 1.1rem 0.5rem;
      border: none !important;
      border-radius: 50% !important;
      background-color: ${({ theme }) => theme.colors.skscanSecondary}!important;
      width: 3.8rem;
      color: ${({ theme }) => theme.colors.skscanWt} !important;
    }

    &--selecting-range-start::before,
    &--selecting-range-end::before,
    &--range-end::before,
    &--range-start::before {
      position: absolute;
      z-index: 1;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.skscanSecondary};
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.colors.skscanWt};
      content: '';
    }

    &--selecting-range-start::after,
    &--range-start::after {
      display: ${({ $isSame }) => ($isSame ? 'none' : 'block')};
      position: absolute;
      top: 0;
      left: 50%;
      background-color: ${({ theme }) => theme.colors.skscanSecondary2};
      width: 2.4rem;
      height: 100%;
      content: '';
    }

    &--selecting-range-end::after,
    &--range-end::after {
      display: ${({ $isSame }) => ($isSame ? 'none' : 'block')};
      position: absolute;
      top: 0;
      right: 50%;
      background-color: ${({ theme }) => theme.colors.skscanSecondary2};
      width: 2.4rem;
      height: 100%;
      content: '';
    }
  }
`;

const StyledDatePicker = styled(DatePicker)`
  border: none;
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading09};

  &:focus {
    outline: none;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
`;

const DateHeader = styled.span`
  ${({ theme }) => theme.fonts.body01};
`;

const MoveBtn = styled.button<MoveBtnProps>`
  padding: 0;
  width: 2rem;
  height: 2rem;

  &.left {
    visibility: ${({ $headerCount }) => ($headerCount === 1 ? 'hidden' : null)};
  }

  &.right {
    visibility: ${({ $headerCount }) => ($headerCount === 0 ? 'hidden' : null)};
  }
`;

const IconImg = styled.img`
  object-fit: contain;
`;

const DayWrapper = styled.span`
  z-index: 5;
`;
