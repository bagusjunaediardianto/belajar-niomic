import React, { useContext } from 'react';
import {Card, Button, Container} from 'semantic-ui-react';
import storeContext from '../Store/storeContext';


const {DataContext} = storeContext;
const Home = ()=> {
    const dataProps = useContext(DataContext);
    return(
        <Container>
        <Card.Group centered stackable>
            {dataProps.dataValue.map((item, key)=>{
             <Card>
             <Card.Content>
                 <Card.Header textAlign="center">
                     3 Transaction TITO
                 </Card.Header>
             </Card.Content>
             <Card.Content extra textAlign="center">
                 <Button.Group>
                     <Button color="blue">
                         Submit
                     </Button>
                     <Button.Or />
                     <Button color="red">
                         Decline
                     </Button>
                 </Button.Group>
             </Card.Content>
         </Card>    
            })}
            {/* <Card>
                <Card.Content>
                    <Card.Header textAlign="center">
                        3 Transaction TITO
                    </Card.Header>
                </Card.Content>
                <Card.Content extra textAlign="center">
                    <Button.Group>
                        <Button color="blue">
                            Submit
                        </Button>
                        <Button.Or />
                        <Button color="red">
                            Decline
                        </Button>
                    </Button.Group>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header textAlign="center">
                        2 Transaction DO
                    </Card.Header>
                </Card.Content>
                <Card.Content extra textAlign="center">
                    <Button.Group>
                        <Button color="blue">
                            Submit
                        </Button>
                        <Button.Or />
                        <Button color="red">
                            Decline
                        </Button>
                    </Button.Group>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header textAlign="center">
                        2 Transaction STO
                    </Card.Header>
                </Card.Content>
                <Card.Content extra textAlign="center">
                    <Button.Group>
                        <Button color="blue">
                            Submit
                        </Button>
                        <Button.Or />
                        <Button color="red">
                            Decline
                        </Button>
                    </Button.Group>
                </Card.Content>
            </Card> */}
        </Card.Group>
        </Container>
        )
}

export default Home