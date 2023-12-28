//importar style
import "./style/pages/home.css"
import { TiThMenu } from "react-icons/ti";

//importar components

//importar Pages

//importar hooks,frameworks, bibliotecas
import Aos from "aos";
import "aos/dist/aos.css" 
import React, { useEffect, useState } from 'react'


function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  const [menu, setMenu] = useState(false);
  function toogleMenu(){
    setMenu(!menu)
  }


  return (
    <div className="appBody">

      {/* Menu */}
      {menu? (
        <div className="menuMobileBody" data-aos="fade-right">
          <div className="closeMenuBtn" onClick={toogleMenu}>X</div>
          <ul>
            <h2>Sobre Mim</h2>
            <h2>Habilidades</h2>
            <h2>Experiência Profissional</h2>
            <h2>Educação</h2>
            <h2>Projetos Pessoais</h2>
          </ul>
        </div>
      ) : null}
      <div className='headerBody'>
        <div className='headerCard'>
          <h1>Matheus Moura</h1>
          <ul>
              <h2>Sobre Mim</h2>
              <h2>Habilidades</h2>
              <h2>Experiência Profissional</h2>
              <h2>Educação</h2>
              <h2>Projetos Pessoais</h2>
              
          </ul>
          <TiThMenu className="menuBtn" onClick={toogleMenu} />
        </div>
      </div>


      <div className="sobreMinBody" data-aos="fade-up">
      
      </div>
    </div>
  );
}

export default App;
