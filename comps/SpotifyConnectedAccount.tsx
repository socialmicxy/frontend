import ConnectAccount from "./ConnectAccount";

import PlaylistBox from "./PlaylistBox";

function SpotifyConnectedAccount(props) {
  return (
    <div className="component-wrapper">
      <div className="title-of-wrapper">Spotify Playlist</div>
      <div className="wrapper-playlist">
        <ConnectAccount user={props.user} type={"spotify"} />
        <div className="playlist-section">
          {props.myPlaylist?.map((item) => {
            return <PlaylistBox playlist={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
const mapstateToProps = (state) => {
  return {
    user: state.user,
    myPlaylist: state.myPlaylist,
  };
};
export default connect(mapstateToProps, null)(SpotifyConnectedAccount);
