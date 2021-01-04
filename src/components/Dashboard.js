import React from 'react'

import {Panel} from './Panel'
import { CustomerDetails } from './CustomerDetails'
import { Chat } from './Chat'
import { DashboardContainer, DashboardColumn } from './Dashboard.styles'

const mockUser = {
    firstName: 'Bill',
    lastName: 'Murray',
    phoneNumber: "+1 555-555-5555",
    email: 'bill.murray@groundhogday.repeat',
    address: '256 Juniper Lane Austin TX 78744'
}

export const Dashboard = () => {
    return (
        <div>
            <DashboardContainer>
                <DashboardColumn colWidth="70%">
                    <Panel title="Customer Details">
                        <CustomerDetails user={mockUser}/>
                    </Panel> 
                    <Panel title="Chat">
                        <Chat />
                    </Panel>
                </DashboardColumn>
                <DashboardColumn colWidth="28%">
                    <Panel title="Transaction History">
                        <CustomerDetails user={mockUser}/>
                        <CustomerDetails user={mockUser}/>
                        <CustomerDetails user={mockUser}/>
                    </Panel>
                </DashboardColumn>
            </DashboardContainer>
        </div>
    )
  }