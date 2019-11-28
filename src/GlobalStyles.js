import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *::after *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-size: 16px;
          font-family: "Ubuntu Condensed", sans-serif;
          background: ${theme.background};
          color: ${theme.text};
          height: 100vh;
          width: 100vw;
        }
      `}
    />
  );
}
