import React, { Component } from 'react';
import News from '../components/News';
import logo from '../logo.svg';


class NewsList extends Component {

    render() {
        return (
            <React.Fragment>
                <News />
            </React.Fragment>
        )
    }
}

export default NewsList