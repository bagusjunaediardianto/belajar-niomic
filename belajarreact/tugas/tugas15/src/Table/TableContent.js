import React from 'react';
import TableHeader from './TablePart/TableHeader';
import TableBody from './TablePart/TableBody';
import TableFooter from './TablePart/TableFooter';
import {Table} from 'semantic-ui-react';


const TableContent = ()=> {
    return(
        <>
        <Table celled>
            <TableHeader />
            <TableBody />
            <TableFooter />
        </Table>
        </>
    )
}

export default TableContent