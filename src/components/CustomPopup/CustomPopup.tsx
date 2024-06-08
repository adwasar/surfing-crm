import { FC, ReactNode } from 'react';
import Popup from 'reactjs-popup';
import useWindowWidth from 'src/hooks/useWindowWidth';

import s from './CustomPopup.module.scss';
import './popup.scss';

import CloseIcon from '../../assets/icons/close.svg?react';

type CustomPopupProps = {
  children: ReactNode;
  title?: string;
  open: boolean;
  closeModal: () => void;
};
const CustomPopup: FC<CustomPopupProps> = ({ children, title, open, closeModal }) => {
  const width = useWindowWidth();

  return (
    <Popup open={open} closeOnDocumentClick={width > 1020 ? true : false} onClose={closeModal} modal>
      <div className={s.popoverContainer}>
        <div className={s.popover}>
          <header className={s.popover__header}>
            <h2 className={s.popover__name}>{title}</h2>
            <button onClick={closeModal} className={s.popover__btn}>
              <CloseIcon />
            </button>
          </header>
          {children}
        </div>
      </div>
    </Popup>
  );
};

export default CustomPopup;
