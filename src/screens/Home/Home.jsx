import { useState } from 'react'
import controllerLogo from '../../assets/controller.svg'
import bookLogo from '../../assets/book.svg'
import film from '../../assets/film.svg'
import MediaTypeButton from '../../components/MediaTypeButtons/MediaTypeButton'
import './Home.css'

function random(){
  console.log("Oi")
}

export default function Home() {
  return (
    <>
        <div align="center" >
            <MediaTypeButton imagePath={controllerLogo} handleFunction={random} />
            <MediaTypeButton imagePath={bookLogo} handleFunction={random} />
            <MediaTypeButton imagePath={film} handleFunction={random} />
        </div>
        <div>
            
        </div>
    </>

  )
}