import { FC, useEffect, useState } from 'react';
import { DayName, MonthDaysWrapper } from './MonthDays.styles';
import { shortDays } from '../../assets/constants/WeekDays';
import { DAYS_LEAP, DAYS } from '../../assets/constants/DaysInMonth';

interface IMonthDays {
  onClick?: () => void;
}

export const MonthDays: FC<IMonthDays> = ({}) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const getStartDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  const onClick = () => {
    setDate(new Date());
  };

  return (
    <MonthDaysWrapper onClick={onClick}>
      {shortDays.map((day) => (
        <DayName key={day}>{day}</DayName>
      ))}
    </MonthDaysWrapper>
  );
};
