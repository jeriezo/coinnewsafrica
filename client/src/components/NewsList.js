import React, { Component } from 'react';
import News from '../components/News';
import LatestNews from '../components/LatestNews';
import { Container } from 'reactstrap';

class NewsList extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <LatestNews />
        </Container>
        <News />
      </React.Fragment>
    );
  }
}

export default NewsList;
