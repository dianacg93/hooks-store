import './App.css';
import HomePage from './components/HomePage'
import {useState} from 'react'

function App() {

  const [itemCurrentlyOnSale, setItemCurrentlyOnSale] = useState("A Hammer")
  const [editable, setEditable] = useState(true);

  const toggleEditSaleItem = e => setEditable(!editable);

  const changeItemOnSale = e => {
    // e.preventDefault();
    setItemCurrentlyOnSale(e.target.value)};

  return (
    <div className="App">
      <h1>Hooks Lesson </h1>
      <HomePage 
      saleItem={itemCurrentlyOnSale} 
      edit={editable}
      editItem = {toggleEditSaleItem}
      changeItem = {changeItemOnSale}
      />
    </div>
  );
}

export default App;
