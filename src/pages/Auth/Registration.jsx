import React, { use } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Registration = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (password.length<6) {
      toast.error("Password must be minimum of 6 characters!")
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain an uppercase and a lowercase letter",
      );
      return;
    }

    const result = await createUser(email, password)
      try{
        // console.log(result.user);
        const res = await updateUserProfile(displayName, photoURL);
        try{
          toast.success("Profile updated successfully!")
        } catch(error){
          toast.error(error.message)
        }
        toast.success("User created successfully!");
      }
      catch(error){
        // console.log(error);
        toast.error(error.message);
      };
  };

  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle()
      try {
        toast.success("User created successfully!");
        // console.log(result.user);
        navigate("/");
      }
      catch (error){
        console.log(error);
        toast.error(error.message);
      };
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name field */}
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Name"
            />

            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />

            {/* PhotoUrl field */}
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Photo URL"
            />

            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium">
              Register
            </button>
          </fieldset>
        </form>
        {/* <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full border-[#e5e5e5]"
        >
          <FaGoogle />
          Login with Google
        </button> */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="text-center">
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/auth/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Registration;
