# 🚀 API Toolkit

API Toolkit is a React-based project that brings multiple API-powered tools together in one application.

This project was created to practice React concepts such as `useState`, `useEffect`, API fetching, conditional rendering, React Router, and handling data received from external APIs.

## ✨ Features

- 🏠 Home Page
- 👤 Random User Generator
- 😂 Joke Generator
- 🌤️ Weather Checker
- 🌍 Country Explorer
- 📱 Responsive Navigation Bar
- 🔀 React Router Navigation

## 🛠️ Technologies Used

- React
- JavaScript
- HTML
- CSS
- React Router
- REST APIs
- Vite

## 📡 APIs Used

### 👤 Random User Generator

Uses the Random User API to generate random user information.

API:

`https://randomuser.me/api/`

Provides:

- Name
- Gender
- Country
- City
- Profile picture

### 😂 Joke Generator

Uses JokeAPI to generate random jokes.

API:

`https://v2.jokeapi.dev/`

### 🌤️ Weather

Uses OpenWeather API to get weather information based on city.

Provides:

- Temperature
- Weather condition
- Weather description
- Wind speed
- Atmospheric pressure

### 🌍 Country Explorer

Uses a country API to display country information.

Provides:

- Country name
- Flag
- Capital
- Languages
- Currency

### 🐙 GitHub User Finder

Uses the GitHub API to search for GitHub users.

Provides:

- Profile picture
- Name
- Username
- Bio
- Followers
- Following
- Public repositories
- Location

## 📂 Project Structure

```text
API-Toolkit/
│
├── public/
│
├── src/
│   ├── component/
│   │   ├── Nav.jsx
│   │   └── nav.module.css
│   │
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── User.jsx
│   │   ├── Joke.jsx
│   │   ├── Weather.jsx
│   │   ├── Country.jsx
│   │   └── Github.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```
