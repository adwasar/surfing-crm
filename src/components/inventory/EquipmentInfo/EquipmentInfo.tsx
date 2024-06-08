import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QRCodeSVG } from 'qrcode.react';

import Select from 'src/components/Select';
import SkeletonLoading from 'src/components/SkeletonLoading';
import EquipmentInfoInput from 'src/components/inventory/EquipmentInfoInput';

import s from './EquipmentInfo.module.scss';
import vars from '../../../assets/scss/vars.module.scss';

import image from '../../../assets/images/equipment-example.png';
import ArrowIcon from '../../../assets/icons/arrow-triangle.svg?react';
import EyeIcon from '../../../assets/icons/eye.svg?react';

interface ItemProps {
  name: string;
  description: string;
  material: string;
  type: string;
  unitMeasurement: string;
  length: number;
  width: number;
  thickness: number;
  volume: number;
  tailShape: string;
  noseShape: string;
  rails: string;
  rocker: string;
  rentedAmount: number;
  rentedTime: string;
  rank: number;
  totalRanks: number;
  qrCode: string;
}

interface EquipmentInfoProps {
  item: ItemProps;
}

const selectOptions = ['first', 'second', 'third'];
const selectStyles = {
  border: `1px solid ${vars.colorGray4}`,
  borderRadius: '12px',
  padding: '14px 17px ',
  color: vars.colorTextGray7,
  lineHeight: '1.19',
};


const EquipmentInfo: FC<EquipmentInfoProps> = ({ item }) => {
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200000);
  }, []);
  const toggleEditorMode = () => {
    setDisabled(!disabled);
  };

  return (
    <SkeletonLoading isLoading={isLoading} type="equipmentInfo">
      <section className={s.card}>
        <div className={s.card__img}>
          <img src={image} alt="Equipment image" />
          <button className={s.allPhotoBtn}>{t('Inventory.See all photos')}</button>
        </div>
        <div className={s.card__info}>
          <div className={s.leftSide}>
            <div className={s.leftSide__firstGroup}>
              <div className={s.leftSide__img}>
                <img src={image} alt="Equipment image" />
                <button className={s.allPhotoBtn}>{t('Inventory.See all photos')}</button>
              </div>
              <div className={s.leftSide__inputContainer}>
                <EquipmentInfoInput
                  name={t('Inventory.Name')}
                  defaultValue={item.name}
                  flexibleWidth={true}
                  disabled={disabled}
                />
                <EquipmentInfoInput
                  name={t('Inventory.Description')}
                  defaultValue={item.description}
                  kind="textarea"
                  disabled={disabled}
                  flexibleWidth={true}
                />
              </div>
            </div>
            <div className={s.card__desktopGroup}>
              <EquipmentInfoInput
                name={t('Inventory.Name')}
                defaultValue={item.name}
                flexibleWidth={true}
                disabled={disabled}
              />
              <EquipmentInfoInput
                name={t('Inventory.Description')}
                defaultValue={item.description}
                kind="textarea"
                disabled={disabled}
                flexibleWidth={true}
              />
            </div>
            <div className={s.leftSide__selectContainer}>
              <Select
                name={t('Inventory.Plastic')}
                options={selectOptions}
                fontSize={14}
                style={selectStyles}
                arrow={ArrowIcon}
                flexibleWidth={true}
                label={t('Inventory.Material')}
                textColor={vars.colorTextBlack2}
                disabled={disabled}
                labelGap={5}
              />
              <Select
                name={t('Inventory.Surf board')}
                options={selectOptions}
                fontSize={14}
                style={selectStyles}
                arrow={ArrowIcon}
                flexibleWidth={true}
                label={t('Inventory.Type')}
                textColor={vars.colorTextBlack2}
                disabled={disabled}
                labelGap={5}
              />
            </div>
            </div>
          <div className={s.rightSide}>
           <div className={s.aaa}>
              <div className={s.inputGroup1}>
                <EquipmentInfoInput
                  name={t('Inventory.Length')}
                  defaultValue={`${item.length} ${item.unitMeasurement}`}
                  disabled={disabled}
                />
                <EquipmentInfoInput
                  name={t('Inventory.Width')}
                  defaultValue={`${item.width} ${item.unitMeasurement}`}
                  disabled={disabled}
                />
                <EquipmentInfoInput
                  name={t('Inventory.Thickness')}
                  defaultValue={`${item.thickness} ${item.unitMeasurement}`}
                  disabled={disabled}
                />
                <EquipmentInfoInput
                  name={t('Inventory.Volume')}
                  defaultValue={`${item.volume} ${item.unitMeasurement}`}
                  disabled={disabled}
                />
                <Select
                  name={t('Inventory.Square')}
                  options={selectOptions}
                  fontSize={14}
                  style={selectStyles}
                  arrow={ArrowIcon}
                  label={t('Inventory.Tail shape')}
                  textColor={vars.colorTextBlack2}
                  disabled={disabled}
                  labelGap={5}
                />
                <Select
                  name={t('Inventory.Pointed')}
                  options={selectOptions}
                  fontSize={14}
                  style={selectStyles}
                  arrow={ArrowIcon}
                  label={t('Inventory.Nose shape')}
                  textColor={vars.colorTextBlack2}
                  disabled={disabled}
                  labelGap={5}
                />
                <Select
                  name={t('Inventory.Soft')}
                  options={selectOptions}
                  fontSize={14}
                  style={selectStyles}
                  arrow={ArrowIcon}
                  label={t('Inventory.Rails')}
                  textColor={vars.colorTextBlack2}
                  disabled={disabled}
                  labelGap={5}
                />
                <Select
                  name={t('Inventory.High nose rocker')}
                  options={selectOptions}
                  fontSize={14}
                  style={selectStyles}
                  arrow={ArrowIcon}
                  label={t('Inventory.Rocker')}
                  textColor={vars.colorTextBlack2}
                  disabled={disabled}
                  labelGap={5}
                />
              </div>
              <div className={s.qrCode}>
                <QRCodeSVG
                  value={item.qrCode}
                />
              </div>
           </div>
            <div className={s.inputGroup}>
              <EquipmentInfoInput
                name={t('Inventory.In current month')}
                defaultValue={t('Inventory.rented times', { rentedAmount: item.rentedAmount })}
                disabled={disabled}
              />
              <EquipmentInfoInput
                name={t('Inventory.Average rent time')}
                defaultValue={item.rentedTime}
                disabled={disabled}
              />
              <EquipmentInfoInput
                name={t('Inventory.Ranked')}
                defaultValue={`${item.rank} ${t('Inventory.out of')} ${item.totalRanks}`}
                disabled={disabled}
              />
              <div className={s.btnGroup}>
                <EquipmentInfoInput
                  onClick={toggleEditorMode}
                  defaultValue={
                    disabled ? t('Inventory.Edit listing') : t('Inventory.Save changes')
                  }
                  type="button"
                />
                <button type="button" className={s.button}>
                  <EyeIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SkeletonLoading>
  );
};

export default EquipmentInfo;
