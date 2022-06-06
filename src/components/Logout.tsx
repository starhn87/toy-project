import React from "react";
import { GoogleLogout } from "react-google-login";
import { LoginProps } from "./Login";

export default function Logout({ setIsLoggedIn }: LoginProps) {
  const onSuccess = () => {
    setIsLoggedIn(false);
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID as string}
      onLogoutSuccess={onSuccess}
      buttonText={"Sign out"}
    />
  );
}
