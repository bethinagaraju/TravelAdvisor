import React, { createContext, useContext } from "react";

// Create the context
const PlacesContext = createContext();

// Create a provider component
export const placedetailss = ({ value, children }) => {
  return (
    <PlacesContext.Provider value={value}>
      {children}
    </PlacesContext.Provider>
  );
};

// Create a custom hook to access context easily
export const usePlaces = () => {
  return useContext(PlacesContext);
};

