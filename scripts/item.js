'use strict';



const Item = function() {
  
  const create = function(name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };

  return {
    create,
  };
}();

