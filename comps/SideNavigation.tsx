import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

function SideNavigation() {
  return (
    <div className="side-nav">
      <div className="title-of-the-product">SocialMicxy</div>

      <div className="navigation-section">
        <div className="section-nav">
          <Link href="/home" className="box-tabs-nav">
            <div className="box-icon">
              <AiOutlineHome />
            </div>
            <p>Home</p>
          </Link>
          <Link href="/home" className="box-tabs-nav">
            <div className="box-icon">
              <CgProfile />
            </div>
            <p>Profile</p>
          </Link>
          <div className="render-my-play-list"></div>
        </div>
        <div className="log-out">
          <div className="box-tabs-nav">
            <div className="box-icon">
              <BiLogOut />
            </div>
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavigation;
