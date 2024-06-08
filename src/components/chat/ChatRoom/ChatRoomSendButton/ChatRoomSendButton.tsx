import { FC, MouseEventHandler } from 'react';

import Button from 'src/components/ui/Button';

import SendIcon from 'src/assets/icons/send.svg?react';

interface ChatRoomSendButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ChatRoomSendButton: FC<ChatRoomSendButtonProps> = ({ onClick }) => {
  return (
    <Button mods={['modColorSecond', 'modeSize2']} onClick={onClick}>
      <SendIcon />
    </Button>
  );
};

export default ChatRoomSendButton;
