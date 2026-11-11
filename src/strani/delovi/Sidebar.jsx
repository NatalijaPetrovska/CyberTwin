import { useNavigate, useLocation } from "react-router-dom"
import { Fingerprint } from "lucide-react"
import { useContext } from "react"
import {QuizContext} from "../../QuizContext"
import "../css/Sidebar.css"

function Sidebar(){
    const navigacija = useNavigate()
    const lokacija = useLocation()
    const {setSiteOdg} = useContext(QuizContext)
    return (
        <div className="sidebar">
            <h2 onClick={() => navigacija("/dashboard")}><Fingerprint size={28}/>CyberTwin</h2>
            <nav>
                <p 
                className={lokacija.pathname === "/dashboard/twin" ? "aktivna" : ""}
                onClick={() => navigacija("/dashboard/twin")}>Twin</p>
                <p 
                className={lokacija.pathname === "/dashboard/learning-center" ? "aktivna" : ""}
                onClick={() => navigacija("/dashboard/learning-center")}>Learning Center</p>
                <p 
                className={lokacija.pathname === "/dashboard/attack-simulation" ? "aktivna" : ""}
                onClick={() => navigacija("/dashboard/attack-simulation")}>Attack Simulator</p>
            </nav>
            <button className="retake" onClick={()=>{
                if(window.confirm("Are you sure? This will reset your current quiz results."))
                {
                    setSiteOdg([])
                    navigacija("/quiz")
                }
            }}>
                Retake the Quiz
            </button>
        </div>
    )
}
export default Sidebar