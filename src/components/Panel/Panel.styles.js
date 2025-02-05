import styled from 'styled-components';

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #738694;
  border-radius: 5px;
  margin: 12px 0px;
  background: #f5f8fa;
`;

export const PanelHeader = styled.div`
  display: flex;
  align-contents: center;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #738694;
`;

export const PanelBody = styled.div`
  display: flex;
  flex-direction: column;
`;
