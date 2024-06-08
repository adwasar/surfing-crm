import { FC } from 'react';

import ChatRoomSearch from './ChatRoomSearch';
import ChatRoomTitle from './ChatRoomTitle';
import ChatRoomMenuButton from './ChatRoomMenuButton';
import ChatRoomControl from './ChatRoomControl';
import ChatRoomMessages from './ChatRoomMessages';
import ChatHeader from '../ChatHeader';

import { Message, User } from 'src/type';

import s from './ChatRoom.module.scss';

interface ChatRoomProps {
  messages: Message[];
  user: User;
}

const ChatRoom: FC<ChatRoomProps> = ({ messages, user }) => {
  return (
    <div className={s.chatRoom}>
      <ChatHeader>
        <div className={s.chatRoom__title}>
          <ChatRoomTitle photoURL={user.photoURL} name={user.name} />
        </div>
        <ul className={s.chatRoom__nav}>
          <li className={s.chatRoom__nav_item}>
            <ChatRoomSearch />
          </li>
          <li className={s.chatRoom__nav_item}>
            <ChatRoomMenuButton />
          </li>
        </ul>
      </ChatHeader>
      <div className={s.chatRoom__main}>
        <ChatRoomMessages messages={messages} user={user} />
      </div>
      <div className={s.chatRoom__footer}>
        <ChatRoomControl />
      </div>
    </div>
  );
};

export default ChatRoom;
