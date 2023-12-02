"use client";
import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../../amplifyconfiguration.json";
import { NextPage } from "next";
Amplify.configure(config);

const Login: NextPage<WithAuthenticatorProps> = ({ signOut, user }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 min-h-screen"
      style={{ paddingTop: "60px" }}
    >
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h1
            className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white"
            style={{ paddingBottom: "25px" }}
          >
            Are you sure you want to sign out {user?.username}?
          </h1>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticator(Login);
