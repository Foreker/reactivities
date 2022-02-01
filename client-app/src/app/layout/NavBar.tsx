import React from 'react';
import { Button, Container, Menu, Image } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function NavBar() {
    const {activityStore} = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <Image size="mini" src="./assets/logo.png" alt="logo" style={{marginRight: "10px"}} />        
                    <Image size="mini" src="https://react.semantic-ui.com/logo.png" style={{marginRight: "10px"}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Inicio'>
                </Menu.Item>
                <Menu.Item name='Activities'>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={() => activityStore.openForm()} positive content='Create Acivity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}