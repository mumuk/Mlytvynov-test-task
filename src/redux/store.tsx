import {configureStore} from '@reduxjs/toolkit';
import itemReducer from "./itemSlice.ts";
import {Provider} from "react-redux";
import React from "react";

const store = configureStore({
  reducer: {items: itemReducer}
})

type Props = {
  children: React.ReactNode
};

export const StoreProvider:React.FC<Props> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;