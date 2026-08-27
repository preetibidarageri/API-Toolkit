import { useEffect, useState } from "react";
import styles from "./country.module.css";

const COUNTRY_URL = "https://countries.dev/alpha";

export default function Country() {
  const [country, setCountry] = useState("CA");
  const [country_data, setCountryData] = useState();

  async function fetch_Country_data() {
    const res = await fetch(`${COUNTRY_URL}/${country.trim().toUpperCase()}`);
    const data = await res.json();
    setCountryData(data);
    console.log(data);
  }

  useEffect(() => {}, [country]);

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          placeholder="Enter country code e.g. CA"
        />

        <button className={styles.button} onClick={fetch_Country_data}>
          Get Country Data
        </button>
      </div>

      {country_data && (
        <div className={styles.countryCard}>
          <h1 className={styles.countryName}>{country_data?.name}</h1>
          <img
            className={styles.flag}
            src={country_data?.flags?.png}
            alt={`${country_data?.name} flag`}
          />

          <div className={styles.info}>
            <p>
              <strong>Capital:</strong> {country_data?.capital}
            </p>

            <div className={styles.languages}>
              <strong>Languages:</strong>
              <div>
                {country_data?.languages?.map((language) => (
                  <span className={styles.language} key={language.name}>
                    {language.name}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.currency}>
              <strong>Currencies:</strong>
              {country_data?.currencies?.map((curr) => (
                <div key={curr.code}>
                  <p>
                    <strong>Code:</strong> {curr.code}
                  </p>
                  <p>
                    <strong>Name:</strong> {curr.name}
                  </p>
                  <p>
                    <strong>Symbol:</strong> {curr.symbol}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
