import React, { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction } from 'react';
import classNames from 'classnames';

import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  openModal?: () => void;
  onMouseLeave?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  isSelected?: boolean;
  additionalClass?: string;
}

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { onClick, onMouseLeave, style, isSelected, children, ...rest },
  ref
) => {

  return (
    <button
      {...rest}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      className={classNames(s.btn, isSelected ? s['btn--selected'] : s['btn--unselected'])}
      style={{...style }}
      ref={ref}
    >
      {children}
    </button>
  );
};

const Button = forwardRef(ButtonComponent);

export default Button;
