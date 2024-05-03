import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import placeholderImage from './assets/placeholder.png'
import viteLogo from '/vite.svg';
import { Majors } from './majors-categories';

export function CategorySearch() {
  // random list by chat gpt to demonstrate serach feautre (TO BE REPLACED BY API)
  const randomNames = [
    { name: "Liam", description: "Liam is a popular boy's name of Irish origin." },
    { name: "Olivia", description: "Olivia is a feminine given name meaning 'olive' or 'olive tree' in Latin." },
    { name: "Noah", description: "Noah is a given name and surname most likely derived from the Biblical figure Noah (נוֹחַ) in Hebrew." },
    { name: "Emma", description: "Emma is a given name of Old German origin, and means 'whole' or 'universal'." },
    { name: "Oliver", description: "Oliver is a masculine given name of Latin origin, meaning 'olive tree'." },
    { name: "Ava", description: "Ava is a feminine given name in the English-speaking world." },
    { name: "Elijah", description: "Elijah is a masculine given name derived from Hebrew אֱלִיָּהוּ ('Eliyyahu'), meaning 'Yahweh is God'." },
    { name: "Charlotte", description: "Charlotte is a female given name, a female form of the male name Charles." },
    { name: "James", description: "James is an English-language name of Hebrew origin." },
    { name: "Sophia", description: "Sophia is a feminine given name, from Greek Σοφία, Sophía, 'wisdom'." },
    { name: "William", description: "William is a male given name of Germanic origin." },
    { name: "Amelia", description: "Amelia is a female given name." },
    { name: "Benjamin", description: "Benjamin is a common surname of English and French origin." },
    { name: "Isabella", description: "Isabella is a feminine given name derived from the Latin name Ysabella or Isabel." }
  ];

  // query variable
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(randomNames);

  // Search function
  const searchItem = (query) => {
    const filteredList = randomNames.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-placeholder">
          {/* Placeholder content */}
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>
      <div>
        <h1>Computer Science</h1>
        <label>Search</label>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => {
            setQuery(e.target.value);
            searchItem(e.target.value);
          }} 
        />
        <div className="item-container">
          {filtered.map((item) => (
            <div key={item.name} className="item" onClick={() => alert('Redirect to item')}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <img src={placeholderImage} style={{ width: '50%', height: 'auto' }}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
