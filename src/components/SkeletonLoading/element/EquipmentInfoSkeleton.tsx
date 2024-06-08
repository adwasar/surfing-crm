import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import useWindowWidth from 'src/hooks/useWindowWidth';

interface EquipmentInfoSkeletonProps {}

const EquipmentInfoSkeleton: FC<EquipmentInfoSkeletonProps> = () => {
  const windowWidth = useWindowWidth();
  const width =
    windowWidth < 768 ? windowWidth - 40 : windowWidth < 1200 ? windowWidth - 140 : 1200;
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={'100%'}
      viewBox={`0 0 ${width} 512`}
      backgroundColor="#ecdfdf"
      foregroundColor="#decaca"
    >
      {windowWidth < 768 ? (
        <>
          <rect x="10%" y="0" rx="10" ry="10" width="80%" height="60%" />
          <rect x="10%" y="65%" rx="10" ry="10" width="80%" height="15%" />
          <rect x="10%" y="85%" rx="10" ry="10" width="80%" height="15%" />
        </>
      ) : windowWidth < 1200 ? (
        <>
          <rect x="0" y="0" rx="10" ry="10" width="40%" height="100%" />
          <rect x="45%" y="0" rx="10" ry="10" width="55%" height="13%" />
          <rect x="45%" y="14.5%" rx="10" ry="10" width="55%" height="13%" />
          <rect x="45%" y="29%" rx="10" ry="10" width="55%" height="13%" />
          <rect x="45%" y="43.5%" rx="10" ry="10" width="55%" height="13%" />
          <rect x="45%" y="58%" rx="10" ry="10" width="55%" height="13%" />
          <rect x="45%" y="72.5%" rx="10" ry="10" width="55%" height="13%" />
          <rect x="45%" y="87%" rx="10" ry="10" width="55%" height="13%" />
        </>
      ) : (
        <>
          <rect x="0" y="0" rx="10" ry="10" width="387" height="512" />
          <rect x="417" y="0" rx="3" ry="3" width="32" height="14" />
          <rect x="417" y="20" rx="3" ry="3" width="280" height="48" />
          <rect x="417" y="80" rx="3" ry="3" width="61" height="14" />
          <rect x="417" y="100" rx="3" ry="3" width="280" height="254" />
          <rect x="417" y="365" rx="3" ry="3" width="44" height="14" />
          <rect x="417" y="385" rx="3" ry="3" width="280" height="48" />
          <rect x="417" y="444" rx="3" ry="3" width="26" height="14" />
          <rect x="417" y="464" rx="3" ry="3" width="280" height="48" />

          <rect x="712" y="0" rx="3" ry="3" width="37" height="14" />
          <rect x="808" y="0" rx="3" ry="3" width="31" height="14" />
          <rect x="896" y="0" rx="3" ry="3" width="55" height="14" />

          <rect x="712" y="20" rx="3" ry="3" width="81" height="48" />
          <rect x="808" y="20" rx="3" ry="3" width="73" height="48" />
          <rect x="896" y="20" rx="3" ry="3" width="73" height="48" />

          <rect x="712" y="80" rx="3" ry="3" width="41" height="14" />
          <rect x="808" y="80" rx="3" ry="3" width="55" height="14" />
          <rect x="896" y="80" rx="3" ry="3" width="64" height="14" />

          <rect x="712" y="100" rx="3" ry="3" width="81" height="48" />
          <rect x="808" y="100" rx="3" ry="3" width="73" height="48" />
          <rect x="896" y="100" rx="3" ry="3" width="73" height="48" />

          <rect x="712" y="159" rx="3" ry="3" width="26" height="14" />
          <rect x="795" y="159" rx="3" ry="3" width="37" height="14" />

          <rect x="712" y="178" rx="3" ry="3" width="60" height="48" />
          <rect x="795" y="178" rx="3" ry="3" width="106" height="48" />

          <rect x="712" y="237" rx="3" ry="3" width="117" height="117" />

          <rect x="712" y="365" rx="3" ry="3" width="89" height="14" />
          <rect x="859" y="365" rx="3" ry="3" width="94" height="14" />

          <rect x="712" y="385" rx="3" ry="3" width="132" height="48" />
          <rect x="859" y="385" rx="3" ry="3" width="154" height="48" />

          <rect x="712" y="444" rx="3" ry="3" width="40" height="14" />
          <rect x="712" y="464" rx="3" ry="3" width="125" height="48" />
          <rect x="852" y="464" rx="3" ry="3" width="99" height="48" />
          <rect x="966" y="464" rx="3" ry="3" width="48" height="48" />
        </>
      )}
    </ContentLoader>
  );
};

export default EquipmentInfoSkeleton;
