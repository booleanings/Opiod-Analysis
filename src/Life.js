import React from 'react';
import {
  Card, CardBody,
  CardTitle, Container, Col, Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


class Life extends React.Component {
  state = {
    value: 'one'
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  constructor(props) {
    super(props);

    this.setState({

    });
  }

  componentWillMount() {
    this.setState({
      marital: this.props.marital,
      education: this.props.education,
      notLabor: this.props.notLabor,
      incomeSrc: this.props.incomeSrc
    });
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>
              <h2 className="lifeTitle">  <FontAwesomeIcon icon="heartbeat" className="icon" /> Life</h2>
            </CardTitle>
            <Container>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Marital</span><br />
                  <span className="addictDesc">{this.state.marital}</span>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Education</span><br />
                  <span className="addictDesc">{this.state.education}</span>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Not in Labor</span><br />
                  <span className="addictDesc">{this.state.notLabor}</span>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Income Source</span><br />
                  <span className="addictDesc">{this.state.incomeSrc}</span>
                </Col>
              </Row>
            </Container>
          </CardBody >
        </Card >
      </div >
    );
  }
}

export default Life;
