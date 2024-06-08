import { FC } from 'react';

import IconUser from '../../IconUser';

import s from './ChatRoomTitle.module.scss';

interface ChatRoomTitleProps {
  photoURL: string | undefined;
  name: string;
}

const ChatRoomTitle: FC<ChatRoomTitleProps> = ({ photoURL, name }) => (
  <div className={s.title}>
    <div className={s.title__pic}>
      <IconUser photoURL={photoURL} name={name} />
    </div>
    <span className={s.title__name}>{name}</span>
  </div>
);

export default ChatRoomTitle;
