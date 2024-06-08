import { useState, useRef, ReactNode, FC } from 'react';
import { default as Chevron } from 'src/assets/icons/calendar-chevron.svg?react';
import s from './DropdownList.module.scss';

interface DropdownListPropsData {
  name: string;
  id: number;
}
interface DropdownListProps {
  defaultText: string;
  data: DropdownListPropsData[];
  action: (id: number) => void;
  children: ReactNode;
}
const DropdownList: FC<DropdownListProps> = ({ defaultText, data, action, children }) => {
  const dropdownListRef = useRef<HTMLDivElement>(null);
  const [showList, setShowList] = useState(false);
  const [buttonText, setButtonText] = useState(defaultText);

  const handleClickAction = (id: number, name: string) => {
    action(id);
    setButtonText(name);
    setShowList(false);
  };

  return (
    <div
      className={s.dropdownList}
      ref={dropdownListRef}
      onMouseEnter={() => {
        setShowList(true);
      }}
      onMouseLeave={() => {
        setShowList(false);
      }}
    >
      <button className={`${s.dropdownList__trigger} ${showList ? s.active : ''}`}>
        {children}
        {buttonText}
        <span className={s.chevron}>
          <Chevron />
        </span>
      </button>
      {data && Array.isArray(data) && data.length > 0 && (
        <ul className={`${s.dropdownList__list} ${showList ? s.active : ''}`}>
          {data.map(item => (
            <li
              className={s.item}
              onClick={() => {
                handleClickAction(item.id, item.name);
              }}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropdownList;
