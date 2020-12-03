import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Grid, Header, Image, Form, Segment, Button, Checkbox, Message} from 'semantic-ui-react';
class App extends Component {
  render(){
  return (
    <div>
      <br/>
      <Container style={{width:'30%'}}>
        <Grid textAlign="center" style={{height:'100vh'}} verticalAlign="middle">
          <Grid.Column style={{maxWidth:'450'}}>
              <Header as="h3" textAlign="center" color="teal">
                <Image src="data:image/png;base64,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"/>
                Form Login
              </Header>
              <Form>
                <Segment stacked>
                  <Form.Field>
                    <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail Address"/>
                  </Form.Field>
                  <Form.Field>
                    <Form.Input fluid icon="lock" iconPosition="left" placeholder="password" type="password"/>
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label="I agree to the Terms and Conditions"/>
                  </Form.Field>
                  <Button color="teal" fluid size="large" type="submit">Login</Button>
                </Segment>
              </Form>
              <Message>
                Tidak punya akun ? Silahkan <a href="/">Register</a>
              </Message>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
}

export default App;
