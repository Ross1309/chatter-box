import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const DashboardColumn = styled.div`
  display: flex; 
  flex-direction: column;
  width: ${props => props.colWidth};

  @media (max-width: 768px) {
    width: 100%;
  }
`