import { FC, ReactNode } from 'react';

import s from './ChatHeader.module.scss';

interface ChatHeaderProps {
  children: ReactNode;
}

const ChatHeader: FC<ChatHeaderProps> = ({ children }) => {
  return <div className={s.header}>{children}</div>;
};

export default ChatHeader;
