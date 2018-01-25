import React, {Component} from 'react';
import Search from '../components/search.js';

class SearchContainer extends Component{
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.input.value, 'submite');
  }
  setInputRef = (element)=>{
    this.input = element;
  }
  render(){
    return(
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchContainer
