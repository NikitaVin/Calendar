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

export const Text = styled.span<{ size?: string }>(
  {
    fontWeight: '400',
    background: 'content-box',
    color: '#FF5A30',
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
