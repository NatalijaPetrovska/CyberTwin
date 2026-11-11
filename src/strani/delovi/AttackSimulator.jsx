import { useNavigate } from "react-router-dom"
import "../css/AttackSimulator.css"
function AttackSimulator({napad}){
    const odnesi = useNavigate()
    return(
        <div className="delce">
            <h3 className="delce-naslov">Attack Simulator
                <span> (Your Most Vulnerable Areas)</span>
            </h3>
            {napad.map((nap) => (
                <div className="dve-karti" key={nap.id} onClick={()=>odnesi(`/dashboard/attack-simulation/${nap.del}`)}>
                    <h4>{nap.naslov}</h4>
                    <p>{nap.opis2}</p>
                </div>
            
            ))}
            <button className='more' onClick={() => odnesi('/dashboard/attack-simulation')}>More</button>
        </div>
    )
}
export default AttackSimulator