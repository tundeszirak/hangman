import React from 'react';
import styled from 'styled-components';

const Section = styled.section`padding: 20px 0 0;`;

const StyledTitle = styled.ul`
  display: inline-block;
  padding: 0;
  li {
    display: inline-block;
    text-transform: uppercase;
    width: 26px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  li.titleLetter {
    border-bottom: 1px solid #666;
    margin-right: 4px;
    font-weight: bold;
    font-size: 26px;
    span {
      visibility: hidden;
    }
    span.visible {
      visibility: visible;
    }
    &[data-red='true'] span {
      visibility: visible;
      color: #8e3333;
    }
  }
  &:last-child li:last-child {
    display: none;
  }
`;

const Title = props => {
  const sentence = props.content.split(/[ ,]+/);
  const words = sentence.map(word => word.split(''));

  const letters = words.map((word, i) => (
    <StyledTitle key={i}>
      {word.map((letter, i) => (
        <li
          key={i}
          className="titleLetter"
          data-red={props.missedLetters.includes(letter) ? 'true' : 'false'}
        >
          <span className={props.guesses.includes(letter) ? 'visible' : ''}>
            {letter}
          </span>
        </li>
      ))}
      <li>&nbsp;</li>
    </StyledTitle>
  ));

  return <Section className="title">{letters}</Section>;
};

export default Title;
