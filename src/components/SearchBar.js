import { useState } from 'react';

const SearchBar = ({ onSubmit, widget }) => {
  const [term, setTerm] = useState('landscape');

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>{widget} Search</label>
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
