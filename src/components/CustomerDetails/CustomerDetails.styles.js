import styled from 'styled-components'

export const Details = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 12px;
`

export const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px 0px;
`

export const DetailItem = styled.div`
  display: flex; 
  flex-direction: column;
  text-align: left;
  margin-right: 42px;
  overflow-wrap: anywhere;
  width: 250px;
  flex: auto;
`

export const DetailLabel = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
`