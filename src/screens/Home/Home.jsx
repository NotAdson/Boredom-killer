import { useState } from 'react'
import controllerLogo from '../../assets/controller.svg'
import bookLogo from '../../assets/book.svg'
import film from '../../assets/film.svg'
import MediaTypeButton from '../../components/MediaTypeButtons/MediaTypeButton'
import Card from '../../components/Card/Card'
import axios from 'axios'
import './Home.css'

export default function Home() {
  const [cards, setCards] = useState([])

  async function getGames(){
    axios.get("https://culturevault.onrender.com/games").then(response => {
      setCards(response.data.list)
    })
  }
  
  async function getMovies(){
    axios.get("https://culturevault.onrender.com/movies").then(response => {
    setCards(response.data.list)
    })
  }
  
  async function getBooks(){
    axios.get("https://culturevault.onrender.com/books").then(response => {
      setCards(response.data.list)
    })
  }

  return (
    <>
        <div align="center" >
            <MediaTypeButton imagePath={controllerLogo} handleFunction={getGames} />
            <MediaTypeButton imagePath={bookLogo} handleFunction={getBooks} />
            <MediaTypeButton imagePath={film} handleFunction={getMovies} />
        </div>
        <div className='setCards'>
          {cards.map((card) =>(
            <Card key={card.id} title={card.name} description={card.description}/>
          ))}
        </div>
    </>

  )
}