import styled from '@emotion/styled';

export const MonthDaysWrapper = styled.div({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
});

export const DayName = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '20px',
  color: '#FF5A30',
  fontWeight: 'bold',
  ':not(:last-of-type)': {
    borderRight: '1px solid #FF5A30',
  },
});
