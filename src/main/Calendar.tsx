import { CalendarBox, CalendarExternalBox } from './Calendar.styles';
import { Clock } from '../components/Clock/Clock';
import { useState } from 'react';
import { Button } from '../components/button/Button';
import { Text } from '../App.styles';
import { Months } from './months/Months';

export const Calendar = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [isClickChangeMonth, setIsClickChangeMonth] = useState(true);

  const onClickMonth = () => {
    setIsClickChangeMonth(!isClickChangeMonth);
  };

  const onClickBackDay = () => {
    setCalendarDate(new Date(calendarDate.setDate(calendarDate.getDate() - 1)));
  };

  const onClickNextDay = () => {
    setCalendarDate(new Date(calendarDate.setDate(calendarDate.getDate() + 1)));
  };

  return (
    <CalendarExternalBox>
      <Text size="50px" mrTop="5%">
        {calendarDate.getFullYear()}
      </Text>
      <CalendarBox>
        {isClickChangeMonth ? (
          <>
            <Button onClick={onClickBackDay} iconForButton="prevArrowIcon" colorIcon="#FF5A30" />
            <Text size="140px">{calendarDate.getDate()}</Text>
            <Button onClick={onClickNextDay} iconForButton="nextArrowIcon" colorIcon="#FF5A30" />
          </>
        ) : (
          <Months />
        )}
      </CalendarBox>
      <Text size="50px" onClick={onClickMonth}>
        {calendarDate.toLocaleString('default', { month: 'long' }).toUpperCase()}
      </Text>
      <Clock />
    </CalendarExternalBox>
  );
};
