// import React, { useContext, useEffect, useState } from "react";
import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
// modular styling
import "./Home.css";
// "React-select" library
import Select from "react-select";
// axios to perform http requests
import axios from "axios";

// import country item component
import CountryItem from "./CountryItem";

// add the select options
let options = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" }
];

export default class Home extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      this.setState({
        countries: res.data
      });
    });
  }

  handleSearch = e => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
      .then(res => {
        this.setState({
          countries: res.data
        });
      });
  };

  handleFilter = e => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/${e.value}`)
      .then(res => {
        this.setState({
          countries: res.data
        });
      });
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {themeContext => {
          let { isLight, light, dark } = themeContext;
          let mode = isLight ? light : dark;

          return (
            <div style={{ backgroundColor: mode.bg }} id="Home">
              <section className="controls container">
                <section className="filter-search">
                  <section
                    style={{ backgroundColor: mode.elBack, color: mode.txt }}
                    className={`search-items shadow-${
                      isLight ? "light" : "dark"
                    }`}
                  >
                    <i style={{ color: mode.txt }} className="fa fa-search"></i>

                    <input
                      onChange={this.handleSearch}
                      type="text"
                      placeholder="Search for a country.."
                    />
                  </section>
                </section>

                <section
                  className={`filter-region shadow-${
                    isLight ? "light" : "dark"
                  }`}
                >
                  <Select
                    style={{ backgroundColor: mode.elBack, color: mode.txt }}
                    options={options}
                    placeholder="Filter by region"
                    onChange={this.handleFilter}
                  />
                </section>
              </section>

              <section className="countries-cards container">
                {this.state.countries &&
                  this.state.countries.map(country => {
                    return <CountryItem country={country} key={country.name} />;
                  })}
              </section>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

// export default () => {
//   // init the state
//   const [countries, setCountries] = useState([]);

//   let { isLight, light, dark } = useContext(ThemeContext);
//   let mode = isLight ? light : dark;

//   // init an empty array to edit in useEffect
//   let countArr = [];

//   // get data on render
//   useEffect(() => {
//     // get all countries
//     axios
//       .get("https://restcountries.eu/rest/v2/all")
//       .then(res => countArr.push(...res.data));
//   }, []);

//   console.log(countArr);

//   return (
//     <div style={!isLight ? { backgroundColor: mode.bg } : null} id="Home">
//       <section className="controls container">
//         <section className="filter-search">
//           <section
//             style={{ backgroundColor: mode.elBack, color: mode.txt }}
//             className={`search-items shadow-${isLight ? "light" : "dark"}`}
//           >
//             <i style={{ color: mode.txt }} className="fa fa-search"></i>

//             <input type="text" placeholder="Search for a country.." />
//           </section>
//         </section>

//         <section
//           className={`filter-region shadow-${isLight ? "light" : "dark"}`}
//         >
//           <Select
//             style={{ backgroundColor: mode.elBack, color: mode.txt }}
//             options={options}
//             placeholder="Filter by region"
//           />
//         </section>
//       </section>

//       <p style={{ textAlign: "center" }}> {typeof countries} </p>
//     </div>
//   );
// };
