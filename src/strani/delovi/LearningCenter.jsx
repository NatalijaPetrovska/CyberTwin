import '../css/LearningCenter.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function LearningCenter({lekcija}){
    const odnesi = useNavigate()
    const [otvorena, setOtvorena] = useState(null)
    return(
        <div className="delce">
            <h3 className='naslov'>Learning Center 
                <span> (Focus on Your Weakest Areas)</span>
            </h3> 
            <div className='lekcii-red'>
            {lekcija.map((lek) => (
                <div className="dve-karti" key={lek.id} onClick={()=>setOtvorena(lek)}>
                    <h4>{lek.naslov}</h4>
                    <p>{lek.opis}</p>
                    <img src={lek.slika} alt="sliki" className='slik'/>
                </div>
            ))} 
            </div>
            <button className='more' onClick={() => odnesi('/dashboard/learning-center')}>More</button>
            {otvorena && (
                <div className='modal-pozadina' onClick={()=>setOtvorena(null)}>
                    <div className='modal-sodrzina' onClick={(e)=>e.stopPropagation()}>
                        <button className='modal-zatvori' onClick={()=>setOtvorena(null)}>X</button>
                        <h2>{otvorena.naslov}</h2>
                        <p>{otvorena.sodrzina}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default LearningCenter