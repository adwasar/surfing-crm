import { FC, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';

import DropdownMenu from '../DropdownMenu';
import SkeletonLoading from 'src/components/SkeletonLoading';

import { dropdownOptions } from 'src/pages/Dashboard/dropdownOptions';
import { barChartOptions, chartSeries } from 'src/constants/bar-chart';
import s from './BarChart.module.scss';
import pageStyle from 'src/pages/Dashboard/Dashboard.module.scss';

interface BarChartProps {}

const BarChart: FC<BarChartProps> = () => {
  const [rerender, setRerender] = useState('');

  const { t } = useTranslation();

  const customizedBarChartOptions = {
    ...barChartOptions,
    title: { ...barChartOptions.title, text: t('Chart.Overview') },
    subtitle: {
      ...barChartOptions.subtitle,
      text: t('Chart.Monthly Earning'),
    },
  };

  // const customizedDropdownOptions = dropdownOptions.map(option => ({
  //   ...option,
  //   label: t('DropdownMenu.' + option.label),
  // }));

  //-----------------delete SkeletonLoading temporarily --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  //-----------------delete SkeletonLoading temporarily --------------

  return (
    <div className={`${s.barChart} ${pageStyle.contentWrapper__rounded}`}>
      <SkeletonLoading isLoading={isLoading} type="dashboardItem" style={{ minHeight: '395px' }}>
        <div className={s.absoluteWrapper}>
          <DropdownMenu
            onHandleChange={option => {
              setRerender(option);
            }}
            options={dropdownOptions}
          />
        </div>
        <Chart key={rerender} type="bar" options={customizedBarChartOptions} series={chartSeries} />
      </SkeletonLoading>
    </div>
  );
};

export default BarChart;
