// AppContext.js
import React, { createContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Provide the state and functions to the children components
  const contextValue = {
    count,
    incrementCount,
    decrementCount
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
