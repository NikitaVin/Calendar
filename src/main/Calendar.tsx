import { CalendarBox, CalendarExternalBox } from './Calendar.styles';
import { Clock } from '../components/Clock/Clock';

export const Calendar = () => {
  return (
    <CalendarExternalBox>
      <CalendarBox>Calendar here</CalendarBox>
      <Clock />
    </CalendarExternalBox>
  );
};
