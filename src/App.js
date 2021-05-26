import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [item, setItem] = useState('');
  const [groceryList, setGroceryList] = useState([]);
  const [alert, setAlert] = useState(false);
  const [notify, setNotify] = useState('added')

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert(true);
    setNotify('added');
  }

  return (
    <>
      <Alert notify={notify}/>
      <h2>Grocery List</h2>
      <section>
        <form>
          <label for="item">Item:</label>
          <input 
            type="text" 
            value={item} 
            onChange={(e)=>setItem(e.target.value)} 
          />
          <button type="submit" onClick={()=>handleSubmit()}>Add</button>
        </form>
        <List key={groceryList.index} {...groceryList} />

        <button onClick={()=>setGroceryList([])}>Clear Items</button>
      </section>
    </>
  );
}

export default App;
