import styled from '@emotion/styled';

export const CalendarExternalBox = styled.div({
  width: '40%',
  height: '75%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'url(../assets/img/background2.png)',
  borderRadius: '10px',
  border: '1px solid #000',
  boxShadow: '0px 0px 26px 13px rgba(204, 18, 75, 0.28)',
  flexDirection: 'column',
});

export const CalendarBox = styled.div({
  width: '75%',
  height: '75%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  border: '1px solid #be00ff99',
  borderRadius: '5px',
  backgroundColor: '#9c347780',
});

export const MonthsBox = styled.div({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 80px)',
  justifyContent: 'space-around',
});

export const DayBox = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
});

export const DateBox = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});
