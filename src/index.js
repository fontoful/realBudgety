// Budget controller
var budgetController = (function() {
  // some code
})();

// Web interface controller
var UIController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// Global app controller
var controller = (function(budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();
  var ctrlAddItem = function() {
    // 1. we need to get the field input data
    var input = UICtrl.getinput();
    console.log(input);
    // 2. add the item to the budget controller
    // 3. Add the new item to the User interface
    // 4. Calculate the Budget
    // 5. display the budget in the User interface
  };

  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
