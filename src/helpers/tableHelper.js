export const addItem = (table, newItem) => {
    let updatedTable = {
        ...table,
        items: [],
      };
    let flag = 0;

    for(let item of table.items) {
        if(item.id === newItem.id) {
          flag = 1;
          updatedTable.items.push({
            ...item,
            quantity: item.quantity+1,
          });
        }
        else {
          updatedTable.items.push({...item,});
        }
    }
  
    if(flag === 0) {
        updatedTable.items.push({...newItem, quantity: 1,});
    }

    return updatedTable;
}


export const removeItem = (table, itemToRemove) => {
  let updatedTable = {
    ...table,
    items: []
  }

  for(let item of table.items) {
    if(item.id === itemToRemove.id){
      if(item.quantity === 1) {
        return removeItemAll(table, item.id);
      }
      updatedTable.items.push({
        ...item,
        quantity: item.quantity-1,
      });
    }
    else {
      updatedTable.items.push({...item,});
    }
  }

  return updatedTable;
}


export const removeItemAll = (table, itemId) => {
  return {
    ...table,
    items: table.items.filter(item => item.id !== itemId),
  }
}

export const updateTable = (tables, updatedTable) => {
    let newTables = [];
    for(let table of tables){
      if(table.id === updatedTable.id) {
        newTables.push(updatedTable);
      }
      else {
        newTables.push(table);
      }
    }

    return newTables;
}

