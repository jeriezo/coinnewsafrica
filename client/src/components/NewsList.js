import React, { Component, lazy, Suspense } from 'react';
import LatestNews from '../components/LatestNews';
import { Container } from 'reactstrap';
import LoadingBar from '../components/LoadingBar';
const News = lazy(() => import('../components/News'));


class NewsList extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <LatestNews />
          <Suspense fallback={<LoadingBar style={{ display: 'block' }} />}>
            <News />
          </Suspense>
        </Container>
      </React.Fragment>
    );
  }
}

export default NewsList;
