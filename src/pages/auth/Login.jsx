// rrd
import { Link, Navigate } from "react-router-dom";
// style
import "./signup.css";
// react imports
import { useState } from "react";
// custom hook
import { useLogin } from "../../hooks/useLogin";
import { useGlobalContext } from "../../hooks/useGlobalContext";
// sonner
import { toast } from "sonner";
import { useSignInGoogle } from "../../hooks/useSignInWithGoogle";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, dispatch } = useGlobalContext();
  const { logIn } = useLogin();
  const { signInWithGoogle } = useSignInGoogle();

  if (user) {
    return <Navigate to={"/"} />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      return toast.error("Please fill all fields");
    }
    logIn({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="form_area">
          <p className="title">Login </p>
          <form onSubmit={handleLogin}>
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
                <FcGoogle className="text-3xl"/>
                Continue with Google
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button className="btn">Login</button>
              <p>
                Haven't an Account?
                <Link to={"/signup"} className="link">
                  Signup Here!
                </Link>
              </p>
              <a className="link" ></a>
            </div>
            <a className="link"></a>
          </form>
        </div>
        <a className="link"></a>
      </div>
    </div>
  );
};

export default Login;
