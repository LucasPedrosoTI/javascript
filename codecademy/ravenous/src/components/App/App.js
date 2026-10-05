import React, { useState } from "react";
// import "./App.css";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../themes/themes";
import { GlobalStyles } from "../../themes/global";
import { useDarkMode } from "../../utils/useDarkMode";

import Yelp from "../../utils/Yelp";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Toggle from "../Toggle/Toggle";

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  // this.theme = new useDarkMode("light");
  // this.searchYelp = this.searchYelp.bind(this);
  // this.toggleTheme = this.toggleTheme.bind(this);

  // toggleTheme() {
  //   if (this.state.theme === "light") {
  //     this.setState({ theme: "dark" });
  //   } else {
  //     this.setState({ theme: "light" });
  //   }
  // }

  const searchYelp = (term, location, sortBy, prices) => {
    if (prices.length === 0) {
      prices = ["1", "2", "3", "4"];
    }

    Yelp.search(term, location, sortBy, prices).then((businesses) =>
      setBusinesses(businesses)
    );
  };

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />
        <header>
          <h1>ravenous</h1>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </header>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    </ThemeProvider>
  );
}

export default App;
