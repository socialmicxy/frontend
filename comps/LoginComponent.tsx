"use client";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
function LoginComponent() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      console.log("yes");
      loginWithGoogle(session?.user);
    }
  }, [session]);

  function loginWithGoogle(user: {
    email: string;
    name: string;
    image: string;
  }) {
    console.log("124ttt");
    axios.post("/api/login", user, { withCredentials: true }).then((result) => {
      console.log("wjrj");
      //router.push("/account/profile")
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
}
export default LoginComponent;
