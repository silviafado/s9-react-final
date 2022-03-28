import { useState } from 'react';
import { StylesSearchDiv, StylesForm, StylesInput } from '../photo-widget/PhotoStyles';

const SearchBar = ({ searchresult }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    searchresult(term);
  };

  return (
    <StylesSearchDiv>
      <StylesForm onSubmit={onSubmit}>
        <div>
          <label>Video Search</label>
          <StylesInput type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
        </div>
      </StylesForm>
    </StylesSearchDiv>
  );
};

export default SearchBar;