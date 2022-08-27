import React from "react";

class SearchBar extends React.Component {
  state = { term: "cars" };

  onSubmit = (event) => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <label htmlFor="id">Image Search</label>
          <div className="ui huge fluid icon input" id="search">
            <input
              type="text"
              placeholder={this.state.term}
              onChange={(event) => {
                this.setState({ term: event.target.value });
              }}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
