import { FC } from 'react';

import ChatRoomNotice from '../ChatRoomNotice';

import { Message, User } from 'src/type';

import s from './ChatRoomMessages.module.scss';

interface ChatRoomMessagesProps {
  messages: Message[];
  user: User;
}

const checkLastMassage = (message: Message, nextMessage: Message) => {
  return message.isIn == nextMessage.isOut || message.isOut == nextMessage.isIn;
};

const checkFirstMassage = (message: Message, prevMessage: Message) => {
  return message.isIn == prevMessage.isOut || message.isOut == prevMessage.isIn;
};

const ChatRoomMessages: FC<ChatRoomMessagesProps> = ({ messages, user }) => {
  return (
    <div className={s.messages}>
      <ul className={s.messages__list}>
        {messages.map((message, index) => (
          <li
            key={message.id}
            className={`${s.messages__item} ${
              messages.length === index + 1 || checkLastMassage(message, messages[index + 1])
                ? s['messages__item--last']
                : ''
            }`}
          >
            <ChatRoomNotice
              message={message}
              photoURL={user.photoURL}
              name={user.name}
              isFirstMessage={Boolean(
                message.isIn && (index === 0 || checkFirstMassage(message, messages[index - 1]))
              )}
              isLastMessage={Boolean(
                message.isIn &&
                  (messages.length === index + 1 || checkLastMassage(message, messages[index + 1]))
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomMessages;
