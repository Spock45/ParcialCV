// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ formData }) => {
  return (
    <div className='caja-info'>
      <h2>Resultado de Información Procesada</h2>
      <p>Nombre de Persona: {formData && formData.name}</p>
      <p>Color Favorito: {formData && formData.favoriteColor}</p>
    </div>
  );
};

Card.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    favoriteColor: PropTypes.string,
  }),
};

export default Card;

