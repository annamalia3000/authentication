import classes from "./authentication.module.css";

type AuthenticationProps = {
  username: string;
  password: string;
  isLoggedIn: boolean;
  profile: {
    name: string;
    avatar: string;
  } | null;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleLogout: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Authentication: React.FC<AuthenticationProps> = ({
  username,
  password,
  isLoggedIn,
  profile,
  setUsername,
  setPassword,
  handleLogin,
  handleLogout,
}) => {
  return (
    <>
      {isLoggedIn && profile ? (
        <div className={classes["profile-container"]}>
          <span className={classes["welcome-message"]}>
            Hello, {profile.name}
          </span>
          <img
            src={profile.avatar}
            alt="profile-avatar"
            className={classes["profile-avatar"]}
          />
          <button
            type="submit"
            className={classes["logout-button"]}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <form className={classes["authentication-form"]}>
          <input
            type="text"
            className={classes["input-login"]}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className={classes["input-password"]}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={classes["login-button"]}
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      )}
    </>
  );
};
