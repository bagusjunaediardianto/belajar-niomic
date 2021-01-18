import React, { useState } from 'react';
import { Menu, Container, Button, Icon } from 'semantic-ui-react';
import { A } from 'hookrouter'
const Navbar = () => {
    const [activeItem, setActiveItem] = useState("home")

    const handleChangeMenu = (e, { name }) => {
        setActiveItem(name)
        e.preventDefault()
    }
    return (
        <Container textAlign="center" fluid>
            <Menu stackable size="huge" inverted color="blue">
                <Menu.Item>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png'
                        alt="Logo.png"
                    />

                </Menu.Item>
                <Menu.Item
                    name="home"
                    as={A}
                    href="/"
                    active={activeItem === "home"}
                    onClick={handleChangeMenu}
                >Home
            </Menu.Item>
                <Menu.Item
                    name="articles"
                    as={A}
                    href="/articles"
                    active={activeItem === "articles"}
                    onClick={handleChangeMenu}
                >Articles
            </Menu.Item>
                <Menu.Item
                    name="transactions"
                    as={A}
                    href="/transactions"
                    active={activeItem === "transactions"}
                    onClick={handleChangeMenu}
                >Transactions
            </Menu.Item>
                <Menu.Item
                    name="about"
                    as={A}
                    href="/about"
                    active={activeItem === "about"}
                    onClick={handleChangeMenu}
                >About
            </Menu.Item>
                <Menu.Item position="right">
                    <Button color="orange" icon size="large">
                        <Icon.Group>
                            <Icon loading size="large" name="circle notch" />
                            <Icon size="small" name="user" />
                        </Icon.Group>
                        Login
                    </Button>
                </Menu.Item>
            </Menu>
        </Container>
    )
}

export default Navbar