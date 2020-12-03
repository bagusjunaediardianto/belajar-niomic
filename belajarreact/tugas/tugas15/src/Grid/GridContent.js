import React from 'react';
import {Grid} from 'semantic-ui-react';
import FeedContent from '../Feed/FeedContent';
import CommentContent from '../Comment/CommentContent';

const GridContent = (props)=> {

    return(
        <>
        <Grid columns="equal">
            <Grid.Column></Grid.Column>
            <Grid.Column floated="left" width={5}>
                <CommentContent />
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column floated="right" width={5}>
                <FeedContent />
            </Grid.Column>
            <Grid.Column></Grid.Column>
        </Grid>
        </>
    )
}

export default GridContent
