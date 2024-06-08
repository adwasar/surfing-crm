import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';

import PhotoIcon from '../../../../assets/icons/photo-add.svg?react';

import s from './InputFile.module.scss';

interface InputFileProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: FC<InputFileProps> = ({ onChange }) => {
  const { t } = useTranslation()
  
  return (
    <div className={s.input}>
      <div className={s.placeholder}>
        <PhotoIcon width={29} height={29} />
        <span className={s.placeholder__text}>{t("Inventory.add photo here")}</span>
      </div>
      <input onChange={onChange} type="file" className={s.inputFile} />
    </div>
  );
};

export default InputFile;
