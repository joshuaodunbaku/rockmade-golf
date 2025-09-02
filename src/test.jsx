import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/Img/image1.jpg";

const MyCarousel = () => (
  <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
        style={{
          objectFit: "cover",
          objectPosition: "left center", // focus left (use "right center" to focus right)
          height: "500px",
        }}
      />
      <Carousel.Caption
        className="text-end" // text aligned right
        style={{
          right: "1%",
          left: "auto",
          textAlign: "right",
          background: "rgba(0,0,0,0.4)", // optional semi-transparent background
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
        style={{
          objectFit: "cover",
          objectPosition: "left center", // focus left (use "right center" to focus right)
          height: "500px",
        }}
      />
      <Carousel.Caption
        className="text-end" // text aligned right
        style={{
          right: "1%",
          left: "auto",
          textAlign: "right",
          background: "rgba(0,0,0,0.4)", // optional semi-transparent background
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
        style={{
          objectFit: "cover",
          objectPosition: "left center", // focus left (use "right center" to focus right)
          height: "500px",
        }}
      />
      <Carousel.Caption
        className="text-end" // text aligned right
        style={{
          right: "1%",
          left: "auto",
          textAlign: "right",
          background: "rgba(0,0,0,0.4)", // optional semi-transparent background
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MyCarousel;
