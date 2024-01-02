//importar style
import "./style/pages/home.css"
import "aos/dist/aos.css" 

//importar components

//importar Pages

//importar hooks,frameworks, bibliotecas
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import { TiThMenu } from "react-icons/ti";
import {Swiper, SwiperSlide} from "swiper/react";

function App() {

  //////////////////////////////////////Big Objecs///////////////////////////////////////
  const [projetos, setProjetos] = useState([
    {nome:"Blue Wizard",
     descricao:"Apresentamos Blue Wizard, uma ferramenta que tem proporcionado inovação e crescimento a diversos negócios, mesmo em meio a desafios. Com recursos avançados, este sistema oferece automação de vendas em diferentes plataformas e centraliza dados estratégicos de marketing. Além disso, a funcionalidade de dropshipping facilita a oferta de produtos diversificados sem a necessidade de estoque, adaptando-se às demandas do mercado de maneira eficiente. Descubra como Blue Wizard tem contribuído para a evolução de negócios, oferecendo soluções práticas e inovadoras.",
     tecnologias: ["React", "Python", "MySQL", "MongoDB"], 
     fontColor:"white", 
     backgroundImg:"./style/contents/images/conhecimentos/React.jpg", 
     backgroundColor:"white", 
     link:""},
    
    {nome:"Brasil Luvas", 
    descricao:"A Brasil Luvas é uma empresa líder no mercado de equipamentos de segurança e ferramentas para construção civil. Atuando há mais de 20 anos, a empresa é especializada na representação de produtos de alta qualidade", 
    tecnologias:["React"], 
    fontColor:"white", 
    backgroundImg:"./style/contents/images/conhecimentos/teste.jpg", 
    backgroundColor:"white", 
    link:"https://brasilluvaseferramentas.com"}
  ])
  

  const habilidades = [
    ["HTML", "CSS"],
    ["Javascript", "React", "Hooks"],
    ["Git", "GitHub", "HTTP", "Node.js","Python"],
    ["Express", "Prisma ORM", "Mongoose", "Express", "Django", "API Restful"],
    ["Flask", "Flask", "SQL", "NoSQL", "MySQL", "MongoDB","ELastic Searchk","Docker"],
    ["Kubernetes", "Web Services", "Apache", "AWS", "Kafka", "POO"],
    ["Arquitetura de software", "Serveless", "Monolito", "Mircroserviços","Singleton"],
    ["Oauth", "Basic Authentication", "Token Authentication", "Testes Unitarios"]
  ];
  const descricaoHabilidades = [
    "HTML é uma linguagem de marcação...",
    "CSS é uma linguagem de estilo...",
    // Adicione descrições para as outras habilidades
  ];

  //////////////////////////////////////FUNCTIONS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  const [menu, setMenu] = useState(false);
  function toogleMenu(){
    setMenu(!menu)
  }

  ///////Mudar foco do portifolio
  const [portifolioAtual, setPortifolioAtual] = useState({
    nome:"Blue Wizard",
    descricao:"Apresentamos Blue Wizard, uma ferramenta que tem proporcionado inovação e crescimento a diversos negócios, mesmo em meio a desafios. Com recursos avançados, este sistema oferece automação de vendas em diferentes plataformas e centraliza dados estratégicos de marketing. Além disso, a funcionalidade de dropshipping facilita a oferta de produtos diversificados sem a necessidade de estoque, adaptando-se às demandas do mercado de maneira eficiente. Descubra como Blue Wizard tem contribuído para a evolução de negócios, oferecendo soluções práticas e inovadoras.",
    tecnologias: ["React", "Python", "MySQL", "MongoDB"],
    fontColor:"white",
    backgroundImg:"./style/contents/images/conhecimentos/React.jpg", 
    backgroundColor:"blue",
    link:""
  })
  function handlePortifolio(nome) {
    const projetoSelecionado = projetos.find((projeto) => projeto.nome === nome);
  
    // Verifica se o projeto selecionado é diferente do projeto atual
      setPortifolioAtual(projetoSelecionado);
  }
  function letrasPretas(){
    setPortifolioAtual({...portifolioAtual, fontColor:"black"})
  }
  function letrasBrancas(){
    setPortifolioAtual({...portifolioAtual, fontColor:"white"})
  }

  const [classe, setClasse] = useState("classe1")
  function handleBackground(bkg){
    setClasse(bkg)
  }

  //////////////////// Aumentar tamanho do card da tecnologia ///////////////////////
  const [expandido, setExpandido] = useState({});

  const handleCardClick = (row, index, descricao) => {
    setExpandido((prevExpandido) => ({
      ...prevExpandido,
      [`${row}-${index}`]: {
        expandido: !prevExpandido[`${row}-${index}`]?.expandido,
        descricao,
      },
    }));
  };
  
  

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
      <div style={{width: "100%", height: "5svh", marginTop: "85svh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
      <h2 style={{ color: "white", width: "100%" }}></h2>
      </div>
      
      <Swiper
        className="habilidadesBody"
        style={{zIndex:"0"}}
        sliderPreview={1}
        pagination={{clickable: true}}
        navigation
      >
        <SwiperSlide>
          <div className="habilidadesBody">
            <div className="habilidadesCard">
              <h2>FrontEnd</h2>
              <p>Identidade / UX & UI / Animação</p>
              <p>React / Web / Em breve Mobile com React Native</p>
            </div>

            <div className="habilidadesCard">
              <h2>BackEnd</h2>
              <p>Python / Node.js / Puppeter</p>
              <p>Express / Mongoose / Django</p>
              <p>MySQL / MongoDB / Entre outros...</p>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="habilidadesBody" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {habilidades.map((row, rowIndex) => (
                <div key={rowIndex} style={{ margin: "2.5px 0", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {row.map((card, index) => (
                    <div
                      key={index}
                      onClick={() => handleCardClick(rowIndex, index, descricaoHabilidades[index])}
                      style={{
                        margin: "0 10px",
                        border: "1px solid black",
                        width: expandido[`${rowIndex}-${index}`]?.expandido ? "120px" : "100px",
                        height: expandido[`${rowIndex}-${index}`]?.expandido ? "60px" : "20px",
                        borderRadius: "20px",
                        textAlign: "center",
                        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
                      }}
                    >
                      <p style={{ margin: "0", fontSize: "1.5rem", textAlign: "center" }}>{card}</p>
                      {expandido[`${rowIndex}-${index}`]?.expandido && <p style={{ display: "block" }}>{expandido[`${rowIndex}-${index}`]?.descricao}</p>}
                    </div>
                  ))}
                </div>
              ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="habilidadesBody">
                ECONOMIA, INDICES
              </div>
            </SwiperSlide>
      </Swiper>



      <div className={classe} style={{marginTop: "10svh", marginBottom: "20svh",width: "80%" , height: "60svh", borderRadius: "20px", display:"flex",flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div style={{width: "55%", height: "60svh", margin: "0 1.9vw", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}} >

          <div style={{}}>
            <h2 style={{fontSize:"3.5rem", color:portifolioAtual.fontColor}}>Matheus Moura</h2>
          </div>

          <div>
            <h3 style={{fontSize:"3rem", fontWeight:"lighter", color:portifolioAtual.fontColor}}>{portifolioAtual.nome}</h3>
          </div>

          <div style={{padding: "0 15px", height:"147svh"}}>
            <p style={{fontSize:"1.7rem", fontWeight:"lighter", textAlign:"justify", color:portifolioAtual.fontColor}}>{portifolioAtual.descricao}</p>
          </div>

          <div style={{width:"100%", textAlign:"center", display:"flex", justifyContent:"center", color:portifolioAtual.fontColor}}>
            {portifolioAtual.tecnologias.map((element, index) => 
              <p key={index} style={{ fontSize:"1.8rem", padding:"0 5px", color:portifolioAtual.fontColor}}>{element}</p>
            )} 
          </div>

        </div>


        <div className="projetosBody" style={{width: "40%", height: "60svh", maxHeight: "60svh", display:"flex", alignItems:"center", justifyContent:"flex-start", flexDirection: "column", overflowY:"auto"}}>

          <div className="bkgERP" nome="Blue Wizard" onClick={()=>{handlePortifolio("Blue Wizard"); handleBackground("classe1")}} style={{marginTop: "20px",width: "60%", height: "20svh", minHeight:"20svh", border: "1px solid black", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", position:"relative"}}>
            <div className="filtro20px" style={{backdropFilter:"blur(10px)", width: "100%", height: "20svh", minHeight:"20svh"}}></div>
            <h2 style={{color: "white", fontSize:"1.9rem", position:"absolute", pointerEvents:"none"}}>Blue Wizard</h2>
          </div>
          <div className="bkgBrasilLuvas" nome="Brasil Luvas" onClick={()=>{handlePortifolio("Brasil Luvas"); handleBackground("classe2")}} style={{marginTop: "20px",width: "60%", height: "20svh", minHeight:"20svh", border: "1px solid black", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", position:"relative"}}>
            <div className="filtro20px" style={{backdropFilter:"blur(10px)", width: "100%", height: "20svh", minHeight:"20svh"}}></div>
             <h2 style={{color: "black", fontSize:"1.9rem", position:"absolute", pointerEvents:"none"}}>Brasil Luvas</h2>
          </div>
          <div onClick={()=>{ letrasPretas(); handleBackground("classe3")}} style={{marginTop: "20px",width: "60%", height: "20svh", minHeight:"20svh", border: "1px solid black", cursor:"pointer"}}></div>
          <div onClick={()=>{ letrasBrancas();handleBackground("classe4")}} style={{marginTop: "20px",width: "60%", height: "20svh", minHeight:"20svh", border: "1px solid black", cursor:"pointer"}}></div>
          <div onClick={()=>{ handleBackground("classe5")}} style={{marginTop: "20px", marginBottom: "20px",width: "60%", height: "20svh", minHeight:"20svh", border: "1px solid black", cursor:"pointer"}}></div>
          
        </div>    
      </div>

      
    </div>
  );
}

export default App;
