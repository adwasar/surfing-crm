import { FC, ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SearchIcon from 'src/assets/icons/calendar-search.svg?react';
import CloseIcon from 'src/assets/icons/calendar-close.svg?react';

import s from './CalendarSearch.module.scss';

interface CalendarSearchProps {}

const CalendarSearch: FC<CalendarSearchProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { t } = useTranslation();

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    console.log('Введений запит:', value);
  };

  return (
    <div className={s.calendarSearch}>
      <form className={s.form}>
        <span className={`${s.icon} ${searchQuery.length > 0 && s.close}`}>
          {searchQuery.length > 0 ? (
            <CloseIcon onClick={() => setSearchQuery('')} />
          ) : (
            <SearchIcon />
          )}
        </span>

        <input
          placeholder={t("Calendar.Search listings")}
          value={searchQuery}
          onChange={handleSearchInputChange}
          className={s.searchInput}
        />
      </form>
    </div>
  );
};

export default CalendarSearch;
