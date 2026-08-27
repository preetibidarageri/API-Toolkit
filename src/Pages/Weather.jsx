import { useEffect, useState } from "react";
import styles from "./weather.module.css";

const weather_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "652e377239424f144438bb0b40c9f8ca";

export default function Weather() {
  const [city, setCity] = useState("Pune");
  const [weather_data, setWeather] = useState("");

  async function fetch_weather() {
    const res = await fetch(
      `${weather_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );

    const data = await res.json();

    console.log(data);

    setWeather(data);
  }

  useEffect(() => {}, [city]);

  return (
    <main className={styles.weatherPage}>
      <div className={styles.container}>
        {/* Heading */}

        <div className={styles.heading}>
          <p className={styles.tag}>API TOOLKIT</p>

          <h1>Weather Checker</h1>

          <p>Check the current weather conditions of any city.</p>
        </div>

        {/* Search */}

        <div className={styles.searchBox}>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="Enter city name"
          />

          <button className={styles.button} onClick={() => fetch_weather()}>
            Check Weather
          </button>
        </div>

        {/* Weather Data */}

        {weather_data && (
          <div className={styles.weatherCard}>
            <div className={styles.weatherHeader}>
              <div className={styles.weatherIcon}>☀️</div>

              <div>
                <h2>{weather_data?.name}</h2>

                <p>{weather_data?.weather[0]?.main}</p>
              </div>
            </div>

            <div className={styles.description}>
              {weather_data?.weather[0]?.description}
            </div>

            <div className={styles.weatherDetails}>
              {/* Temperature */}

              <div className={styles.detailCard}>
                <span className={styles.icon}>🌡️</span>

                <div>
                  <span>Temperature</span>

                  <strong>{weather_data?.main?.temp} °C</strong>
                </div>
              </div>

              {/* Wind */}

              <div className={styles.detailCard}>
                <span className={styles.icon}>💨</span>

                <div>
                  <span>Wind Speed</span>

                  <strong>{weather_data?.wind?.speed} m/s</strong>
                </div>
              </div>

              {/* Pressure */}

              <div className={styles.detailCard}>
                <span className={styles.icon}>🌬️</span>

                <div>
                  <span>Pressure</span>

                  <strong>{weather_data?.main?.pressure} hPa</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
