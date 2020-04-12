import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardLink,
} from "reactstrap";

class PlayerCard extends React.Component {
  render() {
    return (
      <>
        <Card className="card-lift--hover shadow border-0">
          <CardLink href="#">
            <CardBody className="py-5 ">
              <CardImg
                alt="..."
                className="img-fluid rounded-circle shadow-lg mb-4 "
                src={this.props.profileImg}
              />
              <h5 className="text-default text-uppercase">{this.props.name}</h5>
              <p className="description mt-3">
                Argon is a great free UI package based on Bootstrap 4 that
                includes the most important components and features.
              </p>
            </CardBody>
          </CardLink>
        </Card>
      </>
    );
  }
}

export default PlayerCard;
