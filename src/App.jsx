import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './strani/Dashboard-page'
import Quiz from './strani/Quiz-page'
import { QuizProvider } from './QuizContext'
import TwinPage from './strani/Twin-page'
import LCPage from './strani/LearningCenter-page'
import ASPage from './strani/AttackSimulator-page'
import Simulacii from './strani/simulacija/Simulacija'
import HomePg from './strani/Home-page'
function App() {
  return (
    <QuizProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePg/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/dashboard/twin' element={<TwinPage/>}/>  
          <Route path='/dashboard/learning-center' element={<LCPage/>}/>
          <Route path='/dashboard/attack-simulation' element={<ASPage/>}/>
          <Route path='/dashboard/attack-simulation/:kategorija' element={<Simulacii/>}/>
        </Routes>
      </HashRouter>
    </QuizProvider>
    
  )
}

export default App
