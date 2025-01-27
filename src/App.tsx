import { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header/Header";
import { Authentication } from "./components/Authentication/Authentication";
import { Main } from "./components/Main/Main";
import { News } from "./components/News/News";
import { useApi } from "./hooks/useApi";
import { NewsItem, Profile, LoginResponse } from './types.ts'

import "./App.css";

function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  const API_HOST = import.meta.env.VITE_HOST;

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setNews([]);
    setProfile(null);
  }, []);

  const { fetchProfile, fetchNews } = useApi(API_HOST, handleLogout);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchProfile(setProfile);
      fetchNews(setNews);
      setIsLoggedIn(true);
    }
  }, [fetchProfile, fetchNews]);


  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_HOST}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: username, password }),
      });

      if (response.ok) {
        const data: LoginResponse = await response.json();
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        fetchProfile(setProfile);
        fetchNews(setNews);
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } 
  };

  return (
    <div className="container">
      <Header>
        <Authentication
          username={username}
          password={password}
          isLoggedIn={isLoggedIn}
          profile={profile}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      </Header>
      <Main>
        {isLoggedIn ? (
          <News news={news} />
        ) : (
          <div className="welcome-page">
            <h1 className="title">Neto Social</h1>
            <h2 className="subtitle">Facebook and VK killer.</h2>
          </div>
        )}
      </Main>
    </div>
  );
}

export default App;
