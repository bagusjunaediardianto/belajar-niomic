import React from 'react';
import {Comment} from 'semantic-ui-react';

const CommentNested = (props)=> (
    <>
        <Comment.Avatar src={props.avatar}/>
        <Comment.Content>
            <Comment.Author as='a' content={props.author}/>
            <Comment.Metadata content={<span>{props.metaData}</span>} />
            <Comment.Text content={props.text}/>
            <Comment.Actions>
                <Comment.Action content={props.action}/>
            </Comment.Actions>
        </Comment.Content>
    </>
)

export default CommentNested