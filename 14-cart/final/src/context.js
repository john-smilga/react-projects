import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
const url = 'https://course-api.netlify.app/api/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        increase,
        decrease,
        remove,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
