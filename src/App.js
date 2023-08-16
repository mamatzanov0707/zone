import './App.css';
import './styles/style.scss'
import Header from "./conponents/header/header";
import Hero from "./conponents/hero/hero";
import Zone from "./conponents/zone/zone";
import More from './conponents/ more/more'
import Care from "./conponents/care/care";
import MetTeam from "./conponents/Met  Team/Met  Team";
import Email from "./conponents/email/email";
import Footer from "./conponents/footer/footer";
import {useState} from "react";

function App() {
    const [dark , setDark] =useState(false)
    const getDark = () =>{
        setDark(!dark)
    }

    return (
    <div className="App" style={{
        background: dark ?'black' : '',
        color :dark ? '' : ''
    }}>
        <Header getDark={getDark}/>
        <Hero/>
        <Zone/>
        <More/>
        <Care/>
        <MetTeam/>
        <Email/>
        <Footer/>
    </div>
  );
}

export default App;
