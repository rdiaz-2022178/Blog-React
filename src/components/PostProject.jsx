import React from 'react';
import './PostProject.css';

const PostProject = ({ image, title, icon, description, link }) => {
  return (
    <div className="tarjeta">
      <div className="imagen-tarjeta">
        <img src={image} alt={title} />
      </div>
      <div className="texto-tarjeta">
        <h2><i className={`fas ${icon}`}></i>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="descripcion-tarjeta">
        <div className="links-tarjeta">
          {link && <a href={link.url} className="link">{link.label}</a>}
        </div>
      </div>
    </div >
  );
}


export default PostProject;