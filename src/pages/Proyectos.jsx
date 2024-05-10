import React from 'react';
import PostProject from '../components/PostProject';
import imgAhorcado from '../assets/Ahorcado.png';
import imgCoperex from '../assets/Coperex.png';
import imgTienda from '../assets/Tienda.png';
import imgKinal from '../assets/Kinal.png';
import imgTonys from '../assets/Tonys.png';

const Proyectos = () => {
  const proyectos = [
    {
      image: imgAhorcado,
      title: 'Ahorcado',
      description: 'Juego de Ahorcado realizado en JavaScript',
      link: {
        url: 'https://github.com/rdiaz-2022178/AhorcadoSexto.git',
        label: 'Ver más'
      }
    },
    {
      image: imgCoperex,
      title: 'COPEREX',
      description: 'Backend para una empresa con todas las funcionalidades requeridas, hecho con Node.js',
      link: {
        url: 'https://github.com/rdiaz-2022178/COPEREX.git',
        label: 'Ver más'
      }
    },
    {
      image: imgTienda,
      title: 'PROYECTO VENTAS',
      description: 'Backend para una tienda en linea hecha con node.js',
      link: {
        url: 'https://github.com/rdiaz-2022178/ProyectoVentas.git',
        label: 'Ver más'
      }
    },
    {
      image: imgKinal,
      title: 'Kinal2',
      description: 'Pagina web Clon de kinal',
      link: {
        url: 'https://github.com/rdiaz-2022178/COPEREX.git',
        label: 'Ver más'
      }
    },
    {
      image: imgTonys,
      title: 'TonysKinal',
      description: 'Proyecto Hecho en java EEpara tonys kinal',
      link: {
        url: 'https://github.com/rdiaz-2022178/ProyectoExpo2023.git',
        label: 'Ver más'
      }
    },
  ];

  return (
    <div className="contenedor-pagina">
      <div className="fondo">
        <div className="titulo">
          <h1>PROYECTOS</h1>
        </div>
        <div className="contenedor-tarjetas columnas-tarjetas">
          <div className="contenedor-proyectos">
            {proyectos.map((proyecto, index) => (
              <PostProject
                key={index}
                image={proyecto.image}
                title={proyecto.title}
                icon={proyecto.icon}
                description={proyecto.description}
                link={proyecto.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
