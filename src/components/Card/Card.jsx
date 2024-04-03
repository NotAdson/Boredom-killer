import style from './style.module.css'

export default function Card({title, description}){

    return (
        <div className={style.Card}>
            <h1 className={style.Title}>{title}</h1>
            <a className={style.Description}>{description}</a>
        </div>
    )
}