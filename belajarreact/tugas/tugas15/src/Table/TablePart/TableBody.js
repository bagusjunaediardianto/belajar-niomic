import React from 'react';
import {Table, Label} from 'semantic-ui-react';
import listData from '../../Data/ListTable';

const TableBody = ()=> {
    return(
        <>
        <Table.Body>
            {listData.map((item,index,array)=> {
                return(
                <Table.Row key={index}>
                    <Table.Cell>{index+1}</Table.Cell>
                    {index === 0 ?(
                        <Table.Cell>
                            <Label color="teal" ribbon>
                                {item.nameDoc}
                            </Label>
                        </Table.Cell>
                    ):(
                        <Table.Cell>{item.nameDoc}</Table.Cell>    
                    )}
                    <Table.Cell>{item.typeDoc}</Table.Cell>
                </Table.Row>
                )
            })}
        </Table.Body>
        </>
    )
}

export default TableBody