import React from 'react'

import {Panel} from '../Panel/Panel'
import { CustomerDetails } from '../CustomerDetails/CustomerDetails'
import { Chat } from '../Chat/Chat'
import { TransactionHistory } from '../TransactionHistory/TransactionHistory'
import { DashboardContainer, DashboardColumn } from './Dashboard.styles'

const mockUser = {
    firstName: 'Bill',
    lastName: 'Murray',
    phoneNumber: "+1 555-555-5555",
    email: 'bill.murray@groundhogday.repeat',
    address: '256 Juniper Lane Austin TX 78744'
}

const mockTransactionHistory = [
    {
        id: 1,
        title: 'Christmas Sale!!!',
        description: "I'm baby vaporware hammock chambray, PBR&B celiac hella polaroid pop-up DIY 8-bit keytar helvetica. Yr PBR&B jean shorts tattooed synth cronut polaroid brooklyn freegan palo santo affogato readymade tousled flannel scenester. Paleo lyft green juice williamsburg. Fingerstache coloring book shaman truffaut slow-carb freegan tilde tofu single-origin coffee hell of lo-fi DIY.",
    },
    {
        id: 2,
        title: '50% Off!',
        description: "Health goth succulents DIY art party live-edge chia. Green juice jean shorts keytar, unicorn hella cray freegan art party yr godard kinfolk four dollar toast brunch retro. Normcore chartreuse williamsburg, heirloom biodiesel brooklyn four loko woke stumptown tilde. Fingerstache fashion axe banh mi, godard plaid post-ironic scenester next level pug ethical roof party celiac sustainable viral franzen.",
    },
    {
        id: 3,
        title: 'Lebron Sneaker',
        description: "Williamsburg chambray cardigan pour-over beard. Tattooed godard la croix intelligentsia. Meggings hammock sartorial mumblecore readymade pok pok irony meditation raw denim prism. Sustainable ethical VHS occupy, hell of cardigan tote bag seitan chillwave mlkshk swag before they sold out gluten-free. Listicle PBR&B selvage edison bulb banh mi kickstarter kale chips hammock ramps skateboard tousled direct trade raclette sartorial swag. Quinoa umami adaptogen brunch street art lyft pop-up skateboard XOXO fixie tumeric activated charcoal PBR&B coloring book mlkshk.",
    },
    {
        id: 4,
        title: 'Run of the Extra Turkey',
        description: "Williamsburg chambray cardigan pour-over beard. Tattooed godard la croix intelligentsia. Meggings hammock sartorial mumblecore readymade pok pok irony meditation raw denim prism. Sustainable ethical VHS occupy, hell of cardigan tote bag seitan chillwave mlkshk swag before they sold out gluten-free. Listicle PBR&B selvage edison bulb banh mi kickstarter kale chips hammock ramps skateboard tousled direct trade raclette sartorial swag. Quinoa umami adaptogen brunch street art lyft pop-up skateboard XOXO fixie tumeric activated charcoal PBR&B coloring book mlkshk.",
    },
    {
        id: 5,
        title: 'Shhhhhh! These deals will go fast',
        description: "Williamsburg chambray cardigan pour-over beard. Tattooed godard la croix intelligentsia. Meggings hammock sartorial mumblecore readymade pok pok irony meditation raw denim prism. Sustainable ethical VHS occupy, hell of cardigan tote bag seitan chillwave mlkshk swag before they sold out gluten-free. Listicle PBR&B selvage edison bulb banh mi kickstarter kale chips hammock ramps skateboard tousled direct trade raclette sartorial swag. Quinoa umami adaptogen brunch street art lyft pop-up skateboard XOXO fixie tumeric activated charcoal PBR&B coloring book mlkshk.",
    },
    {
        id: 5,
        title: 'Annual Summer Sale',
        description: "Williamsburg chambray cardigan pour-over beard. Tattooed godard la croix intelligentsia. Meggings hammock sartorial mumblecore readymade pok pok irony meditation raw denim prism. Sustainable ethical VHS occupy, hell of cardigan tote bag seitan chillwave mlkshk swag before they sold out gluten-free. Listicle PBR&B selvage edison bulb banh mi kickstarter kale chips hammock ramps skateboard tousled direct trade raclette sartorial swag. Quinoa umami adaptogen brunch street art lyft pop-up skateboard XOXO fixie tumeric activated charcoal PBR&B coloring book mlkshk.",
    },
]

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
                        <TransactionHistory transactions={mockTransactionHistory}/>
                    </Panel>
                </DashboardColumn>
            </DashboardContainer>
        </div>
    )
  }