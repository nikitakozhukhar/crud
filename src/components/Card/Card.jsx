import './card.css'

export function Card({card, removeCard}) {
 
  return (
    <>
      <div className="card">
        <div className="card__close" onClick={() => removeCard(card.id)}></div>
        <div className="card__text">{card.text}</div>
      </div>
    </>
  )
}