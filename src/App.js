//importar style
import "./style/pages/home.css";
import "aos/dist/aos.css";

//importar components
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

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
        description: "Linguagem de marcação para documentos web.",
      },
      { name: "CSS", description: "Linguagem de estilo para documentos web." },
    ],
    [
      {
        name: "Javascript",
        description: "Linguagem de programação de alto nível.",
      },
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
    ],
    [
      {
        name: "Git",
        description: "Sistema de controle de versão distribuído.",
      },
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
          "Framework para construção de aplicativos web com Node.js.",
      },
      {
        name: "Prisma ORM",
        description:
          "Ferramenta de mapeamento objeto-relacional (ORM) para Node.js e TypeScript.",
      },
      {
        name: "Mongoose",
        description: "Biblioteca de modelagem de objetos MongoDB para Node.js.",
      },
      {
        name: "Express",
        description:
          "Framework web de alto nível em Python que incentiva o desenvolvimento rápido e limpo.",
      },
    ],
    [
      {
        name: "Django",
        description:
          "Framework web de alto nível em Python que incentiva o desenvolvimento rápido e limpo.",
      },
      {
        name: "API Restful",
        description:
          "Arquitetura de serviços web baseada em REST (Representational State Transfer).",
      },
      { name: "Flask", description: "Framework web leve em Python." },
      {
        name: "SQL",
        description:
          "Linguagem de consulta estruturada para gerenciamento de banco de dados.",
      },
      {
        name: "NoSQL",
        description:
          "Abordagem de design de banco de dados para dados não relacionais.",
      },
      {
        name: "MySQL",
        description: "Sistema de gerenciamento de banco de dados relacional.",
      },
    ],
    [
      {
        name: "MongoDB",
        description: "Banco de dados NoSQL orientado a documentos.",
      },
      {
        name: "ELastic Searchk",
        description: "Motor de busca e análise de dados.",
      },
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
      { name: "Apache", description: "Servidor web de código aberto." },
    ],
    [
      {
        name: "AWS",
        description: "Amazon Web Services - Plataforma de serviços em nuvem.",
      },
      {
        name: "Kafka",
        description: "Plataforma distribuída de streaming de eventos.",
      },
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
      {
        name: "Monolito",
        description:
          "Arquitetura de software em que um aplicativo é construído como uma única unidade.",
      },
    ],
    [
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
      {
        name: "Testes Unitarios",
        description:
          "Prática de teste de unidades individuais de código-fonte.",
      },
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
          <div className="closeMenuBtn" onClick={toogleMenu}>
            X
          </div>
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
      <section id="sobreMin" style={{ width: "100%", height: "90svh" }}>
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
            <span className="textSaibaMais">Saiba mais</span>
          </div>
        </div>
        <div className="textoAnimado1Body">
          <span></span>
        </div>
        <div
          style={{
            width: "100%",
            height: "5svh",
            marginTop: "85svh",
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
          height: "100svh",
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
          height: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className={classe}
          id="Projetos"
          style={{
            marginTop: "10svh",
            marginBottom: "20svh",
            height: "65svh",
            width:"80",
            borderRadius: "20px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              width: "55%",
              height: "65svh",
              margin: "0 1.9vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div style={{}}>
              <h2
                style={{ fontSize: "3.5rem", color: portifolioAtual.fontColor }}
              >
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

            <div style={{ padding: "0 15px", height: "147svh" }}>
              <p
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "lighter",
                  textAlign: "justify",
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

          <div
            className="projetosBody"
            style={{
              width: "40%",
              height: "65svh",
              maxHeight: "65svh",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            <div
              className="bkgERP"
              nome="Blue Wizard"
              onClick={() => {
                handlePortifolio("Blue Wizard");
                handleBackground("classe1");
              }}
              style={{
                marginTop: "20px",
                width: "60%",
                height: "20svh",
                minHeight: "20svh",
                border: "1px solid black",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                className="filtro20px"
                style={{
                  backdropFilter: "blur(10px)",
                  width: "100%",
                  height: "20svh",
                  minHeight: "20svh",
                }}
              ></div>
              <h2
                style={{
                  color: "white",
                  fontSize: "1.9rem",
                  position: "absolute",
                  pointerEvents: "none",
                }}
              >
                Blue Wizard
              </h2>
            </div>
            <div
              className="bkgBrasilLuvas"
              nome="Brasil Luvas"
              onClick={() => {
                handlePortifolio("Brasil Luvas");
                handleBackground("classe2");
              }}
              style={{
                marginTop: "20px",
                width: "60%",
                height: "20svh",
                minHeight: "20svh",
                border: "1px solid black",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                className="filtro20px"
                style={{
                  backdropFilter: "blur(10px)",
                  width: "100%",
                  height: "20svh",
                  minHeight: "20svh",
                }}
              ></div>
              <h2
                style={{
                  color: "black",
                  fontSize: "1.9rem",
                  position: "absolute",
                  pointerEvents: "none",
                }}
              >
                Brasil Luvas
              </h2>
            </div>
            <div
              onClick={() => {
                letrasPretas();
                handleBackground("classe3");
              }}
              style={{
                marginTop: "20px",
                width: "60%",
                height: "20svh",
                minHeight: "20svh",
                border: "1px solid black",
                cursor: "pointer",
              }}
            ></div>
            <div
              onClick={() => {
                letrasBrancas();
                handleBackground("classe4");
              }}
              style={{
                marginTop: "20px",
                width: "60%",
                height: "20svh",
                minHeight: "20svh",
                border: "1px solid black",
                cursor: "pointer",
              }}
            ></div>
            <div
              onClick={() => {
                handleBackground("classe5");
              }}
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                width: "60%",
                height: "20svh",
                minHeight: "20svh",
                border: "1px solid black",
                cursor: "pointer",
              }}
            ></div>
          </div>
        </div>
      </section>

      <section
        style={{
          width: "100%",
          height: "25svh",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            borderRadius: "20px",
            height: "20svh",
            width: "20%",
          }}
        >
          <p style={{ color: "white", fontSize: "2rem", textAlign: "center" }}>
            Me siga nas redes sociais
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "40px",
            }}
          >
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
            <a href="">
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
