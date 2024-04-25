import { FC, useState } from 'react';
import { DayName, MonthDaysWrapper } from './MonthDays.styles';
import { shortDays } from '../../assets/constants/WeekDays';
import { DAYS, DAYS_LEAP } from '../../assets/constants/DaysInMonth';

interface IMonthDays {
  onClick?: () => void;
}

export const MonthDays: FC<IMonthDays> = ({}) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const daysOfMonth = [];

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  for (let i = 1; i <= days[date.getMonth()]; i++) {
    daysOfMonth.push(i);
  }
  console.log(daysOfMonth);
  const onClick = () => {
    setDate(new Date());
  };

  return (
    <MonthDaysWrapper onClick={onClick}>
      {shortDays.map((day) => (
        <DayName key={day}>{day}</DayName>
      ))}
      {daysOfMonth.map((day) => (
        <DayName key={day}>{day}</DayName>
      ))}
    </MonthDaysWrapper>
  );
};
