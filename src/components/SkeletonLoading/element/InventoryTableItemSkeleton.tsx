import { FC } from 'react';

import ContentLoader from 'react-content-loader';
import useWindowWidth from 'src/hooks/useWindowWidth';

import s from '../../inventory/TableRow/TableRow.module.scss';

interface InventoryTableItemSkeletonProps {}

const InventoryTableItemSkeleton: FC<InventoryTableItemSkeletonProps> = () => {
  const windowWidth = useWindowWidth();
  return (
    <tr className={s.tr}>
      <td className={s.name}>
        <ContentLoader
          speed={2}
          width={windowWidth > 768 ? 51 : 24}
          height={14}
          backgroundColor="#ecdfdf"
          foregroundColor="#decaca"
        >
          <circle cx={windowWidth > 768 ? '24' : '12'} cy="7" r="7" />
        </ContentLoader>
      </td>
      <td>
        <ContentLoader
          speed={2}
          width={windowWidth > 768 ? 210 : 150}
          height={14}
          viewBox={windowWidth > 768 ? '0 0 210 14' : '0 0 150 14'}
          backgroundColor="#ecdfdf"
          foregroundColor="#decaca"
        >
          <rect x="0" rx="10" ry="10" width={windowWidth > 768 ? '210' : '150'} height="14" />
        </ContentLoader>
      </td>
      <td className={s.qr}>
        <ContentLoader
          speed={2}
          width={34}
          height={14}
          viewBox="0 0 34 14"
          backgroundColor="#ecdfdf"
          foregroundColor="#decaca"
        >
          <rect x="0" rx="10" ry="10" width="34" height="14" />
        </ContentLoader>
      </td>
      <td>
        <ContentLoader
          speed={2}
          width={34}
          height={14}
          viewBox="0 0 34 14"
          backgroundColor="#ecdfdf"
          foregroundColor="#decaca"
        >
          <rect x="0" rx="10" ry="10" width="34" height="14" />
        </ContentLoader>
      </td>
      <td className={s.availability}>
        <ContentLoader
          speed={2}
          width={58}
          height={14}
          viewBox="0 0 58 14"
          backgroundColor="#ecdfdf"
          foregroundColor="#decaca"
        >
          <rect x="0" rx="10" ry="10" width="58" height="14" />
        </ContentLoader>
      </td>
      <td className={s.reg}>
        <ContentLoader
          speed={2}
          width={46}
          height={14}
          viewBox="0 0 46 14"
          backgroundColor="#ecdfdf"
          foregroundColor="#decaca"
        >
          <rect x="0" rx="10" ry="10" width="46" height="14" />
        </ContentLoader>
      </td>
      <td className={s.action}>
        <ContentLoader
          speed={2}
          width={83}
          height={14}
          viewBox="0 0 83 14"
          backgroundColor="#ecdfdf"
          foregroundColor="#decaca"
        >
          <rect x="0" rx="10" ry="10" width="83" height="14" />
        </ContentLoader>
      </td>
      <td>
        <ContentLoader
          speed={2}
          width={30}
          height={14}
          viewBox="0 0 30 14"
          backgroundColor="#ecdfdf"
          foregroundColor="#decaca"
        >
          <rect x="0" rx="10" ry="10" width="30" height="14" />
        </ContentLoader>
      </td>
    </tr>
  );
};

export default InventoryTableItemSkeleton;
