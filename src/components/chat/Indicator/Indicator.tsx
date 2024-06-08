import { FC } from 'react';

import SentIcon from 'src/assets/icons/sent.svg?react';
import ReadIcon from 'src/assets/icons/read.svg?react';

import s from './Indicator.module.scss';

interface IndicatorProps {
  isSent: boolean;
  isRead: boolean;
}

const Indicator: FC<IndicatorProps> = ({ isSent, isRead }) => {
  return (
    <div className={s.indicator}>
      <div className={`${s.indicator__icon} ${s.indicator__icon_sent} ${isSent ? s.active : ''}`}>
        <SentIcon />
      </div>
      <div className={`${s.indicator__icon} ${s.indicator__icon_read} ${isRead ? s.active : ''}`}>
        <ReadIcon />
      </div>
    </div>
  );
};

export default Indicator;
