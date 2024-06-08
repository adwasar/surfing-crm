import { FC, ReactNode } from 'react';

import s from './DashboardContainer.module.scss';

interface DashboardContainerProps {
  children: ReactNode;
}

const DashboardContainer: FC<DashboardContainerProps> = ({ children }) => {
  return <div className={s.dashboardContainer}>{children}</div>;
};

export default DashboardContainer;
