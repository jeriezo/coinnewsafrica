import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addNews } from '../actions/newsActions';

class NewsModal extends Component {
    state = {
        modal: false,
        title: '',
        author: '',
        image: '',
        body: ''
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const newNews = {
            title: this.state.title,
            author: this.state.author,
            image: this.state.image,
            body: this.state.body
        }
        this.props.addNews(newNews);;
        this.toggle();

    }
    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Post New Content</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add a News</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="titleitem"></Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="titleitem"
                                    value={this.state.title}
                                    placeholder="Add a Title"
                                    onChange={this.onChange}
                                />
                                <Label for="authoritem"></Label>
                                <Input
                                    type="text"
                                    name="author"
                                    value={this.state.author}
                                    id="authoritem"
                                    placeholder="Add an Author"
                                    onChange={this.onChange}
                                />

                                <Label for="imageitem"></Label>
                                <Input
                                    type="text"
                                    name="image"
                                    value={this.state.image}
                                    id="imageitem"
                                    placeholder="Add an image"
                                    onChange={this.onChange}
                                />

                                <Label for="bodyitem"></Label>
                                <Input
                                    type="text"
                                    name="body"
                                    value={this.state.body}
                                    id="bodyitem"
                                    placeholder="Add a story"
                                    onChange={this.onChange}
                                />

                                <Button type="submit"
                                    color="dark" style={{ marginTop: '2rem' }} block>Post News</Button>

                            </FormGroup>

                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    news: state.news
})
export default connect(mapStateToProps, { addNews })(NewsModal);

