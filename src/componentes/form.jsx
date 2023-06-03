import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    favoriteColor: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length < 3 || formData.name.startsWith(' ')) {
      setErrorMessage('Por favor chequea que la información sea correcta');
    } else if (formData.favoriteColor.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
    } else {
      setErrorMessage('Error en la información ingresada');
    }

    setFormData({ name: '', favoriteColor: '' });
    window.location.reload();
  };

  return (
    <div>
      <h1>Por favor ingrese su información</h1>
      <form onSubmit={handleSubmit}>
        <label className='caja1'>
          <span className="caja-titulo1">Nombre:</span>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className="input-margin"
          />
        </label>
        <br />
        <label className='caja2'>
          <span className="caja-titulo2">Color favorito:</span>
          <input
            type='text'
            name='favoriteColor'
            value={formData.favoriteColor}
            onChange={handleChange}
            className="input-margin"
          /> 
        </label>
        <br />
        <button type="submit" className='boton'>Enviar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Form;
