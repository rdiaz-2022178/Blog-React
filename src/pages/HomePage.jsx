import React from 'react';
import profileImage from '../assets/yo.jpeg'; // Importa la imagen desde la carpeta assets

const HomePage = () => {
  return (
    <div className="horizontal-padding vertical-padding">
      <section className="profile" id="profile">
        <div className="profile-info">
          <h1 className="profile-title">
            Hola, soy <br />
            Rodrigo Díaz
          </h1>
          <p className="profile-detail">
            Tengo 18 años, soy una persona muy activa en todos los ámbitos. Me gusta aprovechar el tiempo, ya sea
            aprendiendo algo nuevo o haciendo cosas que me gustan y divirtiéndome.
          </p>
          <button className="profile-btn">CONOCER MÁS</button>
        </div>
        <div className="profile-img-section">
          <img src={profileImage} alt="programador" className="profile-img" />
          <div className="profile-img-line"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
