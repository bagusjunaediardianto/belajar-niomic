import React from 'react'
import {Modal, Header, Segment, Button, Icon} from 'semantic-ui-react';
import FormMain from '../Form/FormMain';

const ModalMain = ()=>(
    <>
    <Header icon="plus" content="Tambah data"/>
    <Modal.Content>
        <Segment inverted>
            <FormMain />
        </Segment>
    </Modal.Content>
    <Modal.Actions>
        <Button color="red">
            <Icon name="remove" />Batal
        </Button>
        <Button color="green">
            <Icon name="checkmark" />Simpan
        </Button>
    </Modal.Actions>
    </>
)

export default ModalMain