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

      {/* Sobre mim */}
      <div className="sobreMinBody" data-aos="fade-right">
          <p className="nome">Matheus Moura</p>
          <h2>Desenvolvedor FullStack</h2>
          <p className="text">Com uma expertise sólida em economia e maestria nas tecnologias de ponta, como Node.js, Python e ReactJS, eu sou a peça-chave 
          que falta para elevar o seu projeto ao patamar extraordinário. Transformo desafios em oportunidades, moldando soluções que transcendem expectativas.
           Como um freelancer excepcional, estou pronto para trazer inovação, eficiência e resultados surpreendentes para o seu empreendimento. Deixe-me ser a 
           força propulsora por trás do seu sucesso. Vamos transformar ideias em conquistas notáveis juntos. <br/> <span className="textSaibaMais">Saiba mais</span></p>
          
      </div>
      <div className="textoAnimado1Body">
        <span></span>
      </div>
      
      <div className="habilidadesBody">
        <p className="text">
          react | node.js | Express | Mongoose | python | SQL | NoSQL | MySQL | MongoDB
        </p>
      </div>


      
    </div>
  );
}

export default App;
