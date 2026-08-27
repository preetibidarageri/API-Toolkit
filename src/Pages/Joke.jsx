import { useEffect, useState } from "react";
import styles from "./joke.module.css";

const JokeURL = "https://v2.jokeapi.dev/joke/Any?type=single&safe-mode";

export default function Joke() {
  const [joke, setJoke] = useState({});

  async function fetchJoke() {
    const res = await fetch(JokeURL, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setJoke(data);
    console.log(data);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <main className={styles.jokePage}>
      <div className={styles.container}>
        <button className={styles.generateButton} onClick={fetchJoke}>
          Generate Joke
        </button>

        <div className={styles.jokeCard}>
          <div className={styles.jokeIcon}>😂</div>

          <h2 className={styles.joke}>{joke && <p>{joke.joke}</p>}</h2>
        </div>
      </div>
    </main>
  );
}
