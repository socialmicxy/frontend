import axios from "axios";
import { useEffect } from "react";

function SpotifyButton() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:3000/home";
  const SCOPE =
    "streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state ugc-image-upload user-read-currently-playing app-remote-control playlist-read-collaborative playlist-modify-public playlist-read-private user-top-read playlist-modify-private user-read-playback-position user-read-recently-played user-follow-read user-follow-modify";
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      let playLoad = {
        accountType: "spotify",
        code: code,
      };
      axios
        .post("/api/save-my-token", playLoad, { withCredentials: true })
        .then(() => {
          window.location.href = "./home";
        });
    }
  }, []);

  return (
    <div className="button-account">
      <button>
        <a href={AUTH_URL}>Spotify Music Account</a>
      </button>
    </div>
  );
}

export default SpotifyButton;
