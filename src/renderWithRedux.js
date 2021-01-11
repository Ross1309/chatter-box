import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { messagesReducer } from './components/Chat/Chat.reducer';
import { render } from '@testing-library/react';

const middleware = [thunk];

function configureTestStore(initialState = {}) {
  const store = configureStore({
    middleware,
    preloadedState: initialState,
    reducer: messagesReducer,
  });
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);

  return store;
}

export function renderWithRedux(ui, { initialState, store = configureTestStore(initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}
