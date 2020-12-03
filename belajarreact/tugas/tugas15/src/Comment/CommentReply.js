import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const CommentReply = ()=> (
    <>
        <Form reply>
            <Form.TextArea />
            <Button content="add reply" labelPosition="left" icon="edit" primary />
        </Form>
    </>
)

export default CommentReply