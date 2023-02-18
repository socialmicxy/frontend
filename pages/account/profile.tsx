import SideNavigation from "../../comps/SideNavigation";
import SpotifyConnectedAccount from "../../comps/SpotifyConnectedAccount";

function Profile() {
  return (
    <div className="page-waper">
      <SideNavigation />
      <div className="page-wraper-content">
        <div className="contentAboutUtserProfile"></div>
        <div className="componentnt">
          <SpotifyConnectedAccount />
        </div>
      </div>
    </div>
  );
}

export default Profile;
