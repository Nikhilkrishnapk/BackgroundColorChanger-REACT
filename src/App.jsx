
import myStyle from './style.module.css'
import './App.css'
import { useState } from 'react'

function App() {

  const[bgColor,setbgColor] = useState()

  const setColor=(color)=>{
    setbgColor(color)
  }

  return (
    <>
      <div className={`${myStyle.container} ${myStyle[bgColor]}`}>
        <h1 className={myStyle.mainHead}>BACKGROUND COLOR CHANGER </h1>
        <div className={myStyle.btnContainer}>
          <button onClick={()=>{
            setColor('red')
          }}  className={myStyle.btn}>Red</button>
          <button  onClick={()=>{
            setColor('blue')
          }}  className={myStyle.btn}>Blue</button>
          <button  onClick={()=>{
            setColor('green')
          }}  className={myStyle.btn}>Green</button>
          <button  onClick={()=>{
            setColor('yellow')
          }}  className={myStyle.btn}>Yellow</button>
        </div>
        

          


      </div>


          


    </>
  )
}

export default App
