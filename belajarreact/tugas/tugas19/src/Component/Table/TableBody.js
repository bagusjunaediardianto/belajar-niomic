import React from 'react'
import {Table, Button} from 'semantic-ui-react';
const TableBody =(props)=>{
    return(
    <>
    <Table.Row>
    <Table.Cell>{props.postId}</Table.Cell>
    <Table.Cell>{props.id}</Table.Cell>
    <Table.Cell>{props.name}</Table.Cell>
    <Table.Cell>{props.email}</Table.Cell>
    <Table.Cell>{props.body}</Table.Cell>
    <Table.Cell width={3}>
        <Button color="teal" content="Edit"/>
        <Button color="red" content="Delete" />
    </Table.Cell>
    </Table.Row>
    </>
    )
}

export default TableBody
