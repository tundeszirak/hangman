import React from 'react';
import styled from 'styled-components';
import png1 from '../img/1.png';
import png2 from '../img/2.png';
import png3 from '../img/3.png';
import png4 from '../img/4.png';
import png5 from '../img/5.png';
import png6 from '../img/6.png';

const Wrapper = styled.div`
  width: 295px;
  height: 295px;
  background: url(${png1}) no-repeat center center;
  background-size: 100%;
  margin: 0 15px;
  display: ${props => (props.newGame ? 'block' : 'none')};
  opacity: ${props => (props.newGame ? 1 : 0)};
  transition: all 0.3s linear;
  &[data-order='2'] {
    background-image: url(${png2});
  }
  &[data-order='3'] {
    background-image: url(${png3});
  }
  &[data-order='4'] {
    background-image: url(${png4});
  }
  &[data-order='5'] {
    background-image: url(${png5});
  }
  &[data-order='6'] {
    background-image: url(${png6});
  }
`;

const Diagram = props => (
  <Wrapper {...props} data-order={props.currentDiagram} className="diagram" />
);

export default Diagram;
