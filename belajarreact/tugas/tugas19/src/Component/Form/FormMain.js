import React from 'react';
import {Form, Label, Input} from 'semantic-ui-react';

const FormMain = ()=> (
    <>
    <Form size="large" inverted>
        <Form.Field inline>
            <Label>
                Your Name
            </Label>
            <Input placeholder="Nama Anda"/>
        </Form.Field>
    </Form>
    </>
)

export default FormMain