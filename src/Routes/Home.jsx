import React from "react";
import MyCarousel from "../Components/MyCarousel";
import AnimatedCard from "../Components/AnimatedCard";
import IMAGES from "../assets/images";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";
import { GameModeCard, Wrapper } from "../Styles/HomeStyle";
import { capitalizeFirstLetter } from "../Components/Utils/helpers";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {/* SECTION 1 */}
      <section class="hero" id="section_1">
        <div class="container-fluid h-100">
          <div class="row h-100">
            <div
              id="carouselExampleCaptions"
              class="carousel carousel-fade hero-carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container position-relative h-100">
                    <div class="carousel-caption d-flex flex-column justify-content-center">
                      <span class="small-title fs-5">
                        Golf Reimagined with{" "}
                        <strong class="text-warning">RockMadeGolf</strong>
                      </span>

                      <h1>Play. Compete. Connect.</h1>
                      <p className="fs-5 d-none d-sm-block">
                        {" "}
                        Experience golf like never before with games,
                        tournaments, and challenges. Explore
                      </p>

                      <div class="d-flex align-items-center mt-4">
                        <a class="custom-btn btn custom-link" href="#section_2">
                          Join a Tournament
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-image-wrap">
                    <img
                      src={IMAGES.image4}
                      class="img-fluid carousel-image"
                      alt=""
                    />
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="container position-relative h-100">
                    <div class="carousel-caption d-flex flex-column justify-content-center">
                      <span class="small-title fs-5">
                        Challenge <strong class="text-warning">Yourself</strong>
                      </span>

                      <h1>
                        Compete in tournaments or versus matches to test{" "}
                        <span class="text-warning">your skills.</span>
                      </h1>

                      <div class="d-flex align-items-center mt-4">
                        <a class="custom-btn btn custom-link" href="#section_2">
                          Explore Capabilities
                        </a>

                        {/* <a
                          class="popup-youtube custom-icon d-flex ms-4"
                          href="https://www.youtube.com/watch?v=VStvZjykQ00"
                        >
                          <i class="bi-play play-icon d-flex m-auto text-white"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>

                  <div class="carousel-image-wrap">
                    <img
                      src={IMAGES.image3}
                      class="img-fluid carousel-image"
                      alt=""
                    />
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="container position-relative h-100">
                    <div class="carousel-caption d-flex flex-column justify-content-center">
                      <span class="small-title fw-bold fs-5">
                        Track Your{" "}
                        <strong class="text-warning">Progress</strong>
                      </span>

                      <h1 className="fw-bold">
                        Join the <span class="text-warning">Leaderboard</span>
                      </h1>
                      <p className="fs-5 d-none d-sm-block">
                        Follow your handicap and climb the leaderboard while
                        enjoying the game you love.{" "}
                      </p>

                      <div class="d-flex align-items-center mt-4">
                        <a class="custom-btn btn custom-link" href="#section_2">
                          Explore Capabilities
                        </a>

                        <a
                          class="popup-youtube custom-icon d-flex ms-4"
                          href="https://www.youtube.com/watch?v=VStvZjykQ00"
                        >
                          <i class="bi-play play-icon d-flex m-auto text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-image-wrap">
                    <img
                      src={IMAGES.image1}
                      class="img-fluid carousel-image"
                      alt=""
                    />
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>

                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <div
        className="container text-center mt-4 p-4 w-100 w-md-50"
        id="section_2"
      >
        <h2 className="display-5 fw-bold">
          Rock<span className="word-span">Made</span>Golf Connects Golfers{" "}
        </h2>
        <h4 className="display-6 fw-bold"> With Exciting Matches</h4>
        <p className="lead mt-3">
          Golf is more than just a sport, it’s a lifestyle. RockMadeGolf was
          created to connect golfers with the games they love. Whether you’re a
          beginner looking for casual rounds or a pro chasing trophies, we bring
          the community, the competition, and the passion all in one platform.
        </p>
      </div>
      {/*  */}

      {/* SECTION 3 */}
      <Container fluid className="my-5" id="section_3">
        <h2 className="text-center mb-4 display-5 fw-bold">Our Game Modes</h2>
        <Row>
          <Col md={4} className="p-2">
            <GameModeCard bg={IMAGES.image3}>
              <div className="overlay d-flex flex-column justify-content-center align-items-center">
                <h2 className="">Member Game</h2>
                <p>
                  Perfect for casual play or practice. Invite friends or join a
                  friendly round at registered golf courses near you.
                </p>
                <div>
                  {" "}
                  <Button variant="success">Play Now</Button>
                </div>
              </div>
            </GameModeCard>
          </Col>
          <Col md={4} className="p-2">
            <GameModeCard bg={IMAGES.image5}>
              <div className="overlay d-flex flex-column justify-content-center align-items-center">
                <h2 className="">Tournament Game</h2>
                <p>
                  Compete in structured competitions and climb the leaderboard.
                </p>
                <div>
                  {" "}
                  <Button variant="success">Play Now</Button>
                </div>
              </div>
            </GameModeCard>
          </Col>
          <Col md={4} className="p-2">
            <GameModeCard bg={IMAGES.image2}>
              <div className="overlay d-flex flex-column justify-content-center align-items-center">
                <h2 className="">Versus Game</h2>
                <p>
                  Perfect for casual play or practice. Invite friends or join a
                  friendly round at registered golf courses near you.
                </p>
                <div>
                  {" "}
                  <Button variant="success">Play Now</Button>
                </div>
              </div>
            </GameModeCard>
          </Col>
        </Row>
      </Container>
      {/*  */}

      {/* SECTION 4 */}
      {/* Upcoming Tournaments */}
      <Container className="my-5" id="section_4">
        <h1 className="text-center mb-4">Upcoming Tournaments</h1>
        <Row>
          {[
            {
              title: "Spring Invitational",
              image: IMAGES.image3,
              link: "google.com",
              details: {
                date: "Date: March 20, 2025",
                location: "Palm Valley Golf Club",
                entry: "Free",
              },
            },
            {
              title: "Summer Cup",
              image: IMAGES.image2,
              link: "google.com",
              details: {
                date: "Date: July 15, 2025",
                location: "Palm Valley Golf Club",
                entry: "$25",
              },
            },
            {
              title: "Championship Series",
              image: IMAGES.image1,
              link: "google.com",
              details: {
                date: "Date: March 20, 2025",
                location: "Royal Pines Golf Course",
                entry: "$50",
              },
            },
          ].map(({ title, image, link, details }) => (
            <Col md={4} className="p-3">
              <Card className="shadow">
                <Card.Img src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {Object.keys(details).map((value, content) => (
                      <>
                        <strong>{capitalizeFirstLetter(value)}: </strong>
                        {details[value]} <br />
                      </>
                    ))}
                  </Card.Text>
                  <Button
                    variant="outline-dark rounded-0"
                    onClick={() => navigate(link)}
                    className="btn-outline-dark rounded-0"
                  >
                    <span className="px-4">Explore</span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/*  */}

      <Container
        id="section_5"
        fluid
        className="my-5 text-center p-5"
        // style={{ background: "var(--tertiary-color)" }}
      >
        <div className="container">
          <h2>How It Works</h2>
          <p className="w-sm-75 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusamus iure itaque, ut possimus odit rerum dolores veritatis
            cupiditate velit facere voluptatibus aut eos, fuga aliquam nisi cum
            incidunt quidem!
          </p>
          <Row className="mt-4 g-3">
            <Col md={4} className="">
              <div
                className="p-2 colorful-border d-flex flex-column justify-content-center"
                style={{ height: "200px" }}
              >
                <h4 style={{ color: "var(--primary-color)" }}>1. Sign Up</h4>
                <p>Create your profile and join the RockMadeGolf community.</p>
              </div>
            </Col>

            <Col md={4} className="">
              <div
                className="p-2 colorful-border d-flex flex-column justify-content-center"
                style={{ height: "200px" }}
              >
                <h4 style={{ color: "var(--secondary-color)" }}>
                  2. Choose a Mode
                </h4>
                <p>Pick between Normal, Tournament, or Versus games.</p>
              </div>
            </Col>

            <Col md={4} className="">
              <div
                className="p-2 colorful-border d-flex flex-column justify-content-center"
                style={{ height: "200px" }}
              >
                <h4 style={{ color: "var(--primary-color)" }}>
                  3. Play & Compete
                </h4>
                <p>
                  Hit the course, track your performance, and climb the
                  leaderboard.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/*  */}
      <div className="my-5 text-white" id="section-4">
        <div className="container-fluid">
          <div className="row child-1">
            <div className="col-md-6 p-0 m-0">
              <img
                className=""
                src={IMAGES.image1}
                width={"100%"}
                height={"100%"}
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "center", // focus left (use "right center" to focus right)
                  //   height: "500px",
                }}
              />
            </div>
            <div className="col-md-6 d-flex align-items-center p-3 p-md-5 py-5">
              <div className="p-md-5">
                <h3 className="display-5 fw-bold mb-4">
                  A very Lovely Welcome <br /> to our company
                </h3>
                <p>
                  Join us for a comprehensive support program designed
                  specifically for parents in the Medway area facing financial
                  challenges.
                </p>
                <div className="btn-div">
                  <Link to={"about"}>
                    <Button
                      variant="outline-light"
                      className="rounded-0 btn-lg d-flex justify-content-center align-items-center gap-2"
                    >
                      Know More About Us <BiArrowToRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center container mt-4" id="section_6">
        <h3 className="display-5 mb-3 fw-bold">Top Players</h3>
        <div className="row">
          {[
            {
              player_name: "Debby D. McLean",
              gender: "f",
              handicapIndex: "5",
              country: "United States",
              image: IMAGES.player1,
            },
            {
              player_name: "Kyong W. Woodward",
              gender: "f",
              handicapIndex: "4",
              country: "China",
              image: IMAGES.player2,
            },
            {
              player_name: "Norma C. Knapp",
              gender: "f",
              handicapIndex: "8",
              country: "Mexico",
              image: IMAGES.player3,
            },
            {
              player_name: "Kimberly T. Dillion",
              gender: "f",
              handicapIndex: "14",
              country: "Canada",
              image: IMAGES.player4,
            },
          ]
            .slice(0, 3)
            .map(
              (
                { player_name, gender, handicapIndex, country, image },
                index
              ) => (
                <div key={index} className="col-md-4 col-12">
                  <AnimatedCard>
                    <div className="volunteer-img-container d-flex align-items-center justify-content-center">
                      <img
                        src={IMAGES.image1}
                        alt={"image"}
                        className="volunteer-img rounded-circle mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <h3>{player_name}</h3>
                    <div className="d-flex justify-content-center gap-2">
                      <p>
                        Handicap: <strong>{handicapIndex}</strong>
                      </p>
                      <p>
                        Country: <strong>{country}</strong>
                      </p>
                    </div>
                  </AnimatedCard>
                </div>
              )
            )}
        </div>
      </div>
      {/*  */}
    </Wrapper>
  );
};

export default Home;
