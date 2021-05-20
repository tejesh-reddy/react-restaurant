import './App.css';
import { Tables } from './components/Tables';
import {useState, React} from 'react';
import { Menu } from './components/Menu';
import { Popup } from './components/Popup';
import { dragend, dragenter, dragleave, dragover, dragstart, drop } from './helpers/dragHelper';
import { DefaultItems, DefaultTables } from './helpers/data';
import { addItem, removeItem, removeItemAll, updateTable } from './helpers/tableHelper';

function App() {

  let [open, setOpen] = useState(false);

  let [tables, setTables] = useState(DefaultTables);

  let items = DefaultItems;

  let [popupTable, setPopupTable] = useState({});

  const clickHandler = (id, table) => {
    document.getElementById(id).classList.toggle('table-active');
    togglePopup(table);
  };

  const togglePopup = (table) => {
    setPopupTable({...table});
    setOpen(!open);
  };

  const calculateAmount = (items) => {
    let amount = 0;
    for(let item of items){
      amount += item.price * item.quantity;
    }

    return amount;
  };


  const drag = {
    start: (ev, id) => dragstart(ev, id),
    end: dragend,
    leave: dragleave,
    drop: (ev, id) => drop(ev, id, addToTable),
    enter: dragenter,
    over: dragover,
  }

  const setUpdatedTables = (updatedTable) => {
    let newTables = updateTable(tables, updatedTable);
    setTables(newTables);
  }

  const addToTable = (id, itemId) => {
    let target = tables.filter((table) => table.id === id)[0];
    let source = items.filter((item) => item.id === itemId)[0];

    let updatedTable = addItem(target, source);

    setUpdatedTables(updatedTable);

    return updatedTable;
  }

  
  const quantityHandler = (event, itemId) => {
    let item = popupTable.items.filter(item => item.id === itemId)[0];
    let updatedTable = {};
    if(item.quantity < Number(event.target.value)){
      updatedTable = addToTable(popupTable.id, itemId);
    }
    else {
      updatedTable = removeItem(popupTable, item);
      setUpdatedTables(updatedTable);
    }
    setPopupTable(updatedTable);
  };

  const deleteHandler = (itemId) => {
    let updatedTable = removeItemAll(popupTable, itemId);
    setPopupTable(updatedTable);
    setUpdatedTables(updatedTable);
  }

  return (
    <>
		<header>
			<h1>ZeMoSo Restaurant</h1>
		</header>
    <div className='page'>
      <Tables tables={tables} amount={(items) => calculateAmount(items)} clickHandler={clickHandler} drag={drag}/>
      <Menu items={items} drag={drag}/>
    </div>
    <Popup table={popupTable} closeHandler={() => clickHandler(popupTable.id, [])} open={open} quantHandler={quantityHandler} deleteHandler={deleteHandler}/>
    </>
  );
}

export default App;
