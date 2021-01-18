import React from 'react';
import { Container } from 'semantic-ui-react';

const Wrapper = ({ children }) => {
    return (
        <Container fluid>
            {children}
        </Container>
    )
}

export default Wrapper