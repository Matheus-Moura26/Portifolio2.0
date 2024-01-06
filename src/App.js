//importar style
import "./style/pages/home.css";
import "aos/dist/aos.css";

//importar components
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

//importar Pages

//importar hooks,frameworks, bibliotecas
import React, { useEffect, useState } from "react";
import Aos from "aos";
import { TiThMenu } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  //////////////////////////////////////Big Objecs///////////////////////////////////////
  const [projetos, setProjetos] = useState([
    {
      nome: "Blue Wizard",
      descricao:
        "Apresentamos Blue Wizard, uma ferramenta que tem proporcionado inovação e crescimento a diversos negócios, mesmo em meio a desafios. Com recursos avançados, este sistema oferece automação de vendas em diferentes plataformas e centraliza dados estratégicos de marketing. Além disso, a funcionalidade de dropshipping facilita a oferta de produtos diversificados sem a necessidade de estoque, adaptando-se às demandas do mercado de maneira eficiente. Descubra como Blue Wizard tem contribuído para a evolução de negócios, oferecendo soluções práticas e inovadoras.",
      tecnologias: ["React", "Python", "MySQL", "MongoDB"],
      fontColor: "white",
      backgroundImg: "./style/contents/images/conhecimentos/React.jpg",
      backgroundColor: "white",
      link: "",
    },

    {
      nome: "Brasil Luvas",
      descricao:
        "A Brasil Luvas é uma empresa líder no mercado de equipamentos de segurança e ferramentas para construção civil. Atuando há mais de 20 anos, a empresa é especializada na representação de produtos de alta qualidade",
      tecnologias: ["React"],
      fontColor: "white",
      backgroundImg: "./style/contents/images/conhecimentos/teste.jpg",
      backgroundColor: "white",
      link: "https://brasilluvaseferramentas.com",
    },
  ]);

  const technologiesData = [
    [
      {
        name: "HTML",
        description: "(Hypertext Markup Language) é uma linguagem de marcação usada na construção e estruturação de páginas da web.",
      },
      { name: "CSS", description: "(Cascading Style Sheets) é uma linguagem de estilo usada para controlar a apresentação e o layout de elementos em documentos HTML. 'criar o design e estilização de sites.'" },
      {
        name: "Javascript",
        description: "Linguagem de programação de alto nível.",
      },
    ],
    [
      {
        name: "React",
        description:
          "Biblioteca JavaScript para construção de interfaces de usuário.",
      },
      {
        name: "Hooks",
        description:
          "Funções especiais no React que permitem o uso de state e outras funcionalidades em componentes funcionais.",
      },
      {
        name: "Git",
        description: "Sistema de controle de versão distribuído.",
      },
    ],
    [
      {
        name: "GitHub",
        description: "Plataforma de hospedagem de código-fonte e colaboração.",
      },
      {
        name: "HTTP",
        description:
          "Protocolo de transferência de hipertexto para comunicação na World Wide Web.",
      },
      {
        name: "Node.js",
        description: "Ambiente de execução para JavaScript fora do navegador.",
      },
    ],
    [
      {
        name: "Python",
        description: "Linguagem de programação de alto nível.",
      },
      {
        name: "Express",
        description:
          "Express é um framework web para Node.js que simplifica o desenvolvimento de aplicativos e APIs, facilitando o roteamento e manipulação de requisições.",
      },
      {
        name: "Prisma ORM",
        description:
          "Prisma ORM é uma ferramenta de mapeamento objeto-relacional (ORM) para bancos de dados em Node.js e TypeScript, simplificando a interação com bancos de dados SQL.",
      },
    ],
    [
      {
        name: "Mongoose",
        description: "Mongoose é uma biblioteca ODM (Object Data Modeling) para Node.js e MongoDB, facilitando a interação com o banco de dados NoSQL.",
      },
      {
        name: "API Restful",
        description:
          "Uma API REST é uma interface de programação de aplicações baseada nos princípios arquitetônicos REST, utilizando métodos HTTP para manipulação de recursos.",
      },
      {
        name: "Django",
        description:
          "Framework web de alto nível em Python que incentiva o desenvolvimento rápido e limpo.",
      },
    ],
    [
      { name: "Flask", description: "Flask é um microframework web em Python para desenvolvimento de aplicações web minimalistas e escaláveis." },
      {
        name: "SQL",
        description:
          "SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar e manipular bancos de dados relacionais.",
      },
      {
        name: "NoSQL",
        description:
          "NoSQL é uma categoria de bancos de dados que não seguem o modelo relacional tradicional, oferecendo abordagens alternativas de armazenamento e recuperação de dados.",
      },
    ],
    [
      {
        name: "MySQL",
        description: "MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto amplamente utilizado.",
      },
      {
        name: "MongoDB",
        description: "MongoDB é um sistema de gerenciamento de banco de dados NoSQL, orientado a documentos, que armazena dados em formato BSON (Binary JSON).",
      },
      {
        name: "ELastic Searchk",
        description: "Elasticsearch é um mecanismo de busca e análise de dados distribuído, baseado em Lucene, utilizado para pesquisar, analisar e visualizar grandes volumes de dados de forma eficiente.",
      },
    ],
    [
      {
        name: "Docker",
        description:
          "Plataforma para desenvolvimento, envio e execução de aplicativos em contêineres.",
      },
      {
        name: "Kubernetes",
        description:
          "Orquestrador de contêineres de código aberto para automação de implementação, dimensionamento e operações de aplicativos em contêineres.",
      },
      {
        name: "Web Services",
        description:
          "Conjunto de padrões para implementação de serviços na web.",
      },
    ],
    [
      { name: "Apache", description: "Servidor web de código aberto." },
      {
        name: "AWS",
        description: "Amazon Web Services - Plataforma de serviços em nuvem.",
      },
      {
        name: "Kafka",
        description: "Kafka é uma plataforma de streaming distribuída que permite a ingestão, armazenamento e processamento de eventos em tempo real, sendo frequentemente utilizado para sistemas de mensageria em larga escala.",
      },
    ],
    [
      {
        name: "POO",
        description:
          "Programação Orientada a Objetos - Paradigma de programação.",
      },
      {
        name: "Arquitetura de software",
        description: "Design e estrutura de sistemas de software.",
      },
      {
        name: "Serveless",
        description:
          "Modelo de execução de computação em nuvem onde o provedor gerencia a infraestrutura automaticamente.",
      },
    ],
    [
      {
        name: "Monolito",
        description:
          "Arquitetura de software em que um aplicativo é construído como uma única unidade.",
      },
      {
        name: "Mircroserviços",
        description:
          "Abordagem arquitetônica para desenvolvimento de software em que um aplicativo é composto por pequenos serviços independentes.",
      },
      {
        name: "Singleton",
        description:
          "Padrão de design que garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.",
      },
    ],
    [      
    {
      name: "Oauth",
      description:
        "Protocolo de autorização aberto que permite a autenticação segura de um usuário.",
    },
    {
      name: "Basic Authentication",
      description:
        "Método simples de autenticação usando um nome de usuário e uma senha.",
    },
    {
      name: "Token Authentication",
      description: "Método de autenticação usando tokens.",
    },
  ],
  [
    {
      name: "Testes Unitarios",
      description:
        "Prática de teste de unidades individuais de código-fonte.",
    },
  ],
  [
  ],
  ];

  //////////////////////////////////////FUNCTIONS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [menu, setMenu] = useState(false);
  function toogleMenu() {
    setMenu(!menu);
  }

  ///////Mudar foco do portifolio
  const [portifolioAtual, setPortifolioAtual] = useState({
    nome: "Blue Wizard",
    descricao:
      "Apresentamos Blue Wizard, uma ferramenta que tem proporcionado inovação e crescimento a diversos negócios, mesmo em meio a desafios. Com recursos avançados, este sistema oferece automação de vendas em diferentes plataformas e centraliza dados estratégicos de marketing. Além disso, a funcionalidade de dropshipping facilita a oferta de produtos diversificados sem a necessidade de estoque, adaptando-se às demandas do mercado de maneira eficiente. Descubra como Blue Wizard tem contribuído para a evolução de negócios, oferecendo soluções práticas e inovadoras.",
    tecnologias: ["React", "Python", "MySQL", "MongoDB"],
    fontColor: "white",
    backgroundImg: "./style/contents/images/conhecimentos/React.jpg",
    backgroundColor: "blue",
    link: "",
  });
  function handlePortifolio(nome) {
    const projetoSelecionado = projetos.find(
      (projeto) => projeto.nome === nome
    );

    // Verifica se o projeto selecionado é diferente do projeto atual
    setPortifolioAtual(projetoSelecionado);
  }
  function letrasPretas() {
    setPortifolioAtual({ ...portifolioAtual, fontColor: "black" });
  }
  function letrasBrancas() {
    setPortifolioAtual({ ...portifolioAtual, fontColor: "white" });
  }

  const [classe, setClasse] = useState("classe1");
  function handleBackground(bkg) {
    setClasse(bkg);
  }

  //////////////////// Aumentar tamanho do card da tecnologia ///////////////////////

  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (rowIndex, index) => {
    if (
      expandedCard === null ||
      expandedCard.rowIndex !== rowIndex ||
      expandedCard.index !== index
    ) {
      setExpandedCard({ rowIndex, index });
    } else {
      setExpandedCard(null);
    }
  };

  const isCardExpanded = (rowIndex, index) =>
    expandedCard !== null &&
    expandedCard.rowIndex === rowIndex &&
    expandedCard.index === index;

  return (
    <div className="appBody">
      {/* Menu */}
      {menu ? (
        <div className="menuMobileBody" data-aos="fade-right">
            {/* <IoIosCloseCircle className="closeMenuBtn" onClick={toogleMenu}/> */}
            <IoCloseSharp className="closeMenuBtn" onClick={toogleMenu}/>
          <ul>
            <a href="#sobreMin" onClick={toogleMenu}>
              <h2>Sobre Mim</h2>
            </a>
            <a href="#habilidades" onClick={toogleMenu}>
              <h2>Habilidades</h2>
            </a>
            <a href="#projetos" onClick={toogleMenu}>
              <h2>Projetos</h2>
            </a>
          </ul>
        </div>
      ) : null}
      <div className="headerBody">
        <div className="headerCard">
          <h1>Matheus Moura</h1>
          <ul>
            <a href="#sobreMin">
              <h2>Sobre Mim</h2>
            </a>
            <a href="#habilidades">
              <h2>Habilidades</h2>
            </a>
            <a href="#projetos">
              <h2>Projetos</h2>
            </a>
          </ul>
          <TiThMenu className="menuBtn" onClick={toogleMenu} />
        </div>
      </div>

      {/* Sobre mim */}
      <section id="sobreMin" style={{ width: "100%", height: "90vh" }}>
        <div className="sobreMinBody" data-aos="fade-right">
          <p className="nome">Matheus Moura</p>
          <h2>Desenvolvedor FullStack</h2>
          <p className="text">
            Com uma expertise sólida em economia e maestria nas tecnologias de
            ponta, como Node.js, Python, ReactJS, eu sou a peça-chave que falta
            para elevar o seu projeto ao patamar extraordinário. Transformo
            desafios em oportunidades, moldando soluções que transcendem
            expectativas. Como um freelancer excepcional, estou pronto para
            trazer inovação, eficiência e resultados surpreendentes para o seu
            empreendimento. Deixe-me ser a força propulsora por trás do seu
            sucesso. Vamos transformar ideias em conquistas notáveis juntos.{" "}
          </p>{" "}
          <div
            style={{
              width: "50vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            {/* <span className="textSaibaMais">Saiba mais</span> */}
          </div>
        </div>
        <div className="textoAnimado1Body">
          <span></span>
        </div>
        <div
          style={{
            width: "100%",
            height: "5vh",
            marginTop: "85vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "white", width: "100%" }}></h2>
        </div>
      </section>
      <section
        id="habilidades"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Swiper
          className="habilidadesBody"
          style={{ zIndex: "0" }}
          sliderPreview={1}
          pagination={{ clickable: true }}
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
            <div
              className="habilidadesBody"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {technologiesData.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{
                    margin: "2.5px 0",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {row.map((tech, index) => (
                    <div
                      key={index}
                      className={`${
                        ["Elastic Search", "Arquitetura de software", "Basic Authentication", "Token Authentication"].includes(tech.name)
                          ? "bigHabilidadeCard"
                          : "habilidadeCard"
                      } ${isCardExpanded(rowIndex, index) ? "expanded" : ""}`}
                      onClick={() => handleCardClick(rowIndex, index)}
                    >
                      <p>{tech.name}</p>
                      {isCardExpanded(rowIndex, index) && (
                        <p className="description">{tech.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section
        id="projetos"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={classe} id="Projetos"  >
          <div className="projetosSection1">
            <div >
              <h2 style={{ fontSize: "3.5rem", color: portifolioAtual.fontColor }}>
                Matheus Moura
              </h2>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "3rem",
                  fontWeight: "lighter",
                  color: portifolioAtual.fontColor,
                }}
              >
                {portifolioAtual.nome}
              </h3>
            </div>

            <div style={{ padding: "0 15px", height: "147vh" }}>
              <p
                style={{
                  color: portifolioAtual.fontColor,
                }}
              >
                {portifolioAtual.descricao}
              </p>
            </div>

            <div
              style={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                color: portifolioAtual.fontColor,
              }}
            >
              {portifolioAtual.tecnologias.map((element, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "1.8rem",
                    padding: "0 5px",
                    color: portifolioAtual.fontColor,
                  }}
                >
                  {element}
                </p>
              ))}
            </div>
          </div>

          <div className="projetosSection2Background">
            <div
              className="projetosSection2"
            >
              <div
                className="bkgERP"
                nome="Blue Wizard"
                onClick={() => {
                  handlePortifolio("Blue Wizard");
                  handleBackground("classe1");
                }}
              >
                <div className="filtro20px"></div>
                <h2>Blue Wizard</h2>
              </div>

              <div
                className="bkgBrasilLuvas"
                nome="Brasil Luvas"
                onClick={() => {
                  handlePortifolio("Brasil Luvas");
                  handleBackground("classe2");
                }}
              >
                <div className="filtro20px"></div>
                <h2>Brasil Luvas</h2>
              </div>
              
              
              
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          width: "100%",
          height: "25vh",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: "50px",
        }}
      >
        <div className="redesSociaisBody">
          <p >
            Me siga nas redes sociais
          </p>
          <div>
            <a href="">
              <FaInstagram
                color="white"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
            </a>
            <a href="">
              <RiTwitterXLine
                style={{
                  width: "30px",
                  height: "30px",
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="www.linkedin.com/in/matheusmoura-5995ab216">
              <BsLinkedin
                style={{
                  width: "30px",
                  height: "30px",
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
