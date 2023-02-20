"use client";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useSession, signIn } from "next-auth/react";
import { withSession } from "../lib/config/session";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
export const getServerSideProps = withSession(
  async function getServerSideProps({ req }) {
    const session = req.session;
    if (session.hasOwnProperty("user")) {
      return {
        redirect: {
          permanent: false,
          destination: "/account/profile",
        },
      };
    } else {
      return {
        props: {},
      };
    }
  }
);

const LoginComponent: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      loginWithGoogle(session?.user);
    }
  }, [session]);

  function loginWithGoogle(user: {
    email: string;
    name: string;
    image: string;
  }) {
    axios.post("/api/login", user, { withCredentials: true }).then((result) => {
      router.push("/account/profile");
    });
  }

  return (
    <div className="login-box">
      <div className="login-component">
        <div className="title-of-compoent">
          <p>Login To Micxy</p>
          <div className="close-that">
            <IoMdClose />
          </div>
        </div>
        <button onClick={() => signIn()} id="sign-in">
          Sign in with google
        </button>
      </div>
    </div>
  );
};
export default LoginComponent;
