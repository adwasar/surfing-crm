import { FC, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';

import SkeletonLoading from 'src/components/SkeletonLoading';

import s from './DonutChart.module.scss';
import pageStyle from 'src/pages/Dashboard/Dashboard.module.scss';

import { donutChartOptions, donutData } from 'src/constants/donut-chart';

interface ChartHeaderProps {
  title: string;
  subtitle: string;
}

const ChartHeader: FC<ChartHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={s.chartHeader}>
      <h2 className={s.chartHeader__title}>{title}</h2>
      <p className={s.chartHeader__subtitle}>{subtitle}</p>
    </div>
  );
};

const DonutChart = () => {
  const { t } = useTranslation();

    // create copy of exist object for using useTranslation hook
    const  customizedDonutChartOptions = {
      ...donutChartOptions,
      labels: donutChartOptions.labels?.map((label) => t('Chart.' + label))
    };
  
  //-----------------delete SkeletonLoading temporarily --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);
  //-----------------delete SkeletonLoading temporarily --------------

  return (
    <div className={`${pageStyle.contentWrapper__rounded} ${s.donutChart}`}>
      <SkeletonLoading isLoading={isLoading} type="dashboardItem" style={{ minHeight: '395px' }}>
        <ChartHeader title={t('Chart.Customers')} subtitle={t('Chart.New customers rental')}/>
        <div className={s.chartsWrapper}>
          <Chart type="donut" options={customizedDonutChartOptions} series={donutData} />
        </div>
      </SkeletonLoading>
    </div>
  );
};

export default DonutChart;
