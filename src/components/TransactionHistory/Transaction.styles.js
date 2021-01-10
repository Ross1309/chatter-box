import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #738694;
  cursor: pointer;

  &:hover {
      background: #EBF1F5;
  }

  &:last-child {
    border-bottom: none;
  }

  p {
    margin-bottom: 4px;
  } 
`

export const TransactionTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const TransactionsDescription = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`