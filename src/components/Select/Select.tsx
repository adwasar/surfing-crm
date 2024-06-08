import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/inventory/Button';
import s from './Select.module.scss';
import ArrowIcon from '../../assets/icons/arrow-down.svg?react';
import classNames from 'classnames';

interface SelectProps {
  name: string | undefined;
  label?: string | undefined;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  arrow?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined;
  options: string[] | undefined;
  iconWidth?: string;
  iconHeight?: number;
  arrowWidth?: number;
  arrowHeight?: number;
  style?: React.CSSProperties;
  textColor?: string;
  gap?: number;
  fontSize?: number;
  color?: string;
  flexibleWidth?: boolean;
  labelGap?: number;
  disabled?: boolean;
  mobileStyle?: boolean;
}

const Select: FC<SelectProps> = ({
  name,
  label = '',
  icon: Icon,
  arrow: Arrow = ArrowIcon,
  iconWidth = 10,
  iconHeight = 11,
  arrowWidth = 10,
  arrowHeight = 5,
  options,
  gap,
  fontSize = 12,
  color = '',
  flexibleWidth,
  textColor,
  labelGap,
  disabled = false,
  mobileStyle = false,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(name);
  const [buttonPadding, setButtonPadding] = useState<number>(0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (buttonRef.current) {
      const element = buttonRef.current;
      const computedStyle = window.getComputedStyle(element);
      const paddingValue = computedStyle.getPropertyValue('padding-left');
      setButtonPadding(parseInt(paddingValue));
    }
  }, []);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      style={{ gap: `${labelGap}px`, width: flexibleWidth ? '100%' : '' }}
      className={s.container}
    >
      {label && <span className={s.label}>{label}</span>}
      <Button
        onClick={toggleSelect}
        onMouseLeave={handleMouseLeave}
        style={{ ...style }}
        ref={buttonRef}
      >
        <div className={classNames(s.menu)}>
          <div
            className={classNames(s.select, mobileStyle ? s.mobileStyle : '')}
            style={{
              gap: gap ? `${gap}px` : '',
              fontSize: `${fontSize}px`,
            }}
          >
            {Icon && <Icon width={iconWidth} height={iconHeight} />}
            <span
              style={{ color: textColor, marginRight: disabled ? '' : '5px' }}
              className={s.select__activeOption}
            >
              {activeOption}
            </span>
            {Arrow && !disabled && (
              <Arrow
                width={arrowWidth ? arrowWidth : 10}
                height={arrowHeight ? arrowHeight : 5}
                style={isOpen ? { transform: 'rotate(180deg)' } : {}}
              />
            )}
          </div>
          {isOpen && !disabled && (
            <div
              className={s.optionContainer}
              style={{
                width: `calc(100% + ${+buttonPadding * 2}px)`,
                left: `-${buttonPadding}px`,
              }}
            >
              <ul className={s.options} style={{ bottom: `$` }}>
                {options?.map(option => (
                  <li
                    style={{ color }}
                    className={s.options__option}
                    key={option}
                    onClick={() => {
                      setActiveOption(option);
                      setIsOpen(false);
                    }}
                  >
                    {t('Inventory.' + option)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Button>
    </div>
  );
};

export default Select;
