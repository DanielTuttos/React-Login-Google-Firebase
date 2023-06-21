import styled from 'styled-components';
import './styles.scss'

export const Login = () => {
  return (
    <div className='container-login'>
      <h1 className='container-login__title'>Iniciar sesión</h1>
      <button className='container-login__btn'>
        <img src="https://img.freepik.com/iconos-gratis/buscar_318-265146.jpg?w=2000" alt="google" />
        <h1>Iniciar con Gmail</h1>
      </button>

      <section className='container-login__img-section'>
        <h1>useContext REACT</h1>
        <img src="https://www.dibujos-faciles.com/wp-content/uploads/2022/11/dibujo-astronauta-paso13.jpg" alt="astronauta" />
      </section>
    </div>
  );
};

