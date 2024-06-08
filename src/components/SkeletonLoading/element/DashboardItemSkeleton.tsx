import { CSSProperties, FC } from 'react';

import SurfIcon from 'src/assets/icons/surf.svg?react';

import s from '../SkeletonLoading.module.scss';

interface DefaultSkeletonProps {
  style?: CSSProperties;
}

const DashboardItemSkeleton: FC<DefaultSkeletonProps> = ({ style }) => {
  return (
    <div className={`${s.skeleton} ${s['skeleton--dashboard-item']}`} style={style}>
      <SurfIcon width="30px" height="30px" />
    </div>
  );
};

export default DashboardItemSkeleton;
