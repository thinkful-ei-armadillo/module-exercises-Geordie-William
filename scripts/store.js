'use strict';

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };
  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error)
    {
      console.log('Cannot add item: ' + error.message);
    }
  };
  const findAndToggleChecked = function(id){
    const found = this.findById(id);
    found.checked = !found.checked;
  };
  const findAndUpdateName = function(id, newName){
    try{
      Item.validateName(newName);
      const findItem = this.findById(id);
      findItem.name = newName;
    }
    catch (error) {
      console.log('Cannot add item: ' + error.message);
    }
  };
  const findAndDeleteItem = function(id){
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(val) {
    this.searchTerm = val;
  };

  return {
    items, hideCheckedItems, searchTerm, findById, addItem,
    findAndToggleChecked, findAndDeleteItem, findAndUpdateName, toggleCheckedFilter, setSearchTerm
  };
}());

