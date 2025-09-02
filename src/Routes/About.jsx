import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import HeroComp from "../Components/HeroComp";
import IMAGES from "../assets/images";

const About = () => {
  return (
    <div>
      <HeroComp $heroImage={IMAGES.image1} height={"30vh"}>
        <div>
          <h3 className="display-4 fw-bold">
            About the <span className="text-success">Organization</span>
          </h3>
          <p className="lead">
            Connecting golfers, building competition, and making every swing
            count.
          </p>
        </div>
      </HeroComp>
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Story</h2>
        <p className="text-center">
          RockMadeGolf was created out of a passion for the game and a desire to
          make it more engaging. Traditional scorekeeping and golf communities
          are often fragmented. Our platform brings golfers together, offering
          fun modes of play, social connections, and competitive tournaments.
        </p>
      </Container>

      {/* Mission & Vision */}
      <Container className="my-5">
        <Row>
          <Col md={6} className="text-center">
            <Card className="p-4 shadow border-0 h-100">
              <h3 style={{ color: "var(--primary-color)" }}>Our Mission</h3>
              <p>
                To make golf accessible, engaging, and competitive for every
                player, from casual beginners to seasoned professionals.
              </p>
            </Card>
          </Col>
          <Col md={6} className="text-center">
            <Card className="p-4 shadow border-0 h-100">
              <h3 style={{ color: "var(--secondary-color)" }}>Our Vision</h3>
              <p>
                We envision a global golfing community where every game,
                tournament, and rivalry is connected through RockMadeGolf.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
      {/*  */}
      <section class="about-section section-padding" id="section_2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div class="services-info">
                <h2 class="text-white mb-4">About Festava 2022</h2>

                <p class="text-white">
                  Festava Live is free CSS template provided by TemplateMo
                  website. This layout is built on Bootstrap v5.2.2 CSS library.
                  You are free to use this template for your commercial website.
                </p>

                <h6 class="text-white mt-4">Once in Lifetime Experience</h6>

                <p class="text-white">
                  You are not allowed to redistribute the template ZIP file on
                  any other website without a permission.
                </p>

                <h6 class="text-white mt-4">Whole Night Party</h6>

                <p class="text-white">
                  Please tell your friends about our website. Thank you.
                </p>
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <div class="about-text-wrap">
                <img
                  src="images/pexels-alexander-suhorucov-6457579.jpg"
                  class="about-image img-fluid"
                />

                <div class="about-text-info d-flex">
                  <div class="d-flex">
                    <i class="about-text-icon bi-person"></i>
                  </div>

                  <div class="ms-4">
                    <h3>a happy moment</h3>

                    <p class="mb-0">your amazing festival experience with us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <Container className="my-5 text-center">
        <h2>Our Core Values</h2>
        <Row className="mt-4">
          {[
            "Sportsmanship",
            "Innovation",
            "Community",
            "Fair Play",
            "Passion",
          ].map((value, idx) => (
            <Col key={idx} md={2} sm={6} className="mb-3">
              <Card className="p-3 shadow border-0">
                <h5 style={{ color: "var(--primary-color)" }}>{value}</h5>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* How It Works */}
      <Container className="my-5 text-center">
        <h2>How RockMadeGolf Works</h2>
        <Row className="mt-4">
          <Col md={3} sm={6} className="mb-3">
            <Card className="p-3 shadow h-100">
              <h5>1. Sign Up</h5>
              <p>Create your profile and join the community.</p>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <Card className="p-3 shadow h-100">
              <h5>2. Choose a Mode</h5>
              <p>Pick between Normal, Tournament, or Versus games.</p>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <Card className="p-3 shadow h-100">
              <h5>3. Play & Compete</h5>
              <p>Hit the course, track your performance, and compete.</p>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <Card className="p-3 shadow h-100">
              <h5>4. Track Performance</h5>
              <p>Monitor stats and climb the leaderboard.</p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Features Highlight */}
      <Container className="my-5 text-center">
        <h2>Key Features</h2>
        <Row className="mt-4">
          {[
            "Normal Games: Fun and practice sessions",
            "Tournament Mode: Compete on a bigger stage",
            "Versus Mode: Challenge your friends",
            "Profiles & Stats: Track your journey",
            "Community Features: Connect with others",
          ].map((feature, idx) => (
            <Col md={4} key={idx} className="mb-3">
              <Card className="p-3 shadow h-100">
                <p>{feature}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Team Section */}
      <Container className="my-5 text-center">
        <h2>Meet the Team</h2>
        <p>
          RockMadeGolf is built with passion by golf enthusiasts and developers
          who believe in making the game more exciting.
        </p>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="p-3 shadow border-0">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-circle mx-auto mb-3"
              />
              <h5>Joshua Odunbaku</h5>
              <p>Founder & Developer</p>
            </Card>
          </Col>
          {/* Add more team members here if needed */}
        </Row>
      </Container>

      {/* CTA */}
      <div
        style={{
          background: "var(--bg-gradient)",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2>Ready to Elevate Your Golf Experience?</h2>
        <p>Join RockMadeGolf today and become part of the future of golf.</p>
        <Button
          variant="light"
          style={{ color: "var(--primary-color)", fontWeight: "bold" }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default About;
