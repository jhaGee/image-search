import React from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import axios from "axios";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID Fu-LBkQqkAWXkiEh70wxv6xRwLPluhu8wlqBNZcQvac",
      },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} /> <br />
        Found: {this.state.images.length} images <br />
        <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
