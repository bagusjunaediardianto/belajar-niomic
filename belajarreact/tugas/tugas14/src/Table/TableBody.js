import React from 'react';
import {Table, Label} from 'semantic-ui-react';

const TableBody = ()=> {
    return(
        <>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Label color="teal" ribbon>
                            Panduan Belajar Javascript
                        </Label>
                    </Table.Cell>
                    <Table.Cell>PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Panduan Belajar CSS</Table.Cell>
                    <Table.Cell>PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Panduan Belajar React JS</Table.Cell>
                    <Table.Cell>PDF</Table.Cell>
                </Table.Row>
            </Table.Body>
        </>
    )
}

export default TableBody