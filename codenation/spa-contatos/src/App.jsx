import React, { useState, useEffect } from "react";

import "./App.scss";
import Loading from "./components/Loading/Loading.jsx";
import Contacts from "./components/Contacts";
import Topbar from "./components/Topbar";
import Filter from "./components/Filters";

import data from "./data/data.json";

import { useSortableData } from "./hooks/useSortableData";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const { items, requestSort, sortConfig } = useSortableData(filteredContacts);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const getKey = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? "is-selected" : undefined;
  };

  useEffect(() => {
    setTimeout(() => {
      setContacts(data);
      setFilteredContacts(data);
    }, 500);
  }, []);

  const handleChangeSearchbarText = (e) => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value.length === 0) {
      return setFilteredContacts(contacts);
    }
    return setFilteredContacts(filteredContacts);
  };

  return (
    <div className="app" data-testid="app">
      <Topbar />
      <Filter
        handleChangeSearchbarText={handleChangeSearchbarText}
        requestSort={requestSort}
        getKey={getKey}
        getClassNamesFor={getClassNamesFor}
      />
      <Contacts contacts={items} />
      {contacts.length === 0 ? (
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Loading color="#4C84FF" />
        </div>
      ) : null}
    </div>
  );
};

export default App;
