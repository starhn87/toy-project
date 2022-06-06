import { css } from "@emotion/css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import emotionReset from "emotion-reset";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";

const GlobalStyles = css`
  ${emotionReset}

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      cursor: pointer;
    }
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: NanumGothic;
    font-size: 12px;
    background-color: rgba(20, 20, 20, 1);
    color: white;
    padding-top: 50px;
  }
  button {
    &:hover {
      cursor: pointer;
    }
  }
  #root {
    overflow: hidden;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <Global styles={GlobalStyles} />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </>
  </React.StrictMode>
);
