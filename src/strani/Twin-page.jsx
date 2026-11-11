import Sidebar from "./delovi/Sidebar"
import { QuizContext } from "../QuizContext"
import { useContext, useEffect, useState } from "react"
import telo from "../assets/body.png"
import "./css/Twin-page.css"
function TwinPage(){
    const {siteOdg} = useContext(QuizContext)
    const poeniPoKategorija = siteOdg.reduce((akum, odgovor)=>{
        const kat = odgovor.kategorija
        akum[kat] = (akum[kat] || 0) + odgovor.poeni
        return akum
    }, {})
    const vkupnoPoen = Object.values(poeniPoKategorija).reduce((akum, broj)=> akum+broj, 0)
    const vkupenProcent = (vkupnoPoen / 72)*100
    function boja(procent){
        if(procent<40) return "crvena"
        if (procent<70) return "zolta"
        return "zelena"
    }
    function useCountUp(cel, traenje = 1000){
        const [broj, setBroj] = useState(0)
        useEffect(()=>{
            let pocetok = null
            function cekor(vreme){
                if(!pocetok) pocetok = vreme
                const progres = Math.min((vreme-pocetok)/traenje,1)
                setBroj(Math.round(progres*cel))
                if(progres<1)requestAnimationFrame(cekor)
            }
        requestAnimationFrame(cekor)
        }, [cel])
        return broj
    }
    const novoOverall = useCountUp(Math.round(vkupenProcent), 3500)
    return(
        <div className="twin-sidebar">
            <Sidebar/>
            <div className="twin-sodrzina">
                <div className="twin-tekst">
                    <h3>YOUR DIGITAL TWIN</h3>
                    <p>This is a live reflection of your cybersecurity habits, built from your quiz answers. Each category shows how well-protected you currently are.</p>
                </div>
                <div className="safety">
                    <h3>OVERALL SAFETY LEVEL</h3>
                    <p className="glavni-procenti">{novoOverall}%</p>
                    <div className="bar-pozadina">
                        <div className={`bar-poln ${boja(novoOverall)}`} style={{width: `${novoOverall}%`}}></div>
                    </div>
                </div>
                <div className="avatar">
                    <img src={telo} alt="telo" className="telo"/>
                    <div className="scan"></div>
                </div>
                <div className="kategorija-lista">
                    {Object.keys(poeniPoKategorija).map((kat) =>{
                        const procentKat = (poeniPoKategorija[kat]/12)*100
                        const novoKat = useCountUp(Math.round(procentKat), 3500)
                        return(
                            <div key={kat} className="kategorija-red">
                                <div className="kategorija-info">
                                    <p>{kat}</p>
                                    <span>{novoKat}%</span>
                                </div>
                                <div className="bar-pozadina">
                                    <div className={`bar-poln ${boja(novoKat)}`} style={{width: `${novoKat}%`}}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default TwinPage