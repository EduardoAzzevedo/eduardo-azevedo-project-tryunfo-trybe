import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">
            Nome:
            <input
              className="name"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description">
            Descrição da Carta:
            <textarea
              data-testid="description-input"
              name="description"
              id="text-description"
              cols="30"
              rows="10"
            />
          </label>
          <label htmlFor="attr1">
            Atributo 1:
            <input
              type="number"
              className="attr"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2">
            Atributo 2:
            <input
              type="number"
              className="attr"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3">
            Atributo 3:
            <input
              type="number"
              className="attr"
              data-testid="attr3-input"
            />
          </label>
        </div>
        <img src="" data-testid="image-input" alt="carta" />
        <select name="seletor" data-testid="rare-input">
          <option> normal </option>
          <option> raro </option>
          <option> muito raro </option>
        </select>
        <div>
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="checkbox"
            id="checkbox"
          />
        </div>
        <div>
          <button data-testid="save-button" type="submit"> Salvar </button>
        </div>
      </div>
    );
  }
}

export default Form;
