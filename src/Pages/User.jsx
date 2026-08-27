import { useEffect, useState } from "react";
import styles from "./user.module.css";

const USER_URL = "https://randomuser.me/api/";

export default function User() {
  const [user, setUser] = useState([]);

  async function fetchUser() {
    const res = await fetch(USER_URL);
    const data = await res.json();

    setUser(data.results[0]);
    console.log(data.results[0]);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className={styles.userPage}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <p className={styles.tag}>API TOOLKIT</p>

          <h1>Random User Generator</h1>

          <p>Generate random user information using the Random User API.</p>
        </div>

        {/* Generate Button */}
        <button className={styles.generateButton} onClick={fetchUser}>
          Generate User
        </button>

        {/* User Card */}
        {user && user.name && (
          <div className={styles.userCard}>
            {/* Image */}
            <div className={styles.imageSection}>
              <img
                src={user.picture?.large}
                alt={`${user.name?.first} ${user.name?.last}`}
              />
            </div>

            {/* User Information */}
            <div className={styles.userInfo}>
              <p className={styles.userLabel}>RANDOM USER</p>

              <h2>
                {user.name?.title} {user.name?.first} {user.name?.last}
              </h2>

              <div className={styles.details}>
                <div className={styles.detail}>
                  <span>Gender</span>
                  <strong>{user.gender}</strong>
                </div>

                <div className={styles.detail}>
                  <span>Country</span>
                  <strong>{user.location?.country}</strong>
                </div>

                <div className={styles.detail}>
                  <span>City</span>
                  <strong>{user.location?.city}</strong>
                </div>

                <div className={styles.detail}>
                  <span>Email</span>
                  <strong>{user.email}</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
