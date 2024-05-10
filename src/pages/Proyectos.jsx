import React from 'react';
import PostProject from '../components/PostProject';
import imgAhorcado from '../assets/Ahorcado.png';
import imgCoperex from '../assets/Coperex.png';
import imgTienda from '../assets/Tienda.png';
import imgKinal from '../assets/Kinal.png';
import imgTonys from '../assets/Tonys.png';
import imgInfografiaDe from '../assets/InfografiaDe.png';
import imgCOnceptualTec from '../assets/ConceptualTecno.png';
import imgPrueba1 from '../assets/Prueba1.png';
import imgMapaMental from '../assets/MapaMental.png';
import imgKahoot from '../assets/Kahoot.png';

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
    {
      image: imgCOnceptualTec,
      title: 'Infografia Desarrollo Web',
      description: 'Infografia explicando  el desarrollo web',
      link: {
        url: 'https://www.canva.com/design/DAF6SuD6Rw4/VNBwvfNjhQxMTJkDd34ekg/edit?utm_content=DAF6SuD6Rw4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        label: 'Ver más'
      }
    },
    {
      image: imgCOnceptualTec,
      title: 'Mapa conceptual Tecnologias web',
      description: 'Mapa conceptual donde investigo las tecnologias para el desarrollo web-',
      link: {
        url: 'https://www.canva.com/design/DAF7eguslsk/co4WB5Gd0sGF43fpx-6uaQ/view?utm_content=DAF7eguslsk&utm_campaign=designshare&utm_medium=link&utm_source=editor',
        label: 'Ver más'
      }
    },
    {
      image: imgPrueba1,
      title: 'Prueba objetiva 1',
      description: ' Se realizo una prueba objetiva del los temas del desarrollo web',
      link: {
        url: 'https://kinal.academy/mod/quiz/view.php?id=378764',
        label: 'Ver más'
      }
    },
    {
      image: imgMapaMental,
      title: 'Mapa mental sobre el desarrollo we',
      description: 'sobre el desarrollo web',
      link: {
        url: 'https://www.canva.com/design/DAF8tawz2x4/JOytCyB3XEtbYNlID_9GrA/view?utm_content=DAF8tawz2x4&utm_campaign=designshare&utm_medium=link&utm_source=editor',
        label: 'Ver más'
      }
    },
    {
      image: imgKahoot,
      title: 'Kahoot',
      description: 'Kahoot sobre temas vistos en clase',
      link: {
        url: 'https://kinal.academy/mod/assign/view.php?id=416903',
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
