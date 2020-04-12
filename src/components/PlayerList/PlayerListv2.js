import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardLink,
  Row,
  Col
} from "reactstrap";

import PlayerCard from "../PlayerList/PlayerCard.js";
import allPlayers from "../PlayerList/allprosettings-319.json";

class PlayerList extends React.Component {

  listPlayers() {
    console.log(allPlayers);
    let cards = [];
    for (let i = 0; i < allPlayers.urlArray.length; i++) {
      cards.push(
      <Col lg="4">
        <PlayerCard name={allPlayers.urlArray[i]} profileImg="https://www.w3schools.com/howto/img_avatar.png" />
      </Col>);
    }
    return cards;
  }

  render() {
    return (
      <>
        <Row className="justify-content-center players-list">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardLink href="#">
                    <CardBody className="py-5 ">
                      <CardImg
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg mb-4 "
                        src="https://prosettings.net/wp-content/uploads/2018/07/s1mple-profile-picture.png"
                      />
                      <h5 className="text-default">s1imple</h5>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap 4
                        that includes the most important components and
                        features.
                      </p>
                    </CardBody>
                  </CardLink>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardLink href="#">
                    <CardBody className="py-5">
                      <CardImg
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg mb-4"
                        src="https://prosettings.net/wp-content/uploads/2020/03/niko-profile-picture.jpg"
                      />
                      <h5 className="text-default">NiKo</h5>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap 4
                        that includes the most important components and
                        features.
                      </p>
                    </CardBody>
                  </CardLink>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardLink href="#">
                    <CardBody className="py-5">
                      <CardImg
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg mb-4"
                        src="https://prosettings.net/wp-content/uploads/2018/09/scream-profile-picture.jpg"
                      />
                      <h5 className="text-default">ScreaM</h5>
                      <p className="description mt-3">
                        Argon is a great free UI package based on Bootstrap 4
                        that includes the most important components and
                        features.
                      </p>
                    </CardBody>
                  </CardLink>
                </Card>
              </Col>
              {this.listPlayers()}
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default PlayerList;
