import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import napadi from "../tekst/napadi";
import "./Simulacija.css"

function Simulacii(){
    const {kategorija} = useParams()
    const moment = napadi[kategorija]
    const [bilo, setBilo] = useState([{id: "start", izbor: null}])
    const momentalnaScena = bilo[bilo.length-1]
    const scena = moment[momentalnaScena.id]
    const navigate = useNavigate()
    const [poslednaTocna, setPoslednaTocna] = useState(null)
    return(
        <div className={`pozadina ${poslednaTocna === "da"?"zelena" : poslednaTocna==="ne"?"crvena":""}`}>
            <div className="sodrzina">
                <h3 className="heder">SECURITY_LOG // {kategorija}</h3>
                
                {bilo.map((zapis, index) => {
                    const scenaZapis = moment[zapis.id]
                    const daliPosledna = index === bilo.length-1
                    return(
                        <div key={index} className={daliPosledna ? "aktiven":"star"}>
                            {zapis.izbor && 
                            <p>You chose: {zapis.izbor}</p>}
                            <p>{scenaZapis.tekst}</p>
                            {daliPosledna && (
                                scenaZapis.opcii.length > 0 ? (
                                    scenaZapis.opcii.map((op,i) => (
                                        <button key={i} onClick={() => {
                                            setBilo([...bilo, {id: op.sledno, izbor:op.tekst}])
                                            setPoslednaTocna(op.tocnost)
                                        }}>
                                            {op.tekst}
                                        </button>
                                    ))
                                ):(
                                    <button onClick={()=>navigate("/dashboard/attack-simulation")}>Back to Attack Simulator</button>
                                )
                            )}
                        </div>
                    )
                })}
            </div> 
        </div>
    )
}
export default Simulacii