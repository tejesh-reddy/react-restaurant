import './App.css';
import {useState} from 'react';
import { Popup } from './components/organisms/Popup';
import { dragend, dragenter, dragleave, dragover, dragstart, drop } from './helpers/dragHelper';
import { DefaultItems, DefaultTables } from './helpers/data';
import { addItem, removeItem, removeItemAll, updateTable } from './helpers/tableHelper';
import { MainPage } from './components/templates/MainPage';

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
		<MainPage tables={tables} items={items} clickHandler={clickHandler} drag={drag}/>
    <Popup table={popupTable} closeHandler={() => clickHandler(popupTable.id, [])} open={open} quantHandler={quantityHandler} deleteHandler={deleteHandler}/>
    </>
  );
}

export default App;
