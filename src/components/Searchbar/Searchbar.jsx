import { Component } from "react";
import {SearchBar,SearchForm,SearchFormButton,SearchFormButtonLabel,SearchFormInput} from './SearchBar.styled'


export class Searchbar extends Component{

    state = {
        search: '',
    }
    
    changeValue = (event) => {
        this.setState({ search: event.target.value} )
;
    }
    handelSubmit = (e) => {
        e.preventDefault()   
        this.props.onSubmit(this.state.search, 1)

    }

    render() {
        return (
          
                <SearchBar className="searchbar">
  <SearchForm className="form" onSubmit={this.handelSubmit} >
    <SearchFormButton type="submit" className="button">
      <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
    </SearchFormButton>

                        <SearchFormInput
    
                            
        className="input"
         value={this.state.search}
      type="text"
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
      onChange={this.changeValue}
    />
  </SearchForm>
</SearchBar>

           
        )
    }
}