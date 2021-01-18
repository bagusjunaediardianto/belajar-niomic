import React, { useState } from 'react'
import {Button, Item, Input} from 'semantic-ui-react'
import {useDispatch} from 'react-redux'
import { deleteTodo, updateTodo} from '../redux/actions';

const TodoItem = ({todo})=>{
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
    return(
            <Item.Group divided>
                <Item>
                    <Item.Content floated="left">
                        <Item.Header>#{todo.id.length > 1 ? todo.id[2]:todo.id}</Item.Header>
                        <Item.Description>
                        {editable ? 
                            <Input 
                                type="text"
                                value={name}
                                onChange={(e)=>setName(e.target.value)} 
                            /> 
                                :todo.name}
                        </Item.Description>
                    </Item.Content>
                    <Item.Extra>
                    <Button 
                        color="red" 
                        floated="right" 
                        onClick={()=>dispatch(deleteTodo(todo.id))}>
                            Delete
                        </Button>
                    <Button 
                        primary 
                        floated="right"
                        onClick={()=>{
                            console.log("update");
                            dispatch(updateTodo(
                                {
                                    ...todo,
                                    name : name
                                }
                            ))
                            if(editable){
                                setName(todo.name)
                            }
                            setEditable(!editable)
                        }}
                        >
                            {editable ? "Update":"Edit"}
                    </Button>
                    </Item.Extra> 
                </Item>
            </Item.Group>
    )
}

export default TodoItem