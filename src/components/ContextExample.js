import React, { useContext } from 'react'


const ThemeContext = React.createContext("light");

const App = () => {
  const theme = {
    theme: "dark",
    color: "white",
    backgroundColor: "black"
  };

  return (
    <ThemeContext.Provider value={ theme } >
      <Toolbar />
    </ThemeContext.Provider>
  )
}

const Toolbar = ( props ) => {
  return <Button />
}

const Button = ( props ) => {
  const context = useContext(ThemeContext);

  return (
    <button style={{color: context.color, backgroundColor: context.backgroundColor }} >
      { context.theme }
    </button>
  )
}

export default App;
