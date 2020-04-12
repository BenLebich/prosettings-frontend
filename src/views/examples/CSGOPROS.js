/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import PlayerList from "components/PlayerList/PlayerListv2.js";



class CSGOPROS extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6" >
                      <h1 className="display-3 text-white">
                        The Best of the Best{" "}
                        <span>pros list</span>
                      </h1>
                      <p className="lead text-white">
                        View the top pros here, with specs, settings and configs included.
                      </p>
                      </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              
            </section>
            {/* 1st Hero Variation */}
          </div>
          
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <PlayerList name="test"/>
            </Container>
          </section>

        


        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default CSGOPROS;
