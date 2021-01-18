import React from 'react';
import {Container, Segment} from 'semantic-ui-react';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';


const App =()=>{
  return(
    <Container textAlign="center">
      <Segment.Group compact size="large">
      <Segment padded>
        <TodoInput />
      </Segment>
      <Segment padded>
        <TodoList />
      </Segment>
    </Segment.Group>
    </Container>
    
  )
}

export default App