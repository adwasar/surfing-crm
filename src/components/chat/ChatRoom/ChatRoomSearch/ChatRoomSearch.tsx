import { FC, MouseEventHandler } from 'react';

import Button from 'src/components/ui/Button';

import SearchIcon from 'src/assets/icons/search-chat.svg?react';

interface ChatRoomSearchProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ChatRoomSearch: FC<ChatRoomSearchProps> = ({ onClick }) => {
  return (
    <Button mods={['modColorPrime', 'modeSize1']} onClick={onClick}>
      <SearchIcon />
    </Button>
  );
};

export default ChatRoomSearch;
