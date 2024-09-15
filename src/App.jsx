
import './App.css';

import { useState, useEffect } from 'react';
import { Cards } from './components/Cards/Cards';
import { Header } from './components/Header/Header';
import { NewCardForm } from './components/NewCardForm/NewCardForm';

function App() {
  const [cards, setCards] = useState([]);

  
  async function getCards() {
    try {
      const response = await fetch('https://backend-ra16-crud.onrender.com/notes');
      const cards = await response.json();
      setCards(cards)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function removeCard(id) {
    try {
      const response = await fetch(`https://backend-ra16-crud.onrender.com/notes/${id}`, {
        method: 'DELETE',
        
      })
      if (!response.ok) throw new Error(`Server error ${response.status}`)

      if (response.status === 204) {
        getCards(); // Re-fetch the updated list of cards
        return;
      }

      const data = await response.json();

      if (data.success) getCards()
      
    } catch(err) {
      console.error('Error fetching data in removeCard:', err);
    }
  }

  async function addNewCard(text) {
    try {
      const response = await fetch('https://backend-ra16-crud.onrender.com/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      if (response.status === 204) {
        getCards(); 
        return;
      }

      const data = await response.text();
      
      if (data) { 
        const jsonData = JSON.parse(data);
        if (jsonData.success) {
          getCards();
        }
      }
    } catch (err) {
      console.error('Error adding new card:', err);
    }
  }

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className="App">
      <Header getCards={getCards}/>
      <Cards cards={cards} removeCard={removeCard}/>
      <NewCardForm addNewCard={addNewCard}/>
    </div>
  );
}

export default App;
