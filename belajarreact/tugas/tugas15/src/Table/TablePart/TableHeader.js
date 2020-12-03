import React from 'react';
import TableMenu from '../TableMenu';
import {Table} from 'semantic-ui-react';

const TableHeader = ()=> {
    return(
        <>
            <Table.Header>
                <Table.HeaderCell colSpan={3}>
                    <TableMenu />
                </Table.HeaderCell>
            </Table.Header>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>No</Table.HeaderCell>
                    <Table.HeaderCell>Nama Document</Table.HeaderCell>
                    <Table.HeaderCell>Jenis File</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        </>
    )
}

export default TableHeader