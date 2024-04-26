import styled from '@emotion/styled';

export const DivRoot = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const DivApp = styled.div<{ isLightTheme?: boolean }>({
  marginTop: '32px',
  marginBottom: '32px',
  marginLeft: '48px',
  marginRight: '48px',
  width: '100%',
  height: '100%',
  '@media (max-width: 769px)': {
    marginLeft: '24px',
    marginRight: '24px',
  },
  '@media (max-width: 426px)': {
    marginLeft: '16px',
    marginRight: '16px',
  },
  '@media (max-width: 321px)': {
    marginLeft: '8px',
    marginRight: '8px',
  },
});

export const Text = styled.span<{ size?: string; mrTop?: string }>(
  {
    fontWeight: '400',
    background: 'content-box',
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
    '@media (max-width: 769px)': {
      fontSize: '33px',
    },
    '@media (max-width: 426px)': {
      fontSize: '24px',
    },
    '@media (max-width: 321px)': {
      fontSize: '18px',
    },
  },
  ({ size }) => ({
    fontSize: size,
  }),
  ({ mrTop }) => ({
    marginTop: mrTop,
  })
);

export const ButtonText = styled.p({
  fontSize: '13px',
  fontWeight: '400',
  background: 'inherit',
  color: 'inherit',
  '@media (max-width: 769px)': {
    fontSize: '14px',
  },
  '@media (max-width: 426px)': {
    fontSize: '15px',
  },
  '@media (max-width: 321px)': {
    fontSize: '17px',
  },
});

export const H2 = styled.h2({
  fontSize: '20px',
  fontWeight: '800',
  '@media (max-width: 769px)': {
    fontSize: '22px',
  },
  '@media (max-width: 426px)': {
    fontSize: '24px',
  },
  '@media (max-width: 321px)': {
    fontSize: '26px',
  },
});
