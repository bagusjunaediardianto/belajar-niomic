import React from 'react';
import { Dimmer, Loader, Segment, Image } from 'semantic-ui-react';
import Page from '../Component/Page';
const NotFound = () => {
    return (
        <Page>
            <Segment size="huge" color="blue" inverted>
                <Dimmer active blurring="true" inverted>
                    <Loader size="huge">4.0.4 NOT FOUND</Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' fluid />
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' fluid />
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' fluid />
            </Segment>

        </Page>
    )
}

export default NotFound