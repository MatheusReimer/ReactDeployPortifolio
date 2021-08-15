import "./works.scss"
import {useState} from 'react'

export default function Works() {

    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",

            title: "(PT-BR) Sobre mim.",
            desc:
              "Estudante de ciencias da computação na Univali(BR) e com alguma experiência profissional em desenvolvimento Web . Além do gosto por programação web, tenho constante curiosidade para resolver e automatizar problemas cotidianos utilizando ferramentas como websrapping e ferramentas de programação de software.  ",
            img:"assets/dev.svg"

          },
          {
            id: "2",
      
            title: "(EN-US) About me.",
            desc:"Computer science student at Univali(BR) and with some professional experience in Web development. In addition to the taste for web programming, I am constantly curious to solve and automate everyday problems using tools such as websrapping and software programming tools.",
            img:"assets/dev2.svg"
          },
          {
            id: "3",
            
            title: "(DE-DE) Über mich .",
            desc:"Informatikstudent bei Univali(BR) und mit etwas Berufserfahrung in der Webentwicklung. Neben der Vorliebe für Webprogrammierung bin ich ständig neugierig, alltägliche Probleme mit Tools wie Websrapping und Softwareprogrammiertools zu lösen und zu automatisieren.",
              img:"assets/dev3.svg"
          },

    ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };


    return (
        <div className="works" id="works">
        <div
          className="slider"  style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                  
                    <h2>{d.title}</h2>
                    <br></br>
                    <p>{d.desc}</p>
                    
                  </div>
                </div>
                <div className="right">
                  <img
                    src={d.img} alt="imagem"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img src="assets/right-arrow.png" className="arrow left" onClick={()=>handleClick("left")}/>
        <img src="assets/right-arrow.png" className="arrow right" onClick={()=>handleClick()}/>
        
      </div>
    );
  }