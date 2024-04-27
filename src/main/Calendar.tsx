import { CalendarExternalBox } from './Calendar.styles';
import { Clock } from '../components/Clock/Clock';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export const CalendarMain = () => {
  const [date, changeDate] = useState<Date | null>(new Date());

  function changeValue(val) {
    changeDate(val);
  }

  return (
    <CalendarExternalBox>
      <Calendar onChange={changeValue} value={date} />
      <Clock />
    </CalendarExternalBox>
  );
};
