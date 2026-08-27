import { Link } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.tag}>API TOOLKIT</p>
          <h1>
            Explore APIs.
            <br />
            <span>Build. Learn. Create.</span>
          </h1>
          <p className={styles.description}>
            Welcome to API Toolkit — a collection of simple and useful
            API-powered applications built with React. Explore different APIs
            and learn how data is fetched, processed, and displayed.
          </p>
          <div className={styles.buttons}>
            <Link to="/User_generator" className={styles.primaryButton}>
              Explore User Generator
            </Link>
            <Link to="/Joke_generator" className={styles.secondaryButton}>
              Try Joke Generator
            </Link>
          </div>
        </div>

        <div className={styles.apiCard}>
          <div className={styles.cardHeader}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.code}>
            <p>
              <span className={styles.keyword}>const</span> URL ={" "}
              <span className={styles.string}>
                "https://randomuser.me/api/"
              </span>
              ;
            </p>
            <p>&nbsp;</p>
            <p>
              async <span className={styles.keyword}>function </span>fetchuser()
            </p>
            <p>
              &nbsp;&nbsp;<span className={styles.keyword}>const </span> res =
              await fetch('$(URL)');
            </p>
            <p>
              &nbsp;&nbsp;<span className={styles.keyword}>const </span> data =
              await res.json();
            </p>
            <p>&nbsp;&nbsp;setUser(data.results[0]);</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;useEffect(()=&gt; {"{"} </p>
            <p>&nbsp;&nbsp;&nbsp;fetchUser();</p>
            <p>&nbsp;&nbsp;{"}"}, []);</p>
            <p>&nbsp;</p>
            <p className={styles.success}>✓ API response received</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className={styles.toolsSection}>
        <div className={styles.sectionHeading}>
          <p>EXPLORE</p>
          <h2>API Tools</h2>
          <span>
            Practice working with APIs through small, interactive React
            projects.
          </span>
        </div>

        <div className={styles.toolsGrid}>
          {/* User Generator */}
          <div className={styles.toolCard}>
            <div className={styles.icon}>👤</div>
            <h3>User Generator</h3>
            <p>
              Generate random user information using an external API and display
              the response in a clean interface.
            </p>
            <Link to="/User_generator" className={styles.toolLink}>
              Open Tool →
            </Link>
          </div>

          {/* Joke Generator */}
          <div className={styles.toolCard}>
            <div className={styles.icon}>😂</div>
            <h3>Joke Generator</h3>
            <p>
              Fetch random jokes from an API and display them dynamically using
              React.
            </p>
            <Link to="/Joke_generator" className={styles.toolLink}>
              Open Tool →
            </Link>
          </div>

          {/* Future APIs */}
          <div className={styles.toolCard}>
            <div className={styles.icon}>🚀</div>
            <h3>More APIs</h3>
            <p>More API projects will be added here as the toolkit grows.</p>
            <span className={styles.comingSoon}>Coming Soon</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howSection}>
        <div className={styles.sectionHeading}>
          <p>LEARN BY BUILDING</p>
          <h2>How It Works</h2>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <span>01</span>
            <h3>Choose an API</h3>
            <p>Select one of the API tools available in the toolkit.</p>
          </div>

          <div className={styles.step}>
            <span>02</span>
            <h3>Fetch Data</h3>
            <p>
              React sends a request and receives data from the external API.
            </p>
          </div>

          <div className={styles.step}>
            <span>03</span>
            <h3>Display Results</h3>
            <p>The API response is processed and shown to the user.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.cta}>
        <h2>Start Exploring APIs</h2>
        <p>
          Experiment with APIs and improve your React development skills one
          project at a time.
        </p>
        <Link to="/User_generator" className={styles.ctaButton}>
          Get Started →
        </Link>
      </section>
    </main>
  );
}
