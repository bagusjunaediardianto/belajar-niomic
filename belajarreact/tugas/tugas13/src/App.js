import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Segment, Grid, Divider, Icon, Search, Header, Button, Placeholder, List, Menu, Table, Label} from 'semantic-ui-react';

class App extends Component {
  render(){
  return (
    <div>
      <br />
      <Container>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>OR</Divider>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari Dokumen
                </Header>
                <Search placeholder="Search document.." />
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name="pdf file outline" />
                  Tambah Dokumen Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Grid columns="equal" stackable>
          <Grid.Column width={5}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line length="full"/>
                  <Placeholder.Line length="long"/>
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
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
                  <a href="https://reactjs.org">React</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
      <Container>
        <Grid columns="equal">
          <Grid.Column></Grid.Column>
          <Grid.Column width={12}>
            <Segment>
              <Table celled>
                <Table.Header>
                    <Table.HeaderCell colSpan={2}>
                        <Menu.Menu position="right">
                          <Search placeholder="search document.." size="mini" style={{float:"right"}}/>
                        </Menu.Menu>
                    </Table.HeaderCell>
                </Table.Header>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Nama Document</Table.HeaderCell>
                    <Table.HeaderCell>Jenis File</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Label color="teal" ribbon>
                        Panduan Belajar JavaSvript
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
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3">
                        <Menu floated="right" pagination>
                          <Menu.Item as="a" icon>
                            <Icon name="chevron left" />
                          </Menu.Item>
                          <Menu.Item as="a">1</Menu.Item>
                          <Menu.Item as="a">2</Menu.Item>
                          <Menu.Item as="a">3</Menu.Item>
                          <Menu.Item as="a">4</Menu.Item>
                          <Menu.Item as="a" icon>
                            <Icon name="chevron right" />
                          </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
              </Segment>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
}

export default App;
