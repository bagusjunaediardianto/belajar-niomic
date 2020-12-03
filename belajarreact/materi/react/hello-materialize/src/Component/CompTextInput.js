import React from 'react';
import {TextInput, Icon, Row} from 'react-materialize';

const CompTextInput = ()=> (
    <>
    <Row>
        <TextInput 
            icon={<Icon>account_circle</Icon>}
            id="TextInput-4"
            label="masukkan nama depan anda"
        />
        
        <TextInput 
            id="TextInput-4"
            label="masukkan nama belakang anda"
        />
    </Row>
    <Row>
        <TextInput 
            icon={<Icon>lock</Icon>}
            id="TextInput-4"
            label="masukkan password anda"
        />
    </Row>
    <Row>
        <TextInput 
            id="TextInput-4"
            label="Masukkan sebuah File"
            type="file"
        />
    </Row>
    </>
)

export default CompTextInput