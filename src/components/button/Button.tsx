import { FC } from 'react';
import { ButtonWrapper } from './Button.styles';
import { SVGIcon } from '../../assets/icons/constansIcon';

interface Ibutton {
  onClick?: () => void;
  iconForButton: string;
  colorIcon?: string;
}

export const Button: FC<Ibutton> = ({ onClick, iconForButton, colorIcon }) => {
  return (
    <ButtonWrapper>
      <SVGIcon icons={iconForButton} color={colorIcon} onClick={onClick} />
    </ButtonWrapper>
  );
};
