import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {useState,useEffect} from "react";
import{
    featuredPortfolio,
    webPortfolio,
    softwarePortfolio,
    studiesPortfolio,
}from "../../data";


export default function Portfolio() {
    /*
                <li className="active">Featured</li>
                <li>Web Apps</li>
                <li>Software Apps</li>
                <li>Automations</li>
                <li>Studies</li>
    */
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    
    const list = [
        {
            id:"featured",
            title:"Featured",
        },
        {
            id:"web",
            title:"Web App",
        },
        {
            id:"software",
            title:"Software App",
        },
        

        {
            id:"studies",
            title:"Studies",
        }
    ];


    

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "software":
                setData(softwarePortfolio)
                break;

            case "studies":
                setData(studiesPortfolio)
                break;
                default:
                    setData(featuredPortfolio)
                    break;

        }
    },[selected])

    return (
        <div className="portfolio" id="portfoliodiv">
            <h1 id="portfolioH1">Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} 
                    active={selected===item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(

                <a href={d.link}>
                <div className="item">
                    <img src={d.img}  />
                    
                    <h3>{d.title}</h3>
                </div>
                </a>
                ))}
            </div>
        </div>
    )
}
