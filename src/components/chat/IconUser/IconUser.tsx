import { FC } from 'react';

import ImageLoading from 'src/components/ui/ImageLoading';

import s from './IconUser.module.scss';

interface IconUserProps {
  photoURL?: string;
  name: string;
}

const IconUser: FC<IconUserProps> = ({ photoURL, name }) => {
  return (
    <div className={s.iconUser__text}>
      {photoURL ? (
        <ImageLoading src={photoURL} alt={name} className={s.iconUser__img} />
      ) : (
        name
          .split(' ')
          .map(word => word.charAt(0).toUpperCase())
          .join('')
      )}
    </div>
  );
};

export default IconUser;
