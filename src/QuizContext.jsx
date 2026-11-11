import { createContext, useState, useEffect } from "react";
const QuizContext = createContext()

function QuizProvider ({children}){
    const [siteOdg, setSiteOdg] = useState(() => {
        const cuvaj = localStorage.getItem("siteOdg")
        return cuvaj ? JSON.parse(cuvaj) : []
    })
    useEffect(() => {localStorage.setItem("siteOdg", JSON.stringify(siteOdg))}, [siteOdg])
    return(
        <QuizContext.Provider value={{siteOdg, setSiteOdg}}>
            {children}
        </QuizContext.Provider>
    )
}
export {QuizContext, QuizProvider}