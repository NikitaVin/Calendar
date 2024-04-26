import { FC, useState } from 'react';
import { DayName, MonthDaysWrapper, Wrapper } from './MonthDays.styles';
import { shortDays } from '../../assets/constants/WeekDays';
import { DAYS, DAYS_LEAP } from '../../assets/constants/DaysInMonth';
import { Button } from '../button/Button';
import { Text } from '../../App.styles';

interface IMonthDays {
  onClick?: () => void;
  monthNumber: number;
}

export const MonthDays: FC<IMonthDays> = ({ monthNumber, onClick }) => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const daysOfMonth = [];

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  for (let i = 1; i <= days[monthNumber]; i++) {
    daysOfMonth.push(i);
  }
  const onClickBRBR = () => {
    setDate(new Date());
  };

  return (
    <Wrapper>
      <Button colorIcon="#FF5A30" onClick={onClick}>
        <Text size="30px">На главную</Text>
      </Button>
      <MonthDaysWrapper onClick={onClickBRBR}>
        {shortDays.map((day) => (
          <DayName key={day}>{day}</DayName>
        ))}
        {daysOfMonth.map((day) => (
          <DayName key={day}>{day}</DayName>
        ))}
      </MonthDaysWrapper>
    </Wrapper>
  );
};
