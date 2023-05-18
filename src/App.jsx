import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeCard from './TimeCard'
import UserCard from './UserCard'

function App() {
  return (
    <div>

      <div className="container mt-5">

        <div className="row">

          <div className="col">
            <UserCard report="Report for" name="Jeremy" name2="Robson" imagenp="./img/image-jeremy.png" />
          </div>


          <div className="col-9">
            <div className="row">
              <div className="col-4 my-1"><TimeCard color="#ff8b64" imagen="./img/icon-work.svg" activity="Work" activity2="32hrs" activity3="Last Week - 36hrs" /></div>
              <div className="col-4 my-1"><TimeCard color="#56c2e6" imagen="./img/icon-play.svg" activity="Play" activity2="10hrs" activity3="Last Week - 8hrs" /></div>
              <div className="col-4 my-1"><TimeCard color="#ff5e7d" imagen="./img/icon-study.svg" activity="Study" activity2="4hrs" activity3="Last Week - 7hrs" /></div>
              <div className="col-4 my-1"><TimeCard color="#4bcf83" imagen="./img/icon-exercise.svg" activity="Exercise" activity2="4hrs" activity3="Last Week - 5hrs" /></div>
              <div className="col-4 my-1"><TimeCard color="#7235d1" imagen="./img/icon-social.svg" activity="Social" activity2="5hrs" activity3="Last Week - 10hrs" /></div>
              <div className="col-4 my-1"><TimeCard color="#f1c75b" imagen="./img/icon-self-care.svg" activity="Self Care" activity2="2hrs" activity3="Last Week - 2hrs" /></div>
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}


export default App

