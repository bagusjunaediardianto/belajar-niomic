import React from 'react';
import {Grid, Table, Modal,Button,Icon} from 'semantic-ui-react';
import TableMain from './Table/TableMain';
import ModalMain from './Modal/ModalMain';

const ComponentMain = ()=> {
    return(
        <>
        <br />
        <br />
            <Grid columns="1" centered>
                <Grid.Column width={16}>
                    <Table fixed selectable>
                        <TableMain />
                    </Table>
                    <Modal 
                        trigger={<Button icon labelPosition="left" primary>
                        Tambah Data
                        <Icon name="plus" />
                        </Button>}
                        closeIcon
                    >
                        <ModalMain />
                    </Modal>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default ComponentMain