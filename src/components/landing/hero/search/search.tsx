import { FC, useState } from 'react';
import { Relative, SearchBtn, SearchInput } from './search.e';
import { SearchProps } from './search.t';

const Search: FC<SearchProps> = (props) => {
  const [search, setSearch] = useState('');
  return (
    <Relative>
      <SearchInput
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Nimani izlamoqdasiz?"
        type="text"
      />
      <SearchBtn onClick={() => console.log(search)}>
        <i className='fal fa-search'></i>
      </SearchBtn>
    </Relative>
  );
};

export default Search;
