import styled from '@emotion/styled';

export const ButtonWrapper = styled.div<{ mrTop?: string }>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    background: 'content-box',
    borderRadius: '50%',
    ':hover': {
      background: 'rgba(255, 90, 48, 0.4)',

      borderRadius: '50%',
    },
    ':active': {
      background: 'rgba(255, 90, 48, 0.4)',
      borderRadius: '50%',
      boxShadow: '0px 0px 26px 13px rgba(204, 18, 75, 0.7)',
      animationDuration: '0.5s',
    },
  },
  ({ mrTop }) => ({
    marginTop: mrTop,
  })
);

export const MyButton = styled.button({
  width: '100%',
  height: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '50px',
  color: '#FF5A30',
});
