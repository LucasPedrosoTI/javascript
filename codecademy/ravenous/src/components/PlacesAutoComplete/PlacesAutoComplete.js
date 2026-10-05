import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";

import "./PlacesAutoComplete.css";

export class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: this.props.value };
  }

  handleChange = (address) => {
    this.setState({ address: address }, () =>
      this.props.handleLocationChange(this.state.address)
    );
  };

  handleSelect = (address) => {
    this.setState({ address: address }, () =>
      this.props.handleLocationChange(this.state.address)
    );
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div className="loading-box">Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
