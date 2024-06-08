import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface CalendarSkeletonProps {}

const CalendarSkeleton: FC<CalendarSkeletonProps> = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={600}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="5" rx="2" ry="2" width="140%" height="55" />
    <rect x="5" y="65" rx="2" ry="2" width="330" height="600" />
    <rect x="340" y="65" rx="2" ry="2" width="100%" height="600" />
  </ContentLoader>
);

export default CalendarSkeleton;
