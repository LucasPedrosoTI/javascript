import React from "react";
import SimpleReactValidator from "simple-react-validator";
import Yelp from "../../utils/Yelp";

import "./SearchBar.css";
import Autocomplete from "react-autocomplete";

import { LocationSearchInput } from "../PlacesAutoComplete/PlacesAutoComplete";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
      prices: [],
      latitude: 0,
      longitude: 0,
      autocompleteList: [{ text: "Pizza" }, { text: "Burger" }],
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.autocompleteYelp = this.autocompleteYelp.bind(this);
    this.generateAutocompleteList = this.generateAutocompleteList.bind(this);

    this.priceOptions = {
      $: "1",
      $$: "2",
      $$$: "3",
      $$$$: "4",
    };

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.setState({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    }

    this.generateAutocompleteList();
  }

  generateAutocompleteList() {
    return this.state.autocompleteList;
  }

  autocompleteYelp(text, latitude, longitude) {
    Yelp.autocomplete(text, latitude, longitude).then((data) => {
      this.setState({ autocompleteList: data });
    });
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? "active" : "";
  }

  handleSortByChange(sortByOption) {
    this.setState(
      {
        sortBy: sortByOption,
      },
      () => {
        this.handleSearch();
      }
    );
  }

  handleTermChange(e) {
    this.setState(
      {
        term: e.target.value,
      },
      () => {
        if (this.state.term.length > 0)
          this.autocompleteYelp(
            this.state.term,
            this.state.latitude,
            this.state.longitude
          );
      }
    );
  }

  handleLocationChange(address) {
    this.setState({
      location: address,
    });
  }

  handlePriceChange(event) {
    const { checked, value } = event.target;

    if (checked) {
      return this.setState({ prices: [...this.state.prices, value] }, () =>
        this.handleSearch()
      );
    } else {
      const removedValues = this.state.prices.filter(
        (price) => price !== value
      );

      return this.setState({ prices: removedValues }, () =>
        this.handleSearch()
      );
    }
  }

  handleSearch(e) {
    if (e) {
      e.preventDefault();
    }

    if (this.validator.allValid()) {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy,
        this.state.prices
      );
    } else {
      this.validator.showMessages();
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      const sortByOptionValue = this.sortByOptions[sortByOption];

      return (
        <li
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
        >
          {sortByOption}
        </li>
      );
    });
  }

  renderPriceOptions() {
    return Object.keys(this.priceOptions).map((priceOption) => {
      const priceOpionValue = this.priceOptions[priceOption];

      return (
        <li key={priceOpionValue}>
          <input
            type="checkbox"
            id={priceOpionValue}
            value={priceOpionValue}
            onChange={(event) => this.handlePriceChange(event)}
          />
          <label htmlFor={priceOpionValue}>{priceOption}</label>
        </li>
      );
    });
  }

  render() {
    return (
      <form className="SearchBar" onSubmit={this.handleSearch}>
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
          <ul>{this.renderPriceOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <div className="form-group">
            <Autocomplete
              getItemValue={(item) => item.text}
              items={this.state.autocompleteList}
              menuStyle={{
                borderRadius: "4px",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
                background: "rgba(255, 255, 255, 0.9)",
                padding: "2px 0",
                fontSize: "90%",
                overflow: "auto",
                maxHeight: "50%",
                width: "23rem",
                minWidth: "unset",
              }}
              renderItem={(item, isHighlighted) => (
                <div
                  style={{
                    background: isHighlighted ? "lightgray" : "white",
                    marginTop: "5px",
                    padding: "5px 10px",
                  }}
                  key={item.text}
                >
                  {item.text}
                </div>
              )}
              value={this.state.term}
              onChange={(e) => this.handleTermChange(e)}
              onSelect={(value) => this.setState({ term: value })}
              inputProps={{ placeholder: "Search for a Business*" }}
            />
            {this.validator.message("term", this.state.term, "required")}
          </div>
          {/* 
          <div className="form-group">
            <input
              onChange={this.handleTermChange}
              placeholder="Search Businesses*"
              value={this.state.term}
            />
          </div> */}
          <div className="form-group">
            {/* <input
              onChange={this.handleLocationChange}
              placeholder="Where?*"
              value={this.state.location}
              required
            /> */}
            <LocationSearchInput
              handleLocationChange={this.handleLocationChange}
              value={this.state.location}
            />
            {this.validator.message(
              "location",
              this.state.location,
              "required"
            )}
          </div>
        </div>

        <div className="SearchBar-submit">
          <button type="submit"> Let's Go</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
