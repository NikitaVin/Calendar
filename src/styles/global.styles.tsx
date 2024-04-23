import { fontStyle } from './font.styles';
import { css, Global } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${fontStyle}

        html {
          height: 100%;
        }

        html,
        body {
          position: relative;
          font-family: 'Ubuntu', sans-serif;
          overflow-x: auto;
          width: 100%;
          background-color: #f6f6f6;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          border: 0;
          -color: inherit;
        }

        span {
          background-color: inherit;
        }

        svg {
          background-color: inherit;
        }

        button {
          cursor: pointer;
        }
      `}
    />
  );
};
