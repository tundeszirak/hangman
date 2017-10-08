import React from 'react';
import winImage from '../img/win.png';
import loseImage from '../img/6.png';
import styled from 'styled-components';

const Text = styled.p`
  display: ${props => (props.newGame ? 'none' : 'block')};
  font-size: 26px;
  max-width: 200px;
  margin: 0;
  padding-right: 40px;
  &:after {
    content: '';
    width: ${props => (props.isLose ? '180px' : '100px')};
    height: ${props => (props.isLose ? '180px' : '158px')};
    background-repeat: no-repeat;
    display: inline-block;
    background-size: 100%;
    margin: 10px;
    position: relative;
    left: 100px;
    background-image: ${props =>
      props.isLose ? `url(${loseImage})` : `url(${winImage})`};
  }
`;

const GameOver = props => <Text {...props}>{props.text}</Text>;

export default GameOver;
