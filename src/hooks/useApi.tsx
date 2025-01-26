import { useCallback } from "react";
import { NewsItem, Profile } from '../types.ts'

export const useApi = (API_HOST: string, handleLogout: () => void) => {
  const fetchProfile = useCallback(
    async (setProfile: (profile: Profile) => void) => {
      const token = localStorage.getItem("token");
      if (!token) {
        return handleLogout();
      }

      try {
        const response = await fetch(`${API_HOST}/private/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          handleLogout();
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    },
    [API_HOST, handleLogout]
  );

  const fetchNews = useCallback(
    async (setNews: (news: NewsItem[]) => void) => {
      const token = localStorage.getItem("token");
      if (!token) {
        return handleLogout();
      }

      try {
        const response = await fetch(`${API_HOST}/private/news`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          handleLogout();
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },
    [API_HOST, handleLogout]
  );

  return { fetchProfile, fetchNews };
};
