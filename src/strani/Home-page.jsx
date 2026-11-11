import {useNavigate} from "react-router-dom"
import {ShieldAlert, Target, Lightbulb} from "lucide-react"
import "./css/Home-page.css"
function HomePg(){
    const nosi = useNavigate()
    return(
        <div className="w-pozadina">
            <h1 className="w-naslov">Welcome to CyberTwin</h1>
            <h2 className="w-pod">Your digital habits reveal more about your security than you think.</h2>
            <p className="w-opis">
                Take a short assessment to discover how safe your online habits are. 
                CyberTwin will analyze your answers, identify your most vulnerable areas, 
                and provide practical tips to help you strengthen your digital security.
            </p>
            <h3 className="shtoima">What you'll discover:</h3>
            <div className="w-karti">
                <div className="w-karta">
                    <ShieldAlert size={28}/>
                    <h4>Detect Your Risk</h4>
                    <p>See how vulnerable your digital habits could make you to common cyber threats.</p>
                </div>
                <div className="w-karta">
                    <Target size={28}/>
                    <h4>Find Your Weak Spots</h4>
                    <p>Discover which areas of your digital life need the most attention.</p>
                </div>
                <div className="w-karta">
                    <Lightbulb size={28}/>
                    <h4>Strengthen Your Security</h4>
                    <p>Learn practical tips to make smarter and safer decisions online.</p>
                </div>
            </div>
            <button className="w-kopce" onClick={()=>nosi("/quiz")}>
                [ Let's Begin ]
            </button>
        </div>
    )
}
export default HomePg