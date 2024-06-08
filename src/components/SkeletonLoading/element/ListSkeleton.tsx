import { FC } from 'react';

import s from '../SkeletonLoading.module.scss';

import TextSkeleton from './TextSkeleton';

interface ListSkeletonProps {
  count: number;
}

const ListSkeleton: FC<ListSkeletonProps> = ({ count }) => {
  return (
    <ul className={s.skeleton__list}>
      {Array.from({ length: count }, (_, index) => (
        <li key={index} className={s.skeleton__item}>
          <TextSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default ListSkeleton;
