import { ButtonHTMLAttributes, FC } from 'react';

import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mods: string[];
}

const Button: FC<ButtonProps> = ({ mods, children, ...restProps }) => {
  const classNames = [s.btn, ...mods.map(mod => s[`btn--${mod}`])].join(' ');
  return (
    <button type="button" className={classNames} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
