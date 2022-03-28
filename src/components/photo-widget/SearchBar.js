import { useState } from 'react';
import { StylesSearchDiv, StylesForm, StylesInput } from './PhotoStyles';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <StylesSearchDiv>
      <StylesForm onSubmit={onFormSubmit}>
        <div>
          <label>Image Search</label>
          <StylesInput type="text" value={term} onChange={e => setTerm(e.target.value)} />
        </div>
      </StylesForm>
    </StylesSearchDiv>
  );

}

export default SearchBar;
