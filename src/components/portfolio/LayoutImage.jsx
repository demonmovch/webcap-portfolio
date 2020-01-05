import React, { Component } from 'react';

export default class LayoutImage extends Component {
  state = {
    init: 0,
  };

  inided = () => {
    this.setState({ init: 1 });
  };

  render() {
    const {
      props: { data, type },
      state: { init },
    } = this;

    return (
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={'/img/portfolio/' + data.slug + '/' + type + '-mobile.png'}
        />
        <img
          onLoad={this.inided}
          style={{ transition: 'opacity .5s linear', opacity: init }}
          src={'/img/portfolio/' + data.slug + '/' + type + '.png'}
          alt={data.title}
        />
      </picture>
    );
  }
}
