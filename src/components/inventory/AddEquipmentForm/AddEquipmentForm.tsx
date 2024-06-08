import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import EquipmentInfoInput from '../EquipmentInfoInput';
import Select from 'src/components/Select';
import ArrowIcon from '../../../assets/icons/arrow-triangle.svg?react';
import ChatRoomSendButton from 'src/components/chat/ChatRoom/ChatRoomSendButton';

import s from './AddEquipmentForm.module.scss';
import vars from '../../../assets/scss/vars.module.scss';

interface AddEquipmentFormProps {
  closeModal: () => void;
  openEquipmentPhotoModal: () => void;
}

const AddEquipmentForm: FC<AddEquipmentFormProps> = ({ openEquipmentPhotoModal }) => {
  const { t } = useTranslation();
  const selectStyles = {
    border: `1px solid ${vars.colorGray4}`,
    borderRadius: '12px',
    padding: '14px 14px',
    color: vars.colorTextGray7,
  };

  const maxTextareaLength = 20;
  const selectOptions = ['first', 'second', 'third'];
  const [valueLength, setValueLength] = useState<number>(0);
  const getValueLength = (valueLength: number) => {
    setValueLength(valueLength);
  };
  return (
    <section className={s.section}>
      <div className={s.equipmentForm}>
        <div className={s.equipmentForm__leftSide}>
          <EquipmentInfoInput
            name={t('Inventory.Upload QR')}
            label={false}
            placeholder={true}
            type="file"
            flexibleWidth={true}
          />
          <EquipmentInfoInput
            name={t('Inventory.Name')}
            label={false}
            placeholder={true}
            flexibleWidth={true}
          />
          <div className={s.textareaContainer}>
            <EquipmentInfoInput
              name={t('Inventory.Add Description')}
              label={false}
              placeholder={true}
              kind="textarea"
              height={260}
              maxLength={maxTextareaLength}
              getValueLength={getValueLength}
            />
            <span>
              {t('Inventory.Characters')}: {valueLength}/{maxTextareaLength}
            </span>
          </div>
        </div>
        <div className={s.equipmentForm__rightSide}>
          <Select
            name={t('Inventory.Material')}
            options={selectOptions}
            fontSize={14}
            style={selectStyles}
            arrow={ArrowIcon}
            flexibleWidth={true}
          />
          <Select
            name={t('Inventory.Select category')}
            options={selectOptions}
            fontSize={14}
            style={{ ...selectStyles }}
            arrow={ArrowIcon}
            flexibleWidth={true}
          />
          <div>
            <span className={s.size}>{t('Inventory.Size')}</span>
            <div className={s.container}>
              <EquipmentInfoInput name={t('Inventory.Length')} label={false} placeholder={true} />
              <EquipmentInfoInput name={t('Inventory.Width')} label={false} placeholder={true} />
              <EquipmentInfoInput
                name={t('Inventory.Thickness')}
                label={false}
                placeholder={true}
              />
            </div>
          </div>
          <div className={s.container}>
            <EquipmentInfoInput name={t('Inventory.Volume')} label={false} placeholder={true} />
            <Select
              name={t('Inventory.Tail shape')}
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
            />
          </div>
          <Select
            name={t('Inventory.Nose shape')}
            options={selectOptions}
            fontSize={14}
            style={selectStyles}
            arrow={ArrowIcon}
            flexibleWidth={true}
          />
          <div className={s.container}>
            <Select
              name={t('Inventory.Rocker')}
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
            />
            <Select
              name={t('Inventory.Rails')}
              options={selectOptions}
              fontSize={14}
              style={selectStyles}
              arrow={ArrowIcon}
              flexibleWidth={true}
            />
          </div>
        </div>
      </div>
      <footer className={s.footer}>
        <ChatRoomSendButton onClick={openEquipmentPhotoModal} />
      </footer>
    </section>
  );
};

export default AddEquipmentForm;
