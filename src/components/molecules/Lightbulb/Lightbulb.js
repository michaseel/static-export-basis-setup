import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: darkblue;
  padding: 70px;
`;

const Bulp = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: ${({ isOn, color }) => (isOn ? color : 'gray')};
  box-shadow: 
    inset -3px 2px 40px -2px white,
    0 0 80px 10px ${({ isOn, color }) => (isOn ? color : 'transparent')};
  transition: background-color .3s, box-shadow .1s;
  margin: 0 auto;
  opacity: .9;
  
  :after {
    position: relative;
    display: block;
    width: 80px;
    top: 20px;
    transform: rotate(330deg);
    margin-left: 30px;
    height: 50px;
    border-radius: 80%;
    background-image:
      linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4));
    background-size: 50px 50px;
    content: '';
  }
`;

const Socket = styled.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    #999,
    #999 50%,
    #666 50%,
    #666
  );
  background-size: 100% 25px;
  width: 110px;
  height: 70px;
  margin: -15px auto 0;
`;

const Connector = styled.div`
  box-shadow: inset 0 0 6px -2px white;
  background-color: #333;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: -30px auto 0;
`;

export default class Lightbulb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }

  static propTypes = {
    /** The color of the lightbulb */
    color: PropTypes.string,
  };

  toggle = () => {
    this.setState({ isOn: !this.state.isOn });
  };

  static defaultProps = {
    color: '#f8e897',
  };

  render() {
    return (
      <Wrapper>
        <Bulp onClick={this.toggle} color={this.props.color} isOn={this.state.isOn}>{this.props.stars}</Bulp>
        <Socket />
        { this.state.isOn ? <Socket/> : <Connector /> }
        <Connector />
      </Wrapper>
    );
  }
}
