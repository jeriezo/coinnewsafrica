import React from 'react';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

const override = css`
    display: block;
    margin:0 auto;
    border-color: red;
    position: fixed;
`;

class LoadingBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className='sweet-loading'>
                <BeatLoader
                    css={override}
                    sizeUnit={"em"}
                    size={4}
                    color={'green'}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default LoadingBar;