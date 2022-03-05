import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onFormSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );

}

export default SearchBar;
