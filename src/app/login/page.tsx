"use client";
import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../../amplifyconfiguration.json";
Amplify.configure(config);
import { Hub } from 'aws-amplify/utils';


export default function Login({ signOut, user }: WithAuthenticatorProps) {

const listener = (data) => {
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
