import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, Image } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <Image size="mini" src="https://react.semantic-ui.com/logo.png" style={{marginRight: "10px"}}/>
                    {/* <Image size="mini" src="./assets/logo.png" alt="logo" style={{marginRight: "10px"}} />         */}
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/personal' name='Personal' />
                <Menu.Item as={NavLink} to='/activities' name='Activities' />
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' name='CreateActivity' positive content='Create Acivity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}