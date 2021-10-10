
   
// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

var itemlist = document.querySelectorAll(".items");
var price = 0;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
 // renderButtons();
 // renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    itemlist[0].innerHTML="Patty";
  } else {
    patty.style.display = "none";
    itemlist[0].innerHTML="";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
    itemlist[1].innerHTML="Cheese";
  } else {
   cheese.style.display = "none";
   itemlist[1].innerHTML="";
}
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato= document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
    itemlist[2].innerHTML="Tomatoes";
  } else {
    tomato.style.display = "none";
    itemlist[2].innerHTML="";
}
}

function renderOnions() {
  console.log("Onions");
  let onion = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    onion.style.display = "inherit";
    itemlist[3].innerHTML="Onions";
  } else {
   onion.style.display = "none";
   itemlist[3].innerHTML="";
}
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
    itemlist[4].innerHTML="Lettuce";
  } else {
    lettuce.style.display = "none";
    itemlist[4].innerHTML="";
}
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice()
{
  price=wholeWheatBun;
  if(state.Patty)
  {
    price=price+ingredients["Patty"];
  }
if(state.Cheese)
{
  price=price+ingredients["Cheese"];
}
if(state.Tomatoes)
{
  price=price+ingredients["Tomatoes"];
}
if(state.Onions)
{
  price=price+ingredients["Onions"];
}
if(state.Lettuce)
{
  price=price+ingredients["Lettuce"];
}
document.querySelector(".price-details").innerHTML="INR "+price;
}
