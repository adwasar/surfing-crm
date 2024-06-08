import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import CaptionChatRoom from '../CaptionChatRoom';
import ChatHeader from '../ChatHeader';
import SkeletonLoading from 'src/components/SkeletonLoading';

import { User } from 'src/type';

import s from './ChatPanel.module.scss';

interface ChatPanelProps {
  uid: string;
  contacts: User[];
  selectUser: (uid: string) => void;
}

const ChatPanel: FC<ChatPanelProps> = ({ uid, contacts, selectUser }) => {
  const { t } = useTranslation()
  //-----------------delete SkeletonLoading temporarily --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  //-----------------delete SkeletonLoading temporarily --------------
  return (
    <div className={s.panel}>
      <ChatHeader>
        <div className={s.panel__info}>
          <div className={s.panel__infoName}>{t("Chat.Main chat")}</div>
          {contacts && <div className={s.panel__infoValue}>{contacts.length}</div>}
        </div>
      </ChatHeader>
      <ul className={s.panel__list}>
        <SkeletonLoading type="contacts" isLoading={isLoading}>
          {contacts.map(contact => (
            <li key={contact.uid} className={s.panel__item}>
              <CaptionChatRoom user={contact} selectUser={selectUser} uid={uid} />
            </li>
          ))}
        </SkeletonLoading>
      </ul>
    </div>
  );
};

export default ChatPanel;
