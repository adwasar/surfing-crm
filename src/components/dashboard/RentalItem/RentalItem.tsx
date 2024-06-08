import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency, RentalItem as RentalItemData } from '../RentalTable/RentalTable';

import s from './RentalItem.module.scss';

const currencySymbols: Record<Currency, string> = {
  euro: '€',
  usd: '$',
  pound: '£',
};

interface RentalItemProps {
  item: RentalItemData;
}

const RentalItem: FC<RentalItemProps> = ({ item }) => {
  const { t } = useTranslation();

  const customizedItem = {
    ...item,
    description: t('RentalItem.' + item.description),
    title: t('RentalItem.' + item.title),
  };

  return (
    <a href="#!" title={customizedItem.title}>
      <div className={s.rentalItem}>
        <div className={s.rentalItem__description}>
          <div className={s.rentalItem__description__image}>
            <img src={customizedItem.img} alt={customizedItem.title} />
          </div>
          <div className={s.wrapper}>
            <h3 className={s.rentalItem__description__title}>{customizedItem.title}</h3>
            <p className={s.rentalItem__description__additional}>{customizedItem.description}</p>
          </div>
        </div>
        <div className={s.rentalItem__values}>
          <p className={s.rentalItem__values__stockAmount}>{customizedItem.stockAmount}</p>
          <p className={s.rentalItem__values__price}>
            {currencySymbols[customizedItem.currency]} {customizedItem.price}
          </p>
          <p className={s.rentalItem__values__rentalsAmount}>{customizedItem.totalRentals}</p>
        </div>
      </div>
    </a>
  );
};

export default RentalItem;
