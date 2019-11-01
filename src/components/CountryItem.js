import React, { useContext } from "react";

import { Link } from "react-router-dom";

import "./CountryItem.scss";
import { ThemeContext } from "../contexts/ThemeContext";

export default ({ country }) => {
  let { isLight, light, dark } = useContext(ThemeContext);
  let mode = isLight ? light : dark;
  return (
    <article className="country-card">
      <section
        className={`country-card-content mode-${isLight ? "light" : "dark"}`}
        style={{ backgroundColor: mode.elBack, color: mode.txt }}
      >
        <section className="country-flag">
          <img src={country.flag} alt={`${country.name}'s flag`} />
        </section>

        <section className="country-info">
          <p className="country-name">
            <Link
              style={{ color: mode.txt, textDecoration: "none" }}
              to={`/${country.alpha3Code}`}
            >
              {" "}
              {country.name}{" "}
            </Link>
          </p>

          <ul className="country-data">
            <li className="country-data-item">
              <span className="data-key" style={{ color: mode.txt }}>
                Population:{" "}
              </span>
              {country.population.toLocaleString()}
            </li>
            <li className="country-data-item">
              <span className="data-key" style={{ color: mode.txt }}>
                Region:{" "}
              </span>
              {country.region}
            </li>
            <li className="country-data-item">
              <span className="data-key" style={{ color: mode.txt }}>
                Capital:{" "}
              </span>
              {country.capital}
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
};
