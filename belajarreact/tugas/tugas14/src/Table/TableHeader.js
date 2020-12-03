import React from 'react';
import {Table, Menu, Search} from 'semantic-ui-react';

const TableHeader = ()=> {
    return(
        <>
        <Table.Header>
            <Table.HeaderCell colSpan={2}>
                <Menu.Menu position="right">
                    <Search placeholder="search document" size="mini" style={{float : "right"}} />
                </Menu.Menu>
            </Table.HeaderCell>
        </Table.Header>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Nama Document</Table.HeaderCell>
            <Table.HeaderCell>Jenis File</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        </>
    )
}

export default TableHeader