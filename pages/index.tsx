import type { NextPage } from "next";
import { selectAuthState, setAuthState } from "../reduxStore/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { withSession } from "../lib/config/session";
interface HomeProps {
  user?: any;
}
export const getServerSideProps = withSession(
  async function getServerSideProps({ req }) {
    const session = req.session;
    return {
      props: {
        user: req.session.user,
      },
    };
  }
);

const Home: NextPage<HomeProps> = ({ user }) => {
  console.log(user, "broweser");
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div className="root">
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
    </div>
  );
};

export default Home;
