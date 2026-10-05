import React, { useState, useEffect } from "react";
import { FiClipboard, FiDollarSign, FiUserCheck } from "react-icons/fi";
import "./App.css";

import Navbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import InfoContainer from "./components/InfoContainer";
import LastProduct from "./components/LastProduct";
import CategoryCard from "./components/CategoryCard";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();

      console.log(data);

      setPokemons(data.results);
    }

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <main>
        <Navbar title="Walter White" />
        <div className="main_container">
          <h2>App Dashboard</h2>
          <div className="cards_container">
            <SummaryCard
              title="products in data base"
              info={pokemons.length}
              icon={<FiClipboard />}
              cardColor="blue"
            />
            <SummaryCard
              title="amount in products"
              info="$546.456"
              icon={<FiDollarSign />}
              cardColor="green"
            />
            <SummaryCard
              title="users quantity"
              info={pokemons.length}
              icon={<FiUserCheck />}
              cardColor="yellow"
            />
          </div>
          <div className="lstproduct_category_container">
            <InfoContainer title="Last product in data base">
              <LastProduct />
            </InfoContainer>
            <InfoContainer title="Categories in Data Base">
              {pokemons !== ""
                ? pokemons.map((poke, i) => (
                    <CategoryCard key={i} num={poke.name} />
                  ))
                : ""}
            </InfoContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
