import React, { Component } from 'react';

export default class Image extends Component {
    state = {
        init: 0
    };

    inided = () => {
        this.setState({ init: 1 });
    }

    render() {
        return (
            <img
                onLoad={this.inided}
                style={{ transition: 'opacity .5s linear', opacity: this.state.init }}
                src={'/img/portfolio/' + this.props.data.slug + '/' + this.props.type + '.png'}
                alt={this.props.data.title}
            />
        );
    }
}
