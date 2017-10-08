import React from 'react';
import img from '../img/arrow.png';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 24px;
  border: none;
  background: none;
  position: relative;
  cursor: pointer;
  transition: all 2s linear;
  display: ${props => (props.newGame ? 'none' : 'block')};
  opacity: ${props => (props.newGame ? 0 : 1)};
  font-family: 'Neucha', sans-serif;
  &:after {
    content: '';
    width: 36px;
    height: 36px;
    position: absolute;
    background: url(${img}) no-repeat;
    background-size: 100%;
    top: 100%;
    left: 50px;
  }
  &:hover:after {
    transform: rotate(360deg);
    transition: 600ms linear all;
  }
`;

const NewGame = props => (
  <Button {...props} onClick={props.onClick}>
    Another one?
  </Button>
);

export default NewGame;
