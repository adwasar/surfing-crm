import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import DropdownMenu from '../DropdownMenu';
import SearchForm from '../SearchForm';

import { dropdownOptions } from 'src/pages/Dashboard/dropdownOptions';

import s from './RentalHead.module.scss';

interface TableHeadingProps {}

interface RentalHeadProps {
  handleTermChange: (term: string) => void;
  handleSearch: (query: string) => void;
  title: string;
}

const TableHeading: FC<TableHeadingProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.tableHeading}>
        <div className={s.tableHeading}>{t('TableHeading.Product Name')}</div>
        <div className={s.wrapper}>
          <div>{t('TableHeading.Stock')}</div>
          <div>{t('TableHeading.Price')}</div>
          <div>{t('TableHeading.Total Rentals')}</div>
        </div>
      </div>
      <div className={s.divider} />
    </>
  );
};

const RentalHead: FC<RentalHeadProps> = ({ handleSearch, handleTermChange, title }) => {
  return (
    <div className={s.rentalHead}>
      <div className={s.rentalHead__row}>
        <h2 className={s.rentalHead__title}>{title}</h2>
        <SearchForm variant="#F3F3F3" onSearch={handleSearch} />
        <DropdownMenu onHandleChange={handleTermChange} options={dropdownOptions} />
      </div>
      <TableHeading />
    </div>
  );
};

export default RentalHead;
