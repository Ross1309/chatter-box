import styled from 'styled-components'
import { Button } from "@blueprintjs/core";

export const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
`

export const ChatBubble = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 6px;
  background-color: ${props => props.type === 'user' ? '#2B95D6' : '#8A9BA8'};
  color: #fff;
  border-radius: 18px;
  margin: 4px;
`

export const TextInputContainer = styled.div`
  display: flex;
  padding: 6px 0px;
  width 100%;
  
  > div {
    width: 50%;
    min-width: 100px;
  }
`