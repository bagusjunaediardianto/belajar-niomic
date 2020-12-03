import React from 'react';
import {Table} from 'semantic-ui-react';

const TableHeader = (props)=> {
        return(
    <>
    <Table.HeaderCell>{props.headerStruktur}</Table.HeaderCell>
    </>
)
}
export default TableHeader