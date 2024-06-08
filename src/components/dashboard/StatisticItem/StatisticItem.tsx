import { FC, ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import s from './StatisticItem.module.scss';

import arrowUp from 'src/assets/icons/arrow-up-stat.svg';
import arrowDown from 'src/assets/icons/arrow-down-stat.svg';
import SkeletonLoading from 'src/components/SkeletonLoading';

interface StatisticItemProps {
  children: ReactNode;
  title: string;
  count: string;
  percent: number;
  period: string;
}

export const StatisticItem: FC<StatisticItemProps> = ({
  children,
  title,
  count,
  percent,
  period,
}) => {
  const { t } = useTranslation();

  const positiveStat = percent > 0;

  //-----------------delete SkeletonLoading temporarily --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1700);
  }, []);
  //-----------------delete SkeletonLoading temporarily --------------

  return (
    <SkeletonLoading isLoading={isLoading} type="dashboardItem" style={{ height: '84px' }}>
      <div className={s.item}>
        <div className={s.item__imgContainer}>{children}</div>
        <div className={s.item__wrapper}>
          <span className={s.item__title}>{title}</span>
          <span className={s.item__count}>{count}</span>
          <div className={s.item__statistic}>
            <img
              className={s.item__arrow}
              src={positiveStat ? arrowUp : arrowDown}
              alt="arrow up"
            />
            <span className={positiveStat ? s.item__positiveStatistic : s.item__negativeStatistic}>
              {percent}%
            </span>
            {t('StatisticItem.this')} {period}
          </div>
        </div>
      </div>
    </SkeletonLoading>
  );
};
