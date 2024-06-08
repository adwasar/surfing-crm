import { FC, useState } from 'react';
import moment from 'moment';

import CalendarHeader from 'src/components/calendar/CalendarHeader/CalendarHeader';
import CalendarBody from 'src/components/calendar/CalendarBody';

import s from './Calendar.module.scss';

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
  //змінні перемикання поточної дати
  const [currentDate, setCurrentDate] = useState(moment());
  const [visibleTimeStart, setVisibleTimeStart] = useState(moment().add(-12, 'hour'));
  const [visibleTimeEnd, setVisibleTimeEnd] = useState(moment().add(36, 'hour'));
  // Змінні сортування та фільтрації
  const [areaValue, setAreaValue] = useState<number | null>(null);
  const [tagsValue, setTagsValue] = useState<number | null>(null);
  const [sortValue, setSortValue] = useState<number | null>(null);
  console.log(`area: ${areaValue}, tags: ${tagsValue}, sort: ${sortValue}`);

  // Функції перемикання активної дати
  const handlePrevDate = () => {
    const newDate = currentDate.clone().subtract(1, 'day');
    setCurrentDate(newDate);
    setVisibleTimeStart(newDate.clone().add(-12, 'hour'));
    setVisibleTimeEnd(newDate.clone().add(36, 'hour'));
  };
  const handleNextDate = () => {
    const newDate = currentDate.clone().add(1, 'day');
    setCurrentDate(newDate);
    setVisibleTimeStart(newDate.clone().add(-12, 'hour'));
    setVisibleTimeEnd(newDate.clone().add(36, 'hour'));
  };
  const handleCurrentDate = () => {
    setCurrentDate(moment());
    setVisibleTimeStart(moment(moment().add(-12, 'hour')));
    setVisibleTimeEnd(moment().add(36, 'hour'));
  };
  //функція для роботи scroll
  const handleTimeChange = (visibleTimeStart: number, visibleTimeEnd: number) => {
    setVisibleTimeStart(moment(visibleTimeStart));
    setVisibleTimeEnd(moment(visibleTimeEnd));
  };

  // Функції фільтрації та сортування
  const handleAreaValue = (id: number) => {
    setAreaValue(id);
  };
  const handleTagsValue = (id: number) => {
    setTagsValue(id);
  };
  const handleSortValue = (id: number) => {
    setSortValue(id);
  };

  return (
    <div className={s.calendar}>
      <CalendarHeader
        currentDate={currentDate}
        handlePrevDate={handlePrevDate}
        handleNextDate={handleNextDate}
        handleCurrentDate={handleCurrentDate}
        handleAreaValue={handleAreaValue}
        handleTagsValue={handleTagsValue}
        handleSortValue={handleSortValue}
      />
      <CalendarBody
        visibleTimeStart={visibleTimeStart}
        visibleTimeEnd={visibleTimeEnd}
        handleTimeChange={handleTimeChange}
      />
    </div>
  );
};

export default Calendar;
