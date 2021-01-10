import { createAction } from '@reduxjs/toolkit';

const ACTION_PREFIX = 'chatter-box/messages';

export const getMessagesCompleted = createAction(`${ACTION_PREFIX}/LOADED_MESSAGES`);
export const getMessagesFailed = createAction(`${ACTION_PREFIX}/FAILED_MESSAGES`);
export const getMessagesStarted = createAction(`${ACTION_PREFIX}/LOADING_MESSAGES`);
export const getMessages = (customerId) => async (dispatch) => {
    try {
      dispatch(getMessagesStarted());
      // Call to API to fetch history of chat messages
      //const resp = await dispatch(getMessagesApi(customerId));
        console.log('customerId ', customerId)
      const resp = {
        data: {
            messages: [
                {
                    message: 'I am having issues with shipping',
                    type: 'customer',
                },
                {
                    message: 'my address is not showing',
                    type: 'customer',
                },
                {
                    message: 'Hello Bill, let me check on what address we have saved for you.',
                    type: 'user',
                },
            ],
        }
      }

      dispatch(
        getMessagesCompleted({
           messages: resp.data.messages
        }),
      );
      return resp;
    } catch (err) {
      dispatch(getMessagesFailed(err));
      throw err;
    }
  };

export const sendMessageCompleted = createAction(`${ACTION_PREFIX}/LOADED_NEW_MESSAGE`);
export const sendMessageFailed = createAction(`${ACTION_PREFIX}/FAILED_NEW_MESSAGE`);
export const sendMessageStarted = createAction(`${ACTION_PREFIX}/LOADING_NEW_MESSAGE`);
export const sendMessage = (customerId, message) => async (dispatch, getState) => {
    try {
      dispatch(sendMessageStarted());
      // Call to API to post new chat message
      //const resp = await dispatch(sendMessageApi(customerId, message));
      const resp = {
        data: {
            messages: [
                {
                    message: message,
                    type: 'user',
                },
            ],
        }
      }
      
      dispatch(
        sendMessageCompleted({
           messages: getState().messages.concat(resp.data.messages)
        }),
      );
      return resp;
    } catch (err) {
      dispatch(sendMessageFailed(err));
      throw err;
    }
  };