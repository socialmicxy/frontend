import ConnectAccount from "./ConnectAccount";
import SpotifyButton from "./connectMusicAccounts/spotifyButton";
import PlaylistBox from "./PlaylistBox";

function SpotifyConnectedAccount() {
  return (
    <div className="component-wrapper">
      <div className="title-of-wrapper">Spotify Playlist</div>
      <div className="wrapper-playlist">
        <div className="connection-account-wrapper">
          <div className="connection-box">
            <div className="header-har">
              <div className="title-that">Link your Spotify</div>
            </div>
            <div className="wrapper-for-link">
              <SpotifyButton />
            </div>
          </div>
        </div>

        <div className="playlist-section"></div>
      </div>
    </div>
  );
}

export default SpotifyConnectedAccount;
