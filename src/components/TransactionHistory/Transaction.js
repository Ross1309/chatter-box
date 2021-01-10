import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog, Classes } from "@blueprintjs/core";

import { TransactionsContainer, TransactionTitle, TransactionsDescription } from './Transaction.styles'

export const Transaction = ({transaction}) => {
    const [isOpen, toggleDialog] = useState(false)

    return (
        <>
            <TransactionsContainer onClick={() => toggleDialog(!isOpen)}>
                <TransactionTitle>{transaction.title}</TransactionTitle>
                <TransactionsDescription>{transaction.description}</TransactionsDescription>
            </TransactionsContainer>
            <Dialog 
                isOpen={isOpen} 
                onClose={() => toggleDialog(!isOpen)} 
                usePortal={true} 
                canOutsideClickClose={true} 
                canEscapeKeyClose={true}
                title={transaction.title}
            >
                <div className={Classes.DIALOG_BODY}>
                    {transaction.description}   
                </div>
            </Dialog>
        </>
    )
  }

  Transaction.propTypes = {
    transactions: PropTypes.array.isRequired,
  }