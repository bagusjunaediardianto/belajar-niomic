import {React,useState} from 'react'
import {Segment,Input,Button} from 'semantic-ui-react'
import { addTodo } from '../redux/actions'
import {v1 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'

const TodoInput=()=> {
    let [name, setName] = useState()
    let dispatch = useDispatch()
    return (
        <Segment> 
           <Input 
                onChange={(e)=>setName(e.target.value)}
                value={name}
                type="text"
                placeholder="ketikkan sesuatu disini" />
           {' '}
           <Button 
            onClick={()=>{
                dispatch(
                    addTodo(
                        {
                        id : uuid(),
                        name : name
                    }
                )    
            )
            setName('');
        }}
            primary>
                Add
            </Button>
        </Segment>
    )
}

export default TodoInput