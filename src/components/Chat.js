import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, Button } from "@blueprintjs/core";

import { messagesSelector } from './Chat.selectors'
import { getMessages, sendMessage } from './Chat.actions'
import { ChatContainer, ChatBubble, TextInputContainer } from './Chat.styles'

export const Chat = () => {
    // This would normally come from our redux depending on the customer page we are currently on
    const mockCustomerId = 123
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const messages = useSelector(messagesSelector);
    useEffect(() => {
        dispatch(getMessages(mockCustomerId))
    }, [])

    const submitMessageResponse = (message) => {
        dispatch(sendMessage(mockCustomerId, message))
        setInputValue('')
    }

    return (

       <ChatContainer>
           <>
           {messages && messages.length > 0 && (
               messages.map((message, index) => {
                return (
                    <ChatBubble key={index} type={message.type}>{message.message}</ChatBubble>
                );
              })
           )}
           </>
           <TextInputContainer>
           <InputGroup
                placeholder="Type here to respond..."
                rightElement={
                <Button 
                    icon="arrow-right" 
                    minimal={true} 
                    small={true} 
                    type='submit'
                    onClick={() => submitMessageResponse(inputValue)}
                />}
                type={"text"}
                round={true}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
           </TextInputContainer>
       </ChatContainer>
    )
  }
