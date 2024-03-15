import React from "react"
import Header from "./Components/Header/header.jsx"
import Main from "./Components/Main/main.jsx"
import Footer from "./Components/Footer/footer.jsx"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle `
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
}
`
function App(){
  return(
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App 