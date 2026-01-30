import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUserProfile } = use(AuthContext);
//   console.log(user)
  const navigate = useNavigate()
  const handleUpdateProfile = async (event) => {
    event.preventDefault()
    const newName = event.target.displayName.value;
    const newPhoto = event.target.photoURL.value;
    // console.log(newName)
    const result = await updateUserProfile(newName, newPhoto);
    try {
      toast.success("User Profile updated sccessfully!");
      navigate('/profile')
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Update your Profile</h1>
        <form onSubmit={handleUpdateProfile}>
          <fieldset className="fieldset">
            {/* Name field */}
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              defaultValue={user.displayName}
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Name"
            />

            {/* PhotoUrl field */}
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              defaultValue={user.photoURL}
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Photo URL"
            />
            <button className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium">
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
