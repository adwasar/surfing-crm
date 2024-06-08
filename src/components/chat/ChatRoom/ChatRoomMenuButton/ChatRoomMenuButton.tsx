import { FC, MouseEventHandler } from 'react';

import Button from 'src/components/ui/Button';

import MenuIcon from 'src/assets/icons/menu.svg?react';

interface ChatRoomMenuButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ChatRoomMenuButton: FC<ChatRoomMenuButtonProps> = ({ onClick }) => {
  return (
    <Button mods={['modColorPrime', 'modeSize1']} onClick={onClick}>
      <MenuIcon />
    </Button>
  );
};

export default ChatRoomMenuButton;
