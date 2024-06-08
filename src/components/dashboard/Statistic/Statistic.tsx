import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import StatisticItem from '../StatisticItem';

import MoneyReceive from 'src/assets/icons/money-receive.svg?react';
import WalletMoney from 'src/assets/icons/wallet-money.svg?react';
import Boards from 'src/assets/icons/boards.svg?react';

import s from './Statistic.module.scss';

interface Statistic {}

const Statistic: FC<Statistic> = () => {
  const { t } = useTranslation();

  return (
    <div className={s.statistic}>
      <StatisticItem
        children={<MoneyReceive className={s.icon} />}
        title={t("StatisticItem.Earning")}
        count={`$${189}${t('StatisticItem.Unit count')}`}
        percent={37.8}
        period={t('StatisticItem.month')}
      />
      <span className={s.delimiter}></span>
      <StatisticItem
        children={<WalletMoney className={s.icon}/>}
        title={t("StatisticItem.Total income")}
        count={`$${2.4}${t('StatisticItem.Unit count')}`}
        percent={-2}
        period={t('StatisticItem.month')}
      />
      <span className={s.delimiter}></span>
      <StatisticItem
        children={<Boards className={s.icon}/>}
        title={t("StatisticItem.Total Rentals")}
        count={`1302`}
        percent={11}
        period={t('StatisticItem.week')}
      />
    </div>
  );
};

export default Statistic;
