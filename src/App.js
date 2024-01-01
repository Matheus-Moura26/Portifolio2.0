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
          <p className="text">Com uma expertise sólida em economia e maestria nas tecnologias de ponta, como Node.js, Python, ReactJS, eu sou a peça-chave 
          que falta para elevar o seu projeto ao patamar extraordinário. Transformo desafios em oportunidades, moldando soluções que transcendem expectativas.
           Como um freelancer excepcional, estou pronto para trazer inovação, eficiência e resultados surpreendentes para o seu empreendimento. Deixe-me ser a 
           força propulsora por trás do seu sucesso. Vamos transformar ideias em conquistas notáveis juntos.   </p> <div style={{width: "50vw",  display: "flex", alignItems: "center", justifyContent: "center" }}> <span className="textSaibaMais">Saiba mais</span></div> 
          
      </div>
      <div className="textoAnimado1Body">
        <span></span>
      </div>

      <div style={{width: "100%", height: "5vh", marginTop: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
      <h2 style={{ color: "white", width: "100%" }}></h2>
      </div>
      
      <div className="habilidadesBody">
        <div className="habilidadesCard">
          <h2>FrontEnd</h2>
          <p>Identidade / UX & UI / Animação</p>
          <p>React / Web / Em breve Mobile com React Native</p>
          <p></p>
          <p></p>
        </div>
        
        <div className="habilidadesCard">
          <h2>BackEnd</h2>
          <p>React / Node.js / Puppeter</p>
          <p>Express / Mongoose / Python</p>
          <p>MySQL / MongoDB / Entre outros...</p>
        </div>
      </div>

      {/* <div className="habilidadesImagens">
        <div className="imagem">
        <div className="filtro"></div>
          <h2>React</h2>
        </div>


        <div className="imagem">
        <div className="filtro"></div>
          <h2>React</h2>
        </div>        
        

      </div> */}
      <div style={{marginTop: "10vh", marginBottom: "20vh",width: "80%" , height: "60vh", backgroundColor: "white", borderRadius: "20px", display:"flex",flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between"}}>
        <div style={{width: "50.5%", height: "60vh", border:"1px solid black", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
          <div style={{}}><h2 style={{fontSize:"3.5rem"}}>Matheus Moura</h2></div>
          <div><h3 style={{fontSize:"3rem", fontWeight:"lighter"}}>Projeto</h3></div>
          <div><p style={{fontSize:"2rem", fontWeight:"lighter"}}>Descrição</p></div>
          <div><p style={{fontSize:"1.8rem"}}>Tecnologia</p></div>
        </div>
        <div style={{width: "49%", height: "60vh", maxHeight: "60vh", border:"1px solid black", display:"flex", alignItems:"center", justifyContent:"flex-start", flexDirection: "column", overflowY:"auto"}}>
          <div style={{marginTop: "20px",width: "50%", height: "20vh", minHeight:"20vh", border: "1px solid black"}}></div>
          <div style={{marginTop: "20px",width: "50%", height: "20vh", minHeight:"20vh", border: "1px solid black"}}></div>
          <div style={{marginTop: "20px",width: "50%", height: "20vh", minHeight:"20vh", border: "1px solid black"}}></div>
          <div style={{marginTop: "20px",width: "50%", height: "20vh", minHeight:"20vh", border: "1px solid black"}}></div>
          <div style={{marginTop: "20px",width: "50%", height: "20vh", minHeight:"20vh", border: "1px solid black"}}></div>
          <div style={{marginTop: "20px",width: "50%", height: "20vh", minHeight:"20vh", border: "1px solid black"}}></div>
        </div>    
      </div>

      
    </div>
  );
}

export default App;
