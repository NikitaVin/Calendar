import { FC, useCallback } from 'react';

interface IArrowIcon {
  onClick?: () => void;
  color?: string;
  icons?: string;
}

export const SVGIcon: FC<IArrowIcon> = ({ color, icons = '', onClick }) => {
  const iconFoo = useCallback(() => {
    switch (icons) {
      case 'prevArrowIcon':
        return (
          <svg
            onClick={onClick}
            width="65px"
            height="65px"
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <style>{`svg { background: none; }`}</style>
            <path
              d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'nextArrowIcon':
        return (
          <svg
            onClick={onClick}
            width="65px"
            height="65px"
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  }, [icons, color, onClick]);
  return <>{iconFoo()}</>;
};
