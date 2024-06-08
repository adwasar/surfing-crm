import { FC, SelectHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import s from './DropdownMenu.module.scss';

export interface DropdownOptions {
  label: string;
  value: string;
}

interface DropdownMenuProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOptions[];
  onHandleChange: (selectedOption: string) => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ options, onHandleChange, ...rest }) => {
  const { t } = useTranslation();

  const customizedOptions = options.map(option => ({
    ...option,
    label: t('DropdownMenu.' + option.label),
  }));

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onHandleChange(event.target.value);
  };

  return (
    <select {...rest} onChange={handleDropdownChange} className={s.dropdownMenu}>
      {customizedOptions.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
