import { ChangeEvent, FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ChatRoomAttachButton from '../ChatRoomAttachButton';
import ChatRoomSendButton from '../ChatRoomSendButton';

import s from './ChatRoomControl.module.scss';

interface ChatRoomControlProps {}

const initRows = 1;

const ChatRoomControl: FC<ChatRoomControlProps> = () => {
  const [message, setMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { t } = useTranslation()
  
  const handleAttachClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('Select file', file);
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.rows = e.target.value.split('\n').length;
  };

  const handleSendClick = () => {
    console.log('Sent massege', message);
    setMessage('');
    if (textAreaRef.current) {
      textAreaRef.current.rows = initRows;
    }
  };

  return (
    <>
      <div className={s.control}>
        <div className={s.control__inputWrap}>
          <div className={s.control__attachWrap}>
            <ChatRoomAttachButton onClick={handleAttachClick} />
          </div>
          <div className={s.control__textAreaWrap}>
            <textarea
              ref={textAreaRef}
              value={message}
              onChange={handleChangeMessage}
              className={s.control__input}
              placeholder={t("Chat.write a message") + '...'}
              rows={initRows}
            />
          </div>
        </div>
        <ChatRoomSendButton onClick={handleSendClick} />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default ChatRoomControl;
