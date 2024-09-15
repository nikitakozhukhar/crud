
import { Card } from '../Card/Card';

export function Cards({cards, removeCard}) {
  
 
  return (
    <>
      {cards.map((item) => <Card key={item.id} card={item} removeCard={removeCard}/>
      )}
      
    </>
  )
}