import React from 'react';
import {Table} from 'semantic-ui-react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

const TableContent = (props)=> {
    return(
        <Table celled>
            <TableHeader />
            <TableBody />
            <TableFooter />
        </Table>
    )
}

export default TableContent