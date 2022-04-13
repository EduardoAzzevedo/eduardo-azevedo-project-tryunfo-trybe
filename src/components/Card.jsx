import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h3 data-testid="name-card">{ cardName }</h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="name-card">{ cardDescription }</p>
        <p data-testid="name-card">{ cardAttr1 }</p>
        <p data-testid="name-card">{ cardAttr2 }</p>
        <p data-testid="name-card">{ cardAttr3 }</p>
        <p data-testid="name-card">{ cardRare }</p>
        { cardTrunfo && <p dara-testid="trunfo-card"> Super Trunfo </p> }
      </div>
      // https://pt-br.reactjs.org/docs/conditional-rendering.html
      // uso de {} e && para a condicional para exibir o texto somente quando a prop de cardTrunfo for true
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
};

export default Card;
