import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

import { getCurrentUser } from "aws-amplify/auth";
import { fetchUserAttributes } from "aws-amplify/auth";
import { Hub } from "@aws-amplify/core";

interface IUserContext {
  userName: string | null;
  email: string | null;
  userId: string | null;
}

const UserContext = createContext<IUserContext>({
  userName: null,
  email: null,
  userId: null,
});

export const AuthContext = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    checkUser();
  }, []);

  checkUser();

  useEffect(() => {
    Hub.listen("auth", () => {
      // perform some action to update state whenever an auth event is detected.
      checkUser();
    });
  }, []);

  async function checkUser() {
    try {
      const amplifyEmail = await fetchUserAttributes();
      const amplifyUser = await getCurrentUser();
      setUserName(amplifyUser.username);
      setEmail(amplifyEmail.email || null);
      setUserId(amplifyUser.userId || null);
    } catch (error) {
      // No current signed in user.
      console.error(error);
      setUserName(null);
      setEmail(null);
      setUserId(null);
    }
  }

  return (
    <UserContext.Provider value={{ userName, email, userId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
