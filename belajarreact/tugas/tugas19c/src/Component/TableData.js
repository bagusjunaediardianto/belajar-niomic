import React from 'react';
import {Table,Loader, Button} from 'semantic-ui-react';


const TableData = ({posts, loading})=>{    
    if(!loading){
        return(
            <div>       
                <Table selectable unstackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Body</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {posts.map((item,index)=>(
                        <Table.Row key={index}>
                            <Table.Cell>
                                {item.id}
                            </Table.Cell>
                            <Table.Cell>
                                {item.title}
                            </Table.Cell>
                            <Table.Cell>
                                {item.body}
                            </Table.Cell>
                            <Table.Cell>
                                <Button.Group>
                                    <Button primary>Edit</Button>
                                    <Button.Or />
                                    <Button color="red">Delete</Button>
                                </Button.Group>
                            </Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        )
    }

    return (
        <>
        <Loader active inline="centered" />
        </>
    )
}

export default TableData