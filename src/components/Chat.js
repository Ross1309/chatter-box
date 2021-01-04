import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { messagesSelector } from './Chat.selectors'
import { getMessages } from './Chat.actions'

export const Chat = () => {
    const dispatch = useDispatch();
    const messages = useSelector(messagesSelector);
    useEffect(() => {
        dispatch(getMessages(123))
    }, [])

    return (

       <div>
           {messages && messages.length > 0 && (
               messages.map((message) => {
                return (
                    <p>{message.message}</p>
                );
              })
           )}
       </div>
    )
  }
