import { FC, useEffect, useRef, useState } from 'react';
import { useTextWidth } from '@tag0/use-text-width';

import s from './EquipmentInfoInput.module.scss';

import UploadIcon from '../../../assets/icons/upload.svg?react';

interface EquipmentInfoInputProps {
  name?: string;
  defaultValue?: string | undefined;
  kind?: string;
  type?: string;
  width?: number;
  height?: number;
  flexibleWidth?: boolean;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  placeholder?: boolean;
  label?: boolean;
  maxLength?: number | undefined;
  getValueLength?: (value: number) => void;
  style?: React.CSSProperties;
}

const EquipmentInfoInput: FC<EquipmentInfoInputProps> = ({
  name,
  defaultValue,
  label = true,
  kind = 'input',
  type = 'text',
  width,
  height,
  flexibleWidth = false,
  onClick,
  disabled,
  placeholder = false,
  maxLength,
  getValueLength,
  style,
}) => {
  const textWidth = useTextWidth({
    text: defaultValue?.toString() || name?.toString() || '',
    font: '14px Roboto',
  });

  const [labelPadding, setLabelPadding] = useState<number>(0);
  const [value, setValue] = useState<string>(defaultValue || '');
  const labelRef = useRef<HTMLInputElement | null>(null);
  const selectWidth = width
    ? `${width}px`
    : `${flexibleWidth ? '100%' : `${textWidth + +labelPadding * 2 + 3}px`}`;
  useEffect(() => {
    if (labelRef.current) {
      const element = labelRef.current;
      const computedStyle = window.getComputedStyle(element);
      const paddingValue = computedStyle.getPropertyValue('padding-left');
      setLabelPadding(parseInt(paddingValue));
    }
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (maxLength && inputValue.length <= maxLength) {
      setValue(e.target.value);
      if (getValueLength) getValueLength(inputValue.length);
    }
    if (!maxLength) {
      setValue(e.target.value);
    }
  };
  return (
    <label className={s.label}>
      {label ? name : ''}
      {kind === 'input' && (type === 'text' || type === 'button') && (
        <input
          type={type}
          value={value}
          className={s.input}
          style={{
            width: selectWidth,
            height: height ? `${height}px` : '',
            ...style,
          }}
          disabled={disabled}
          placeholder={placeholder ? name : ''}
          onClick={onClick}
          onChange={handleInputValue}
          ref={labelRef}
        />
      )}
      {kind === 'input' && type === 'file' && (
        <div className={s.container}>
          <button
            value={value}
            className={s.input}
            style={{
              cursor: 'pointer',
              width: `${flexibleWidth ? '100%' : `${textWidth + +labelPadding * 2 + 3}px`}`,
              ...style,
            }}
            disabled={disabled}
            onClick={onClick}
          >
            {name}
            <UploadIcon width={16} height={16} />
          </button>
          <input className={s.inputFile} type={type} />
        </div>
      )}
      {kind === 'textarea' && (
        <textarea
          className={s.textarea}
          disabled={disabled}
          value={value}
          placeholder={placeholder ? name : ''}
          style={{ width: `${width}px`, height: `${height}px`, ...style }}
          onChange={handleInputValue}
        ></textarea>
      )}
    </label>
  );
};

export default EquipmentInfoInput;
