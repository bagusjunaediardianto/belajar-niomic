import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Container, Segment, Grid, Divider, Header, Icon, Search, Button, Dimmer, Loader, Image, Placeholder, List} from 'semantic-ui-react'


class App extends Component{
  render(){
  return (
    <div>
      <br/>
      <Container>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>OR</Divider>
            
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari Document
                </Header>
                  <Search placeholder="Search Document"/>
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name="file pdf outline" />
                  Tambah Dokumen Baru
                </Header>
                  <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"/>
        </Segment>
        <Grid columns="equal">
          <Grid.Column width={5}>
            <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h3">Website Terkait</Header>
            <List>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="https://google.com">Google</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="https://facebook.com">Facebook</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="https://react.semantic-ui.com/">Semantic UI</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="https://niomic.com">Niomic</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="https://reactjs.org/">React</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
}

export default App;
