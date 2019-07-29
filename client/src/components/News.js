import React, { Component } from 'react';
import {
    Container,
    Button,
    Card,
    Col, Row,
    CardHeader,
    CardText,
    CardImg,
    CardTitle,
    CardFooter
} from 'reactstrap';
import NewsModal from './NewsModal';

import { connect } from 'react-redux';
import { getNews, deleteNews } from '../actions/newsActions';
import PropTypes from 'prop-types';


class News extends Component {


    componentDidMount() {
        this.props.getNews();
    }

    onDeleteClick(id) {
        this.props.deleteNews(id);
    }


    render() {
        //we will be using destructuring array here
        const { news } = this.props.news;
        return (
            <React.Fragment>


                <Container>
                    <Container style={{ marginTop: "4rem" }}>
                        < NewsModal />
                    </Container>
                    <Row>
                        {news.map(({ _id, title, image, author }) => (
                            <Col sm="12" md="6" lg="4">
                                <Card className="shadows" style={{ marginBottom: "1.2em" }}>
                                    <CardHeader>
                                        <Button className="remove-btn float-right" color="danger" size="sm" style={{ marginLeft: "1.2em" }}
                                            onClick={this.onDeleteClick.bind(this, _id)
                                            }>
                                            &times;
                                    </Button>
                                        <h5 className="text-muted  float-right">27th May</h5>
                                        <span>
                                            <img className="rounded-circle float-left" src={image} alt="logo" style={{ width: "2em" }} />
                                            <h6 className="card-title text-muted">{author}</h6>
                                        </span>
                                    </CardHeader>
                                    <CardImg top width="100%" src={image} alt="Card image cap" style={{ padding: "1em" }} />
                                    <CardFooter>
                                        <CardTitle><h5>{title}</h5></CardTitle>
                                        <CardText></CardText>
                                        <Button color="secondary" block>Button</Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}


News.propTypes = {
    getNews: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired
}

const mapStateToProps = (state) => (
    {
        news: state.news
    }
)

export default connect(mapStateToProps, { getNews, deleteNews })(News);
