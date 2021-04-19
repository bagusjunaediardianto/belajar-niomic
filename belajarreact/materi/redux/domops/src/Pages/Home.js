import React, { useState } from 'react';
import { Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import Page from '../Component/Page';
import sourceDataHome from '../Data/sourceDataHome';
const Home = () => {
    const [dataHome] = useState(sourceDataHome)

    return (
        <Page>
            <Grid stackable columns={3}>
                <Grid.Row textAlign="center">

                    {dataHome.map((item, index) => {
                        return (
                            <Grid.Column key={index}>
                                <Segment size="huge" color="blue">
                                    <Statistic size="large">
                                        <Statistic.Value>
                                            <Icon name={item.icon} color={item.color} />{item.record}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            {item.title}
                                        </Statistic.Label>
                                    </Statistic>
                                </Segment>
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
            </Grid>
        </Page>
    )
}


export default Home;