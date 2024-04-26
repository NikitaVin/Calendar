import { FC } from 'react';
import { ButtonWrapper } from './Button.styles';
import { SVGIcon } from '../../assets/icons/constansIcon';

interface Ibutton {
  onClick?: () => void;
  iconForButton?: string;
  colorIcon?: string;
  children?: JSX.Element;
  mrTop?: string;
  disabled?: boolean;
}

export const Button: FC<Ibutton> = ({
  onClick,
  iconForButton,
  colorIcon,
  children,
  mrTop,
  disabled,
}) => {
  return (
    <ButtonWrapper onClick={onClick} mrTop={mrTop} disabled={disabled}>
      <SVGIcon icons={iconForButton} color={colorIcon} />
      {children}
    </ButtonWrapper>
  );
};
