import "./intro.scss";
import {ExpandMore} from "@material-ui/icons"
import {init} from 'ityped'
import {useEffect,useRef} from 'react'


export default function Intro() {

    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            
            strings:["Developer","Programmer","Creator"]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/eu3.png" alt="minha foto"></img>
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, i'm </h2>
                    <h1>Matheus</h1>
                    <h3> <span ref={textRef}></span></h3>
                </div>
                <a href="#portfoliodiv">
                <ExpandMore className="icon"/>
                </a>
            </div>
        </div>
    )
}
