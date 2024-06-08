import { useState, useRef, useEffect, FC } from 'react';
import classNames from 'classnames';

import Button from '../../../components/inventory/Button';
import SearchIcon from '../../../assets/icons/search.svg?react';

import s from './Search.module.scss';

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div
      className={s.search}
      ref={searchRef}
    >
      <input
        className={classNames(
          s.search__input,
          isActive ? s['search__input--active'] : s['search__input--inactive']
        )}
        type="text"
      />
      <Button
        onClick={() => setIsActive(!isActive)}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
