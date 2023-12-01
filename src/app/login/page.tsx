"use client";
import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../../amplifyconfiguration.json";
import { NextPage } from 'next';
Amplify.configure(config);
import { Hub } from 'aws-amplify/utils';


const Login: NextPage<WithAuthenticatorProps> = ({ signOut, user }) => {

  const listener = (data: string) => {
    console.log(data);
  };
  Hub.listen('auth', listener);
  
  return (
    <div style={{ paddingTop: "60px" }}>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(Login);
