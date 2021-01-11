import { screen } from '@testing-library/react';
import { renderWithRedux } from './renderWithRedux';
import App from './App';

describe('renders the 3 sections of th app', () => {
  test('renders the Top Bar', () => {
    renderWithRedux(<App />, { initialState: { messages: [] } });
    const chatComponent = screen.getByText('Chatter Box');
    expect(chatComponent).toBeInTheDocument();
  });

  test('renders the Chat section', () => {
    renderWithRedux(<App />, { initialState: { messages: [] } });
    const chatComponent = screen.getByText('Chat');
    expect(chatComponent).toBeInTheDocument();
  });

  test('renders the Customer Details section', () => {
    renderWithRedux(<App />, { initialState: { messages: [] } });
    const customerDetailComponent = screen.getByText('Customer Details');
    expect(customerDetailComponent).toBeInTheDocument();
  });

  test('renders the Transaction History section', () => {
    renderWithRedux(<App />, { initialState: { messages: [] } });
    const transactionsComponent = screen.getByText('Transaction History');
    expect(transactionsComponent).toBeInTheDocument();
  });
});
