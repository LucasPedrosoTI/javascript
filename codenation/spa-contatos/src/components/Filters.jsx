import React from "react";

const Filters = ({
  handleChangeSearchbarText,
  requestSort,
  getClassNamesFor,
  getKey,
}) => {
  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            onChange={handleChangeSearchbarText}
          />

          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>

        <button
          className={`filters__item ${getKey("name")}`}
          onClick={() => requestSort("name")}
        >
          Nome <i className={"fas " + getClassNamesFor("name")} />
        </button>

        <button
          className={`filters__item ${getKey("country")}`}
          onClick={() => requestSort("country")}
        >
          País <i className={"fas " + getClassNamesFor("country")} />
        </button>

        <button
          className={`filters__item ${getKey("company")}`}
          onClick={() => requestSort("company")}
        >
          Empresa <i className={"fas " + getClassNamesFor("company")} />
        </button>

        <button
          className={`filters__item ${getKey("department")}`}
          onClick={() => requestSort("department")}
        >
          Departamento <i className={"fas " + getClassNamesFor("department")} />
        </button>

        <button
          className={`filters__item ${getKey("admissionDate")}`}
          onClick={() => requestSort("admissionDate")}
        >
          Data de admissão{" "}
          <i className={"fas " + getClassNamesFor("admissionDate")} />
        </button>
      </section>
    </div>
  );
};

export default Filters;
