import React, { Component } from "react";
import axios from "axios";
import Qs from "qs";


const apiKey = "QLvL7aD7BW6F8MJunJyNLQ";
const url = "https://www.goodreads.com/search.xml";

class Dashboard extends Component {
  state = {
    searchResults: ""
  };

  findBook = search => {
    axios({
      method: "GET",
      url: "https://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: url,
        params: {
          key: apiKey,
          q: this.state.keywordSearch
        },
        xmlToJSON: true,
        useCache: false
      }
    }).then(res => {
      console.log(res);
      const searchResults = res.data.GoodreadsResponse.search.results.work;
      console.log(searchResults);
      this.bookResultsList(searchResults)
    });
  };

  bookResultsList = (array) => {
    const bookResults = Array.from(array);
    console.log('book results', bookResults);
  }

  keywordInput = e => {
    e.preventDefault();
    this.setState({
      keywordSearch: e.target.value
    });
  };

  submitSearch = e => {
    e.preventDefault();
    this.findBook();
  };

  render() {
    return (
      <>
        <div className="search">
          <form action="">
            <label htmlFor="search">
              <p>What do you want to read?</p>
              <input onChange={this.keywordInput} type="text" id="book" />
              <input
                onClick={this.submitSearch}
                type="submit"
                value="Find Your Book"
              />
            </label>
          </form>
        </div>
      </>
    );
  }
}

export default Dashboard;
