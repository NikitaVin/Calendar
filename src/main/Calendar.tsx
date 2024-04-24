import { CalendarBox, CalendarExternalBox } from './Calendar.styles';
import { Clock } from '../components/Clock/Clock';
import { useState } from 'react';
import { Button } from '../components/button/Button';
import { Text } from '../App.styles';

export const Calendar = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());

  const onClickBackDay = () => {
    setCalendarDate(new Date(calendarDate.setDate(calendarDate.getDate() - 1)));
  };

  const onClickNextDay = () => {
    setCalendarDate(new Date(calendarDate.setDate(calendarDate.getDate() + 1)));
  };

  return (
    <CalendarExternalBox>
      <Text size="50px">{calendarDate.getFullYear()}</Text>
      <CalendarBox>
        <Button onClick={onClickBackDay} iconForButton="prevArrowIcon" colorIcon="#FF5A30" />
        <Text size="140px">{calendarDate.getDate()}</Text>
        <Button onClick={onClickNextDay} iconForButton="nextArrowIcon" colorIcon="#FF5A30" />
      </CalendarBox>
      <Text size="50px">{calendarDate.toLocaleString('default', { month: 'long' })}</Text>
      <Clock />
    </CalendarExternalBox>
  );
};
