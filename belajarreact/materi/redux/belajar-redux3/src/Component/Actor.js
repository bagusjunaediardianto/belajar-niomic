import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container, Grid, Image, Input, Card, Icon } from "semantic-ui-react";
import { Carousel } from "react-responsive-carousel";
class Actor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFilm: [],
      dataActor: [],
    };
  }

  getDataFilm = () => {
    const fetchData = async () => {
      const res = await axios.get(`http://api.tvmaze.com/search/shows?q=d`);
      this.setState({
        dataFilm: res.data,
      });
    };
    fetchData();
  };

  getDataActor = () => {
    const fetchData = async () => {
      const res = await axios.get(`http://api.tvmaze.com/search/people?q=b`);
      this.setState({
        dataActor: res.data,
      });
    };
    fetchData();
  };

  pencarian = (e) => {
    if (e.target.value === "") {
      this.getDataActor();
    } else {
      axios
        .get(`http://api.tvmaze.com/search/people?q=${e.target.value}`)
        .then((res) => {
          this.setState({
            dataActor: res.data,
          });
        });
    }
  };

  componentDidMount() {
    this.getDataFilm();
    this.getDataActor();
  }
  render() {
    return (
      <div>
        <h2>Halaman Actor</h2>
        <Container>
          <Carousel
            autoPlay
            centerMode
            centerSlidePercentage={20}
            showStatus={false}
          >
            {this.state.dataFilm.map((data, key) => {
              var images = { ...data.show.image };

              if (data.show.image == null) {
                images =
                  "https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767982__480.jpg";
              } else {
                images = images.original;
              }
              return (
                <div key={key}>
                  <img src={images} alt="" />
                </div>
              );
            })}
          </Carousel>
          <Grid style={{ marginTop: 20 }}>
            <Grid.Column width={4}>
              <Carousel
                autoPlay
                centerMode
                centerSlidePercentage={40}
                showStatus={false}
              >
                {this.state.dataActor.map((data, key) => {
                  var images = { ...data.person.image };

                  if (data.person.image == null) {
                    images =
                      "https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767982__480.jpg";
                  } else {
                    images = images.original;
                  }
                  return (
                    <div key={key}>
                      <img src={images} alt="" />
                    </div>
                  );
                })}
              </Carousel>
            </Grid.Column>
            <Grid.Column width={12}>
              <Input
                icon={{ name: "search", circular: true, link: true }}
                placeholder="Search..."
                onChange={(e) => this.pencarian(e)}
              />
              <Grid style={{ marginTop: 20 }} centered>
                {this.state.dataActor.map((data, key) => {
                  var gambar = { ...data.person.image };

                  if (data.person.image === null) {
                    gambar =
                      "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg";
                  } else {
                    gambar = gambar.original;
                  }
                  return (
                    <Grid.Column key={key} width={4}>
                      <Card
                        image={gambar}
                        header={data.person.name}
                        meta={data.person.gender}
                        extra={
                          <Icon name="star">
                            <p>
                              <strong>{data.score}</strong>
                            </p>
                          </Icon>
                        }
                      />
                    </Grid.Column>
                  );
                })}
              </Grid>
              <Image
                style={{ marginTop: 20 }}
                src="https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg"
              />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return dispatch({
    type: "ACTIVE_ITEM",
    ActiveItem: "actor",
  });
};

const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Actor);
