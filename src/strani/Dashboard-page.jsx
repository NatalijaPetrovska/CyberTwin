import { useContext } from "react"
import { QuizContext } from "../QuizContext" 
import Sidebar from "./delovi/Sidebar"
import Twin from "./delovi/Twin"
import LearningCenter from "./delovi/LearningCenter"
import AttackSimulator from "./delovi/AttackSimulator"
import "./css/Dashboard-page.css"
import lekcija from "./tekst/lekcii" 
import napadi from "./tekst/napadi"

function Dashboard(){
    const {siteOdg} = useContext(QuizContext)
    const poeniPoKategorija = siteOdg.reduce((akum, odgovor) => {
        const kat = odgovor.kategorija
        akum[kat] = (akum[kat] || 0) + odgovor.poeni
        return akum
    }, {})
    const kategorii = Object.keys(poeniPoKategorija)
    const poRed = kategorii.sort((a,b) => poeniPoKategorija[a] - poeniPoKategorija[b])
    const najmalku = poRed.slice(0,2)
    const filterLekcii = lekcija.filter((lek) => najmalku.includes(lek.del))
    return(
        <div className="cel-dash">
            <Sidebar/>
            <div className="sredina-dash">
                <Twin poeni={poeniPoKategorija}/>
            </div>
            <div className="desno-dash">
                <LearningCenter lekcija={filterLekcii}/>
                <AttackSimulator napad={filterLekcii}/>
            </div>
        </div>
    )
}
export default Dashboard