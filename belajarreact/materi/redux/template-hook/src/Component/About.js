import React from "react";
import {
  Header,
  Grid,
  Card,
  Image,
  Icon,
  Segment,
  Divider,
  Reveal,
  Dimmer,
  Progress,
} from "semantic-ui-react";

const makeCircle = { width: 300, height: 100 };
const About = () => {
  return (
    <>
      <Grid centered inverted="true" stackable>
        <Reveal animated="small fade" instant>
          <Reveal.Content hidden>
            <Segment
              style={{
                dislay: `flex`,
                flexFlow: `column wrap`,
                alignItems: `center`,
                justifyContent: `space-betweem`,
                marginTop: 200,
                marginBottom: 150,
                height: 220,
                width: 630,
              }}
              compact
            >
              <Segment inverted>
                <Header as="h2">Save The Date ...</Header>
              </Segment>

              <Segment>
                <Header as="h2">15 November 2020</Header>
              </Segment>
              <Segment inverted>
                <Header as="h2">Taman Adiyasa Blok C 05/06 Cikasungka, Solear, Kab.Tangerang</Header>
              </Segment>
            </Segment>
          </Reveal.Content>
          <Reveal.Content visible>
            <Segment
              style={{
                dislay: `flex`,
                flexFlow: `column wrap`,
                alignItems: `center`,
                justifyContent: `space-between`,
                marginTop: 200,
                marginBottom: 150,
                height: 260,
                width: 660,
              }}
              compact
              stacked
            >
              <Dimmer active>
                <Segment style={makeCircle}>
                  <Header as="h2" textAlign="center">
                    Wedding Invitation
                  </Header>
                </Segment>
                <Progress percent={100} active color="blue">
                  <p style={{ color: "white" }}>
                    Amazing, Please save the date guys
                  </p>
                </Progress>
              </Dimmer>
            </Segment>
          </Reveal.Content>
        </Reveal>
      </Grid>
      <Reveal animated="small fade">
        <Reveal.Content hidden>
          <Grid centered style={{ marginTop: 50, height: 900 }}>
            <Segment inverted compact stacked>
              <Grid centered relaxed="very" stackable>
                <Grid.Column width={3} widescreen={5}>
                  <Card fluid>
                    <Image
                      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                      wrapped
                      ui={false}
                    />
                    <Card.Content>
                      <Card.Header>Mikael Yoel Suharta</Card.Header>
                      <Card.Meta>
                        <span className="date">Mempelai Pria</span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="user" />
                      22 Friends
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column width={3} widescreen={5}>
                  <Card fluid>
                    <Image
                      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                      wrapped
                      ui={false}
                    />
                    <Card.Content>
                      <Card.Header>Dian</Card.Header>
                      <Card.Meta>
                        <span className="date">Mempelai Wanita</span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="user" />
                      22 Friends
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid>
              <Divider
                vertical
                content={<Icon name="heart" color="red" size="big" />}
              ></Divider>
            </Segment>
          </Grid>
        </Reveal.Content>
        <Reveal.Content visible>
          <Grid centered relaxed="very" stackable>
            <Segment
              inverted
              stacked
              style={{ height: 500, width: 1200 }}
            ></Segment>
          </Grid>
        </Reveal.Content>
      </Reveal>
    </>
  );
};

export default About;
