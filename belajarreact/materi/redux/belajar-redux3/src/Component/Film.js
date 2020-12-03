import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Container, Grid, Image, Input, Card, Icon } from "semantic-ui-react";
class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFilm: [],
    };
  }

  getData = (e) => {
    axios.get(`http://api.tvmaze.com/search/shows?q=man`).then((res) => {
      this.setState({
        dataFilm: res.data,
      });
    });
  };

  pencarian = (e) => {
    if (e.target.value === "") {
      this.getData();
    } else {
      axios
        .get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((res) => {
          this.setState({
            dataFilm: res.data,
          });
        });
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Container>
        <h2>Halaman Film</h2>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg" />
              <Image
                style={{ marginTop: 20 }}
                src="https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg"
              />
              <Image
                style={{ marginTop: 20 }}
                src="https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg"
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Input
                icon={{ name: "search", circular: true, link: true }}
                placeholder="Search..."
                onChange={(e) => this.pencarian(e)}
              />
              <Grid style={{ marginTop: 10 }} centered>
                {this.state.dataFilm.map((data, key) => {
                  var ratings = { ...data.show.rating };
                  var images = { ...data.show.image };

                  if (data.show.image === null) {
                    images =
                      "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg";
                  } else {
                    images = images.original;
                  }

                  if (ratings.average === null) {
                    ratings = "no ratings";
                  } else {
                    ratings = ratings.average;
                  }
                  return (
                    <Grid.Column width={5} key={key}>
                      <Card
                        image={images}
                        header={data.show.name}
                        meta={("status : ", data.show.status)}
                        description={data.show.language}
                        extra={
                          <Icon name="star">
                            <p>
                              <strong>{ratings}</strong>
                            </p>
                          </Icon>
                        }
                      />
                    </Grid.Column>
                  );
                })}
              </Grid>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return dispatch({
    type: "ACTIVE_ITEM",
    ActiveItem: "film",
  });
};

const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
