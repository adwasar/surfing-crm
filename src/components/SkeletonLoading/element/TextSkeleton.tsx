import { FC } from 'react';

import s from '../SkeletonLoading.module.scss';

interface TextSkeletonProps {}

const TextSkeleton: FC<TextSkeletonProps> = () => {
  return <div className={`${s.skeleton} ${s['skeleton--text']}`}></div>;
};

export default TextSkeleton;
