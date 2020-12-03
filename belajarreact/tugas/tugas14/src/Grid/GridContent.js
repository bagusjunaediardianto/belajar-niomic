import React from 'react';
import TableContent from '../Table/TableContent';
import ListContent from '../List/ListContent';
import FeedContent from '../Feed/FeedContent';
import {Grid, Segment, Header, List, Feed} from 'semantic-ui-react'; 

const GridContent = ()=> {
    return(
        <>
        <Grid columns="equal">
            <Grid.Column></Grid.Column>
            <Grid.Column width="12">
                <Segment clearing>
                <TableContent />
                </Segment>
            </Grid.Column>
            <Grid.Column></Grid.Column>
        </Grid>
        <Grid columns="equal">
            <Grid.Column></Grid.Column>
            <Grid.Column floated='left' width={4}>
                <Feed size="small">
                    <FeedContent />
                </Feed>
            </Grid.Column>
            <Grid.Column></Grid.Column><Grid.Column></Grid.Column>
            <Grid.Column floated='right' width={4}>
                <Header as="h3">Website Terkait</Header>
                <List>
                    <ListContent ikon="linkify" sourceLink="https://google.com" konten="Google" />
                    <ListContent ikon="linkify" sourceLink="https://facebook.com" konten="Facebook"/>
                    <ListContent ikon="linkify" sourceLink="https://react.semantic-ui.com/" konten="Semantic UI" />
                    <ListContent ikon="linkify" sourceLink="https://niomic.com" konten="Niomic" />
                    <ListContent ikon="linkify" sourceLink="https://reactjs.org" konten="React JS" />
                </List>
            </Grid.Column>
            <Grid.Column></Grid.Column>
        </Grid>
        </>
    )
}

export default GridContent