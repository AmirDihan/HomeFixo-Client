import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Profile() {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl">
        <div className="card-body items-center text-center">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photoURL || "https://i.pravatar.cc/300"}
                alt={user?.displayName || "User"}
              />
            </div>
          </div>

          {/* User Info */}
          <h2 className="card-title text-2xl mt-2">
            {user?.displayName || "Amir Hossan"}
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            📧 {user?.email || "amir@example.com"}
          </p>
          <span className="badge badge-primary mt-1">
            {user?.role || "User"}
          </span>

          {/* Buttons */}
          <div className="card-actions mt-4 w-full flex gap-3">
            <button className="btn btn-outline btn-primary flex-1 rounded-xl">
              Edit Profile
            </button>
            <button
              className="btn btn-error flex-1 rounded-xl"
              onClick={signOutUser}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
