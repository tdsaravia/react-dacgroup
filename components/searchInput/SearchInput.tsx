import React from 'react';
import styles from './SearchInput.module.scss';

type Props = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
};

const SearchInput: React.FC<Props> = ({ value, onChange, onClear }) => {
  return (
    <div className={styles.search_input_container}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        className={styles.search_input}
      />
      {value && (
        <button type="button" className={styles.clear_button} onClick={onClear}>
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchInput;
