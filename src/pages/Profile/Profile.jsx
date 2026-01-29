import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Profile() {
  const { user, signOutUser } = useContext(AuthContext);

  //className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl">
        <div className="card-body items-center text-center">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-28 h-28 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
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
          <span className="badge text-blue-700 mt-1">
            {user?.role || "User"}
          </span>

          {/* Buttons */}
          <div className="card-actions mt-4 w-full flex gap-3">
            <button className="btn btn-outline border-blue-400 hover:border-blue-700 text-blue-600 flex-1 rounded-xl">
              Edit Profile
            </button>
            <button
              className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
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
