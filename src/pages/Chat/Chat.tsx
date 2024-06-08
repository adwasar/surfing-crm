import { FC, useEffect, useState } from 'react';

import ChatRoom from 'src/components/chat/ChatRoom';
import ChatPanel from 'src/components/chat/ChatPanel';
import SkeletonLoading from 'src/components/SkeletonLoading';

import s from './Chat.module.scss';

import { data } from './data';
import { data as messages } from './messages';

interface ChatProps {}

const Chat: FC<ChatProps> = () => {
  const [uid, SetUid] = useState(data[0].uid);

  const handlerSelectUser = (uid: string) => {
    SetUid(uid);
  };

  //-----------------delete SkeletonLoading temporarily --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  //-----------------delete SkeletonLoading temporarily --------------

  return (
    <div className={s.chat}>
      <div className={s.chat__panel}>
        <ChatPanel contacts={data} selectUser={handlerSelectUser} uid={uid} />
      </div>
      <div className={s.chat__room}>
        <SkeletonLoading type="message" isLoading={isLoading}>
          <ChatRoom
            messages={messages.filter(message => message.uid === uid)}
            user={data.filter(user => user.uid === uid)[0]}
          />
        </SkeletonLoading>
      </div>
    </div>
  );
};

export default Chat;
