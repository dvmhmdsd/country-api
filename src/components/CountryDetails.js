import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import axios from "axios";

import "./CountryDetails.scss";

export default class CountryDetails extends Component {
  state = {
    country: {}
  };

  goBack = link => {
    this.props.history.goBack();
  };

  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.alpha}`
      )
      .then(res => {
        this.setState({
          country: res.data
        });
      });
  }

  goCountry = path => {
    axios.get(`https://restcountries.eu/rest/v2/alpha/${path}`).then(res => {
      this.setState({
        country: res.data
      });
    });
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {themeContext => {
          let { isLight, light, dark } = themeContext;
          let mode = isLight ? light : dark;

          let country = this.state.country;

          return (
            <section
              style={{ backgroundColor: mode.bg, paddingTop: "100px" }}
              id="countryDetails"
            >
              <section className="container">
                <button
                  style={{ backgroundColor: mode.elBack, color: mode.txt }}
                  className={`btn mode-${isLight ? "light" : "dark"}`}
                  onClick={this.goBack}
                >
                  <i className="fa fa-arrow-left"></i> Back
                </button>

                <section className="country-details flexible">
                  <section className="country-details-flag">
                    <img src={country.flag} alt={`${country.name}'s flag`} />
                  </section>

                  <section className="country-details-data">
                    <h2 style={{ color: mode.txt }}> {country.name} </h2>

                    <section className="country-details-items flexible">
                      <ul className="list co-det-v1">
                        <li style={{ color: mode.txt }}>
                          <span className="data-key"> Native Name: </span>{" "}
                          {country.nativeName}
                        </li>
                        <li style={{ color: mode.txt }}>
                          <span className="data-key"> Population: </span>{" "}
                          {country.population && country.population.toLocaleString()}
                        </li>
                        <li style={{ color: mode.txt }}>
                          <span className="data-key"> Region: </span>{" "}
                          {country.region}
                        </li>
                        <li style={{ color: mode.txt }}>
                          <span className="data-key"> Sub Region: </span>{" "}
                          {country.subregion}
                        </li>
                        <li style={{ color: mode.txt }}>
                          <span className="data-key"> Capital: </span>{" "}
                          {country.capital}
                        </li>
                      </ul>

                      <ul className="list co-det-v2">
                        <li style={{ color: mode.txt }}>
                          <span className="data-key"> Top Level Domain: </span>{" "}
                          {country.topLevelDomain}
                        </li>
                        <li style={{ color: mode.txt }}>
                          {/* to return it with comma if its length is more than 1 */}
                          <span className="data-key"> Currencies: </span>{" "}
                          {country.currencies &&
                            (country.currencies.length > 1
                              ? country.currencies.map(currency => {
                                  return (
                                    <span key={currency.name}>
                                      {currency.name},
                                    </span>
                                  );
                                })
                              : country.currencies.map(currency => {
                                  return (
                                    <span key={currency.name}>
                                      {currency.name}
                                    </span>
                                  );
                                }))}
                        </li>
                        <li style={{ color: mode.txt }}>
                          <span className="data-key"> Languages: </span>{" "}
                          {country.languages &&
                            (country.languages.length > 1
                              ? country.languages.map(language => {
                                  return (
                                    <span key={language.name}>
                                      {language.name},
                                    </span>
                                  );
                                })
                              : country.languages.map(language => {
                                  return (
                                    <span key={language.name}>
                                      {language.name}
                                    </span>
                                  );
                                }))}
                        </li>
                      </ul>
                    </section>
                    <p className="borders">
                      <span className="data-key" style={{ color: mode.txt }}>
                        Border Countries:
                      </span>{" "}
                      {country.borders &&
                        country.borders.map(border => {
                          return (
                            <button
                              className={`btn border-btn mode-${
                                isLight ? "light" : "dark"
                              }`}
                              style={{
                                backgroundColor: mode.elBack,
                                color: mode.txt
                              }}
                              key={border}
                              onClick={() => this.goCountry(border)}
                            >
                              {border}
                            </button>
                          );
                        })}
                    </p>
                  </section>
                </section>
              </section>
            </section>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
