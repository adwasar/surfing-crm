import { FC, Fragment } from 'react';

import Indicator from '../../Indicator/Indicator';
import IconUser from '../../IconUser';

import FnImage from 'src/assets/icons/fn.svg?react';

import { formatRelativeDate } from 'src/utils';

import { Message } from 'src/type';

import s from './ChatRoomNotice.module.scss';
interface ChatRoomNoticeProps {
  message: Message;
  photoURL?: string;
  name: string;
  isFirstMessage: boolean;
  isLastMessage: boolean;
}

const ChatRoomNotice: FC<ChatRoomNoticeProps> = ({
  message,
  photoURL,
  name,
  isFirstMessage,
  isLastMessage,
}) => {
  return (
    <div className={`${s.notice} ${s[`notice--${message.isIn ? 'in' : 'out'}`]}`}>
      {isLastMessage ? (
        <div className={s.notice__pic}>
          <IconUser photoURL={photoURL} name={name} />
        </div>
      ) : (
        <div className={s.notice__picEmty}></div>
      )}
      <div
        className={`${s.notice__contentWrap} ${
          s[`notice__contentWrap--${isLastMessage ? 'last' : 'regular'}`]
        }`}
      >
        <div className={s.notice__content}>
          {isFirstMessage ? <div className={s.notice__title}>{name}</div> : null}
          <div className={s.notice__text}>
            {message.text.split('\n').map((line, index) => (
              <Fragment key={index}>
                {line}
                <br />
              </Fragment>
            ))}
          </div>
          {isLastMessage ? (
            <div className={s.notice__fn}>
              <FnImage />
            </div>
          ) : null}
        </div>
        <div className={s.notice__indWrap}>
          <div className={s.notice__date}>{formatRelativeDate(message.date)}</div>
          {message.isOut ? (
            <div className={s.notice__ind}>
              <Indicator isRead={Boolean(message.isRead)} isSent={Boolean(message.isSent)} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatRoomNotice;
