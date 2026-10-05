import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  font-size: 18px;
}

@media only screen and (max-width: 560px) {
  html {
    font-size: 15px;
  }
}

input:focus {
  outline: none;
}

/* Reusable Component - Image Container */

.image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: #000;
}

.image-container img {
  width: 100%;
}

/* App Styles */

.App {
  font-family: "Work Sans", sans-serif;
}

body {
  background: ${({ theme }) => theme.bodyBackground}
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${({ theme }) => theme.background};
}

h1 {
  padding: 0.66rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  font-family: Poppins, sans-serif;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color}
}

h2, p, strong  {
  color: ${({ theme }) => theme.text}

}

h3 {
  color: ${({ theme }) => theme.color}
}

a {
  text-decoration: none;
  color: inherit;
}
`;
