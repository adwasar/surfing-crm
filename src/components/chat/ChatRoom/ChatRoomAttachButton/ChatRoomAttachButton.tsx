import { FC, MouseEventHandler } from 'react';

import Button from 'src/components/ui/Button';

import AttachIcon from 'src/assets/icons/attach.svg?react';

interface ChatRoomAttachButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ChatRoomAttachButton: FC<ChatRoomAttachButtonProps> = ({ onClick }) => {
  return (
    <Button mods={['modColorPrime', 'modeSize3']} onClick={onClick}>
      <AttachIcon />
    </Button>
  );
};

export default ChatRoomAttachButton;
