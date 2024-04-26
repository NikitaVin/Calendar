import styled from '@emotion/styled';

export const TimerBox = styled.div({
  width: '100%',
  height: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '50px',
  color: '#FF5A30',
  textShadow:
    '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FF5A30, 0 0 82px #FF5A30, 0 0 92px #FF5A30, 0 0 102px #FF5A30, 0 0 151px #FF5A30',
  ':keyframes': {
    '0%': {
      textShadow: '0 0 7px #fff',
    },
    '18%': {
      textShadow: '0 0 10px #fff',
    },
    '22%': {
      textShadow: '0 0 21px #fff',
    },
    '25%': {
      textShadow: '0 0 42px ##FF5A30',
    },
    '53%': {
      textShadow: '0 0 82px ##FF5A30',
    },
    '57%': {
      textShadow: '0 0 92px ##FF5A30',
    },
    '100%': {
      textShadow: '0 0 151px ##FF5A30',
    },
  },
});
