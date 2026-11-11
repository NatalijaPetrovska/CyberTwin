import avatarFaca from "../../assets/face.png"
import "../css/Twin.css"
import { CircleQuestionMark } from "lucide-react"
import { useNavigate } from "react-router-dom"
function Twin({poeni}){
    const odnesi = useNavigate()
    const vkupnoPoeni = Object.values(poeni).reduce((akum, broj) => akum+broj,0)
    const procentSig = (vkupnoPoeni /72)*100
    let rizik
    if(procentSig <= 40) {rizik = "High Risk"}
    else if(procentSig <= 80) {rizik = "Medium Risk"}
    else {rizik = "Low Risk"}
    const rizikObjasnuvanje = {
    "High Risk": "Your current habits leave you exposed to several common online threats. Small changes can make a big difference.",
    "Medium Risk": "You have some good security habits, but a few weak areas could still leave you vulnerable to common online threats.",
    "Low Risk": "Your answers show strong security habits and good awareness of common online threats. Keep building on them."
    }
    return(
        <div className="twince">
            <div className="faca">
                <span className="agol gl"></span>
                <span className="agol gd"></span>
                <span className="agol dl"></span>
                <span className="agol dd"></span>
                <img src={avatarFaca} alt="faca" onClick={()=> odnesi(`/dashboard/twin`)}/> 
            </div>
            <div className="status-box">
                <p>Twin Status:</p>
                <div className="risk">
                    <span className="risk-icon">
                        <CircleQuestionMark size={18}/>
                        <span className="objasnuvanje">{rizikObjasnuvanje[rizik]}</span>
                    </span>
                    <h3>{rizik}</h3>
                </div>
            </div>
        </div>
    )
}
export default Twin