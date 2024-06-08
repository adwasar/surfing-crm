import { FC, FormEvent, ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import s from './SearchForm.module.scss';

interface SearchFormProps {
  onSearch: (query: string) => void;
  // TEMP SOLUTION
  variant: '#0000' | '#ffff' | '#F3F3F3';
}
const SearchForm: FC<SearchFormProps> = ({ onSearch, variant }) => {
  const [query, setQuery] = useState('');

  const { t } = useTranslation();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form
      style={{ background: variant }}
      className={`${s.searchForm} ${variant}`}
      onSubmit={handleSubmit}
    >
      <input
        className={s.searchForm__input}
        type="text"
        placeholder={t('SearchForm.Search')}
        value={query}
        onChange={handleInputChange}
      />
      <button hidden type="submit">
        {t('SearchForm.Search')}
        Search
      </button>
    </form>
  );
};

export default SearchForm;
