import './css/AttackSimulator-page.css'
import Sidebar from "./delovi/Sidebar"
import lekcija from "./tekst/lekcii"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { QuizContext } from "../QuizContext"
 
function ASPage(){
    const navigate = useNavigate()
    const {siteOdg} = useContext(QuizContext)
    const poeniPoKategorija = siteOdg.reduce((akum, odgovor) => {
        const kat = odgovor.kategorija
        akum[kat] = (akum[kat] || 0) + odgovor.poeni
        return akum
    }, {})
    const kategorii = Object.keys(poeniPoKategorija)
    const poRed = kategorii.sort((a,b) => poeniPoKategorija[a] - poeniPoKategorija[b])
    const namesteno = [...lekcija].sort((a,b) => poRed.indexOf(a.del) - poRed.indexOf(b.del))
    return( 
        <div className="as-sidebar">
            <Sidebar/>
            <div className="as-sodrzina">
                <h2 className="as-tekst">
                    Your most vulnerable areas are at the top.
                    <p className='boja'>Simulations are ranked based on your current security habits and show realistic scenarios you could encounter.</p>
                </h2>
                <div className="zigzag">
                    {namesteno.map((lek, index) => (
                    <div className={index % 2 === 0 ? "karta-levo" : "karta-desno"} key={lek.id}
                    onClick={() => navigate(`/dashboard/attack-simulation/${lek.del}`)}>
                        <h3>{lek.naslov}</h3>
                        <p>{lek.opis2}</p>
                        <img src={lek.slika} alt={lek.naslov} className="sliki" />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ASPage