import React from 'react';
import { Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import Page from '../Component/Page';

const Home = () => {
    return (
        <Page>
            <Grid stackable columns={3}>
                <Grid.Row textAlign="center">
                    <Grid.Column>
                        <Segment size="huge" color="blue">
                            <Statistic size="large">
                                <Statistic.Value>
                                    <Icon name="minus circle" color="red" />3
                        </Statistic.Value>
                                <Statistic.Label>
                                    Transfer Out
                            </Statistic.Label>
                            </Statistic>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment size="huge" color="blue">
                            <Statistic size="large">
                                <Statistic.Value>
                                    <Icon name="plus circle" color="yellow" />3
                            </Statistic.Value>
                                <Statistic.Label>
                                    Transfer In
                            </Statistic.Label>
                            </Statistic>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment size="huge" color="blue">
                            <Statistic size="large">
                                <Statistic.Value>
                                    <Icon name="truck" color="green" />3
                            </Statistic.Value>
                                <Statistic.Label>
                                    PO & DO Transactions
                            </Statistic.Label>
                            </Statistic>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Page>
    )
}


export default Home;