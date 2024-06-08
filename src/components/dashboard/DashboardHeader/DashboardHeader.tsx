import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import SearchForm from '../SearchForm';

import s from './DashboardHeader.module.scss';

interface DashboardHeaderProps {}

const DashboardHeader: FC<DashboardHeaderProps> = () => {
  const { t } = useTranslation();

  const currentUser = 'Maks';

  return (
    <div className={s.dashboardHeader}>
      <h2>
        {t('Hello currentUser', { currentUser: currentUser })} 👋,
      </h2>
      <SearchForm variant="#ffff" onSearch={() => {}} />
    </div>
  );
};

export default DashboardHeader;
