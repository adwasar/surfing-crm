import { FC } from 'react';

import Indicator from '../Indicator';
import IconUser from '../IconUser';

import { formatRelativeDate } from 'src/utils';

import { User } from 'src/type';

import s from './CaptionChatRoom.module.scss';
interface UserItemProps {
  uid: string;
  user: User;
  selectUser: (uid: string) => void;
}

const CaptionChatRoom: FC<UserItemProps> = ({ uid, user, selectUser }) => {
  return (
    <div
      className={`${s.caption} ${user.uid === uid ? s.active : ''}`}
      onClick={() => selectUser(user.uid)}
    >
      <div className={s.caption__pic}>
        <IconUser photoURL={user.photoURL} name={user.name} />
      </div>
      <div className={s.caption__info}>
        <div className={s.caption__userName}>{user.name}</div>
        <div className={s.caption__message}>
          <div className={s.caption__sign}>You:</div>
          <div className={s.caption__title}>{user.lastMessage}</div>
        </div>
      </div>
      <div className={s.caption__iconWrap}>
        <Indicator isRead={Boolean(user.isRead)} isSent={Boolean(user.isSent)} />
      </div>
      <div className={s.caption__date}>{formatRelativeDate(user.dateLastMassage)}</div>
    </div>
  );
};

export default CaptionChatRoom;
