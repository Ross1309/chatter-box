import { createReducer } from '@reduxjs/toolkit';

import {getMessagesCompleted, getMessagesFailed, getMessagesStarted, sendMessageCompleted, sendMessageFailed, sendMessageStarted } from './Chat.actions'

const LOADING_STATUS = {
    failed: false,
    loaded: false,
    loading: true,
};

const FAILED_STATUS = {
    failed: true,
    loaded: false,
    loading: false,
}

const LOADED_STATUS = {
    failed: false,
    loaded: true,
    loading: false,
}

const getMessagesInitialState = () => ({
    messages: [],
    isLoadingMessages: { ...LOADING_STATUS },
})

export const messagesReducer = createReducer(getMessagesInitialState(), builder => {
    builder.addCase(getMessagesCompleted, (state, { payload }) => {
        state.messages = payload.messages;
        state.isLoadingMessages = {
            ...LOADED_STATUS,
        };
      })
  
      .addCase(getMessagesStarted, state => {
        state.isLoadingMessages = {
          ...LOADING_STATUS,
        };
      })
  
      .addCase(getMessagesFailed, state => {
        state.isLoadingMessages = {
            ...FAILED_STATUS,
          };
      })

      .addCase(sendMessageCompleted, (state, { payload }) => {
        state.messages = payload.messages;
        state.isLoadingMessages = {
            ...LOADED_STATUS,
        };
      })
  
      .addCase(sendMessageStarted, state => {
        state.isLoadingMessages = {
          ...LOADING_STATUS,
        };
      })
  
      .addCase(sendMessageFailed, state => {
        state.isLoadingMessages = {
            ...FAILED_STATUS,
          };
      })
})