import css from './Card.module.css'
function Card({title, text, handleAlert, img}) {
    return (
        <>
            <div className={css.card}>
                <img width={200} src={img} alt='rasm' />
                <div className={css.content}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <button onClick={handleAlert} className={css.btn}>Batafsil</button>
                </div>
            </div>
        </> 
    )
}
export default Card;