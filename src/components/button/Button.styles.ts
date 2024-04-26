import styled from '@emotion/styled';

export const ButtonWrapper = styled.button<{ mrTop?: string; disabled?: boolean }>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'content-box',
    borderRadius: '50%',
  },
  ({ mrTop }) => ({
    marginTop: mrTop,
  }),
  ({ disabled }) => ({
    cursor: disabled ? 'auto' : 'pointer',
    ':hover': {
      background: disabled ? '' : 'rgba(255, 90, 48, 0.4)',
    },
    ':active': {
      background: disabled ? '' : 'rgba(255, 90, 48, 0.4)',
      borderRadius: disabled ? '' : '50%',
      boxShadow: disabled ? '' : '0px 0px 26px 13px rgba(204, 18, 75, 0.7)',
      animationDuration: disabled ? '' : '0.5s',
    },
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
