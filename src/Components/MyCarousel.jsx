import { Button, Carousel } from "react-bootstrap";
import IMAGES from "../assets/images";

const MyCarousel = () => (
  <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMAGES.image1}
          alt="First slide"
          style={{ objectFit: "cover", height: "600px" }}
        />
        <Carousel.Caption className="text-start p-3">
          <div className="container carouselContentBackground">
            <h1>Golf Reimagined with RockMadeGolf</h1>
            <p>
              Play. Compete. Connect. Experience golf like never before with
              games, tournaments, and challenges.
            </p>
            <Button variant="success" className="me-2">
              Join a Tournament
            </Button>
            <Button variant="outline-light">Learn More</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMAGES.image2}
          alt="Second slide"
          style={{ objectFit: "cover", height: "600px" }}
        />
        <Carousel.Caption className="text-center carouselContentBackground p-3">
          <div>
            <h1>Challenge Yourself</h1>
            <p>Compete in tournaments or versus matches to test your skills.</p>
            <Button variant="primary">Start Competing</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMAGES.image3}
          alt="Third slide"
          style={{ objectFit: "cover", height: "600px" }}
        />
        <Carousel.Caption className="text-end carouselContentBackground p-3">
          <div className="">
            <h1>Track Your Progress</h1>
            <p>
              Follow your handicap and climb the leaderboard while enjoying the
              game you love.
            </p>
            <Button variant="warning">View Leaderboard</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {[
          {
            carouselNo: 1,
            carouselHeading: "Golf Reimagined with RockMadeGolf",
            carouselContent:
              "Play. Compete. Connect. Experience golf like never before with games, tournaments, and challenges.",
            carouselImage: IMAGES.image1,
          },
          {
            carouselNo: 2,
            carouselHeading: "Challenge Yourself",
            carouselContent:
              "Compete in tournaments or versus matches to test your skills.",
            carouselImage: IMAGES.image2,
          },
          {
            carouselNo: 3,
            carouselHeading: "Track Your Progress",
            carouselContent:
              "Follow your handicap and climb the leaderboard while enjoying the game you love.",
            carouselImage: IMAGES.image3,
          },
        ].map(
          ({
            carouselNo,
            carouselHeading: heading,
            carouselContent: content,
            carouselImage,
          }) => (
            <div key={carouselNo} className="carousel-item active">
              <div className="row">
                <div className="col-6 p-0">
                  <img src={carouselImage} className="d-block w-100" />
                </div>
                <div className="col-6 p-0">
                  <div
                    className="bg-success h-100 w-100 d-flex flex-column align-items-center justify-content-center"
                    style={
                      {
                        //   width: "200%",
                        //   height: "200%",
                        // objectPosition: "left",
                      }
                    }
                  >
                    <div className="px-4">
                      <h3 className="text-white text-center">{heading}</h3>
                      <p className="text-white text-center">{content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div> */}
  </>
);

export default MyCarousel;
