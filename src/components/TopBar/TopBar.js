import React from 'react'

import { Navbar, Button } from "@blueprintjs/core";

export const Topbar = () => {
    return (
        <Navbar className="bp3-dark">
            <Navbar.Group align='left'>
                <Navbar.Heading className="bp3-minimal">Chatter Box</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" />
            </Navbar.Group>
            <Navbar.Group align='right'>
                <Button className="bp3-minimal" icon="user" />
                <Button className="bp3-minimal" icon="cog" />
            </Navbar.Group>
        </Navbar>
    )
}