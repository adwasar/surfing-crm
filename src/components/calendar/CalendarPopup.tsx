import { FC } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import { CalendarItemType } from 'src/type/calendar';

interface CalendarPopupProps {
  activeItem: CalendarItemType;
  hoveredItemPosition: { top: number; left: number };
}

const CalendarPopup: FC<CalendarPopupProps> = ({ activeItem, hoveredItemPosition }) => {
  const { t } = useTranslation();

  return (
    <ul
      className="rct-item__description-block"
      style={{
        position: 'absolute',
        top: hoveredItemPosition.top - 180,
        left: hoveredItemPosition.left - 50, // Відступ праворуч
      }}
    >
      <li>
        <span>{t('Calendar.Title')}:</span> {activeItem.title}
      </li>
      <li>
        <span>{t('Calendar.Start Time')}:</span>{' '}
        {moment(activeItem.start_time).format('DD.MM.YYYY - HH:mm')}
      </li>
      <li>
        <span>{t('Calendar.End Time')}:</span>{' '}
        {moment(activeItem.end_time).format('DD.MM.YYYY - HH:mm')}
      </li>
      {activeItem.description && (
        <li>
          <span>{t('Calendar.Description')}:</span> {activeItem.description}
        </li>
      )}
    </ul>
  );
};

export default CalendarPopup;
