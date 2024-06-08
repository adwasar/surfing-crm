import { FC } from 'react';
import { Moment } from 'moment';
import { useTranslation } from 'react-i18next';

import DropdownList from 'src/components/ui/DropDownList';
import Chevron from 'src/assets/icons/calendar-chevron.svg?react';
import Location from 'src/assets/icons/location.svg?react';
import Tags from 'src/assets/icons/tags.svg?react';
import Sort from 'src/assets/icons/calendar-sort.svg?react';

import s from './CalendarHeader.module.scss';

interface DataType {
  name: string;
  id: number;
}

interface CalendarHeaderProps {
  currentDate: Moment;
  handlePrevDate: () => void;
  handleNextDate: () => void;
  handleCurrentDate: () => void;
  handleAreaValue: (id: number) => void;
  handleTagsValue: (id: number) => void;
  handleSortValue: (id: number) => void;
}

const areasList: DataType[] = [
  { name: 'All areas', id: 1 },
  { name: 'Area 1', id: 2 },
  { name: 'Area 2', id: 3 },
  { name: 'Area 3', id: 4 },
  { name: 'Area 4', id: 5 },
  { name: 'Area 5', id: 6 },
  { name: 'Area 6', id: 7 },
  { name: 'Area 7', id: 8 },
];
const tagsList: DataType[] = [
  { name: 'All tags', id: 1 },
  { name: 'Tag 1', id: 2 },
  { name: 'Tag 2', id: 3 },
  { name: 'Tag 3', id: 4 },
  { name: 'Tag 4', id: 5 },
  { name: 'Tag 5', id: 6 },
];
const sortList: DataType[] = [
  { name: 'Rating', id: 2 },
  { name: 'Price', id: 3 },
  { name: 'Date', id: 4 },
];

const CalendarHeader: FC<CalendarHeaderProps> = ({
  currentDate,
  handlePrevDate,
  handleNextDate,
  handleCurrentDate,
  handleAreaValue,
  handleTagsValue,
  handleSortValue,
}) => {
  const { t } = useTranslation();

  const currentDateValue = currentDate.format('MMM D, YYYY');

  const customizedAreasList = areasList.map(el => ({ ...el, name: t('Calendar.' + el.name) }));
  const customizedTagsList = tagsList.map(el => ({ ...el, name: t('Calendar.' + el.name) }));
  const customizedSortList = sortList.map(el => ({ ...el, name: t('Calendar.' + el.name) }));
  const [firstWord, ...rest] = currentDateValue.split(' ');
  const customizedCurrentDateValue = `${t('Calendar.' + firstWord)} ${rest.join(' ')}`;

  // console.log(customizedCurrentDateValue);

  return (
    <div className={s.calendarHeader}>
      <div className={s.calendarHeader__filters}>
        <DropdownList
          defaultText={t('Calendar.All areas')}
          data={customizedAreasList}
          action={handleAreaValue}
        >
          <Location />
        </DropdownList>
        <DropdownList
          defaultText={t('Calendar.All tags')}
          data={customizedTagsList}
          action={handleTagsValue}
        >
          <Tags />
        </DropdownList>
        <div className={s.sortContainer}>
          <DropdownList
            defaultText={t('Calendar.Listed')}
            data={customizedSortList}
            action={handleSortValue}
          >
            <Sort />
          </DropdownList>
        </div>
      </div>
      <div className={s.calendarHeader__buttons}>
        <button className={s.prevDate} onClick={handlePrevDate}>
          <Chevron />
        </button>
        <div className={s.activeDate}>{customizedCurrentDateValue}</div>
        <button className={s.nextDate} onClick={handleNextDate}>
          <Chevron />
        </button>
        <button onClick={handleCurrentDate} className={s.today}>
          {t('Calendar.Today')}
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
