// rrd
import { Link, Navigate } from "react-router-dom";
// style
import "./signup.css";
// react imports
import { useState } from "react";
// global context
import { useGlobalContext } from "../../hooks/useGlobalContext";
// custom hook
import { useSignUp } from "../../hooks/useSignUp";
import { useSignInGoogle } from "../../hooks/useSignInWithGoogle";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { signUp } = useSignUp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useGlobalContext();
  const { signInWithGoogle } = useSignInGoogle();

  if (user) {
    return <Navigate to={"/"} />;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !name.trim()) {
      return toast.error("Please fill all fields");
    }
    signUp({
      name,
      email,
      password,
    });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="form_area">
          <p className="title">SIGN UP</p>
          <form onSubmit={handleRegister}>
            <div className="form_group">
              <label className="sub_title" htmlFor="name">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="form_style"
                type="text"
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                id="email"
                className="form_style"
                type="email"
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="password">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                id="password"
                className="form_style"
                type="password"
              />
            </div>
            <div className="signin-with-google flex items-center justify-center">
              <button onClick={signInWithGoogle} className="oauthButton">
                <FcGoogle className="text-3xl" />
                Continue with Google
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button className="btn">SIGN UP</button>
              <p>
                Have an Account?{" "}
                <Link to={"/login"} className="link" href>
                  Login Here!
                </Link>
              </p>
              <a className="link" href></a>
            </div>
            <a className="link" href></a>
          </form>
        </div>
        <a className="link" href></a>
      </div>
    </div>
  );
};

export default SignUp;
