import React from 'react';
import { Container } from 'semantic-ui-react';

const Page = ({ children }) => {
    return (
        <Container textAlign="center" style={{ marginTop: "15vh", opacity: 1 }}>
            {children}
        </Container>
    )
}

export default Page