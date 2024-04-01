import { useState } from 'react'
import controllerLogo from '../../assets/controller.svg'
import bookLogo from '../../assets/book.svg'
import film from '../../assets/film.svg'
import MediaTypeButton from '../../components/MediaTypeButtons/MediaTypeButton'
import Card from '../../components/Card/Card'
import './Home.css'

export default function Home() {
  const [cards, setCards] = useState([])

  async function getGames(){
    const response = await fetch("http://localhost:8009/games");
    const data = await response.json();
    setCards(data.list)
  }
  
  async function getMovies(){
    const response = await fetch("http://localhost:8009/movies");
    const data = await response.json();
    setCards(data.list)
  }
  
  async function getBooks(){
    const response = await fetch("http://localhost:8009/books");
    const data = await response.json();
    setCards(data.list)
  }
  
  return (
    <>
        <div align="center" >
            <MediaTypeButton imagePath={controllerLogo} handleFunction={getGames} />
            <MediaTypeButton imagePath={bookLogo} handleFunction={getBooks} />
            <MediaTypeButton imagePath={film} handleFunction={getMovies} />
        </div>
        <div>
          {cards.map(card =>(
            <Card title={card.title} description={card.description}/>
          ))}
        </div>
    </>

  )
}