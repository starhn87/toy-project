import React, { Dispatch, SetStateAction } from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogoutProps,
} from "react-google-login";

export interface LoginProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export default function Login({ setIsLoggedIn }: LoginProps) {
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(res);
    setIsLoggedIn(true);
  };

  const onFailure = (res: GoogleLogoutProps) => {
    console.log(res);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID as string}
      theme="dark"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}
