import { createAction } from '@reduxjs/toolkit';

const ACTION_PREFIX = 'chatter-box/messages';

export const getMessagesCompleted = createAction(`${ACTION_PREFIX}/LOADED_GET_ACTIVITY_TIMELINE`);
export const getMessagesFailed = createAction(`${ACTION_PREFIX}/FAILED_GET_ACTIVITY_TIMELINE`);
export const getMessagesStarted = createAction(`${ACTION_PREFIX}/LOADING_GET_ACTIVITY_TIMELINE`);
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