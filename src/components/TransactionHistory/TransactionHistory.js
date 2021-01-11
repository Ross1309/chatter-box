import React from 'react';
import PropTypes from 'prop-types';

import { Transaction } from './Transaction';

export const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      {transactions &&
        transactions.length > 0 &&
        transactions.map((transaction, index) => {
          return <Transaction key={index + transaction.id} transaction={transaction} />;
        })}
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
