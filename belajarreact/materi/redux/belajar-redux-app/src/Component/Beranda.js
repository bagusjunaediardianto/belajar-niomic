import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { Card, Image, Icon, Grid, Container } from "semantic-ui-react";
import { connect } from "react-redux";

const Beranda = ({ Images }) => {
  const [dataHome, setDataHome] = useState([]);

  const getDataHome = () => {
    axios.get(`http://api.tvmaze.com/search/shows?q=a`).then((res) => {
      console.log(res.data);
      setDataHome(res.data);
    });
  };
  useEffect(() => {
    getDataHome();
  });
  return (
    <Container>
      <h2>Halaman Beranda</h2>
      <Carousel
        autoPlay
        centerMode
        centerSlidePercentage={40}
        showStatus={false}
      >
        {Images.map((data, key) => {
          return (
            <div key={key}>
              <img src={data} alt="" />
            </div>
          );
        })}
      </Carousel>
      <Grid centered>
        {dataHome.map((data, key) => {
          var ratings = { ...data.show.rating };
          var images = { ...data.show.image };

          if (data.show.image === null) {
            images = Images[0];
          } else {
            images = images.original;
          }

          if (ratings.average === null) {
            ratings = "no ratings";
          } else {
            ratings = ratings.average;
          }
          return (
            <Grid.Column width={4} key={key}>
              <Card fluid>
                <Image src={images} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{data.show.name}</Card.Header>
                  <Card.Description>{data.show.status}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="star" />
                  {ratings}
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return dispatch({
    type: "ACTIVE_ITEM",
    ActiveItem: "beranda",
  });
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Beranda);
