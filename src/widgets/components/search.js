import React from 'react';
import './search.css';

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}>
    <input
      ref={props.setRef}
      className="Search-input"
      type="text"
      name="search"
      placeholder="Busca tu video favorito o usuarios..."
    />
  </form>
)

export default Search;
