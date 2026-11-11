import Sidebar from "./delovi/Sidebar"
import lekcija from "./tekst/lekcii"
import { useState } from "react"
import './css/LearningCenter-page.css'


function LCPage(){
    const [otvorena, setOtvorena] = useState(null)
    return(
        <div className="ls-sidebar">
            <Sidebar/> 
            <div className="ls-sodrzina">
                {lekcija.map((lek) => (
                    <div className="karti" key={lek.id}
                    onClick={() => setOtvorena(lek)}>
                        <h3>{lek.naslov}</h3>
                        <p>{lek.opis}</p>
                        <img src={lek.slika} alt={lek.naslov} className="sliki" />
                    </div>    
                ))} 
                {otvorena && 
                <div className="modal-pozadina" onClick={() => setOtvorena(null)}>
                    <div className="modal-sodrzina" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-zatvori" onClick={() =>setOtvorena(null)}>X</button>
                        <h2>{otvorena.naslov}</h2>
                        <p>{otvorena.sodrzina}</p>
                    </div>
                </div>}
            </div>
        </div>
    )
}
export default LCPage