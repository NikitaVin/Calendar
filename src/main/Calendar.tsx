import { CalendarBox, CalendarExternalBox, DateBox, DayBox, MonthsBox } from './Calendar.styles';
import { Clock } from '../components/Clock/Clock';
import { useState } from 'react';
import { Button } from '../components/button/Button';
import { Text } from '../App.styles';
import { months } from '../assets/constants/Months';
import { days } from '../assets/constants/WeekDays';
import { MonthDays } from '../components/MonthDays/MonthDays';

export const Calendar = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [isClickChangeMonth, setIsClickChangeMonth] = useState(true);
  const [isClickDay, setIsClickDay] = useState(false);
  const [monthNumber, setMonthNumber] = useState(calendarDate.getMonth());

  const onClickDay = (i: number) => {
    setIsClickDay(!isClickDay);
    setMonthNumber(i);
    setIsClickChangeMonth(!isClickChangeMonth);
  };

  const onClickChangeMonth = () => {
    setIsClickChangeMonth(!isClickChangeMonth);
  };

  const onClickMain = () => {
    setIsClickDay(!isClickDay);
    setMonthNumber(calendarDate.getMonth());
  };

  const onClickPrevDay = () => {
    setCalendarDate(new Date(calendarDate.setDate(calendarDate.getDate() - 1)));
    setMonthNumber(calendarDate.getMonth());
  };

  const onClickNextDay = () => {
    setCalendarDate(new Date(calendarDate.setDate(calendarDate.getDate() + 1)));
    setMonthNumber(calendarDate.getMonth());
  };

  return (
    <CalendarExternalBox>
      <Button>
        <Text size="50px" mrTop="5%">
          {calendarDate.getFullYear()}
        </Text>
      </Button>
      <CalendarBox>
        {isClickDay ? (
          <MonthDays monthNumber={monthNumber} onClick={onClickMain} />
        ) : (
          <>
            {isClickChangeMonth ? (
              <DayBox>
                <DateBox>
                  <Button
                    onClick={onClickPrevDay}
                    iconForButton="prevArrowIcon"
                    colorIcon="#FF5A30"
                  />
                  <Text size="140px">{calendarDate.getDate()}</Text>
                  <Button
                    onClick={onClickNextDay}
                    iconForButton="nextArrowIcon"
                    colorIcon="#FF5A30"
                  />
                </DateBox>
                <Text size="50px">{days[calendarDate.getDay()]}</Text>
              </DayBox>
            ) : (
              <MonthsBox>
                {months.map((el, i) => (
                  <Button key={el} onClick={() => onClickDay(i)}>
                    <Text size="20px">{el}</Text>
                  </Button>
                ))}
              </MonthsBox>
            )}
          </>
        )}
      </CalendarBox>

      <Button onClick={onClickChangeMonth} mrTop="6.5%">
        <Text size="50px">{months[monthNumber]}</Text>
      </Button>

      <Clock />
    </CalendarExternalBox>
  );
};
