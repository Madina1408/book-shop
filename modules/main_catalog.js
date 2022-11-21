const books = [
  {
    id: 1,
    author: "Douglas Crockford",
    imageLink: "../assets/book1.webp",
    title: "JavaScript: The Good Parts: The Good Parts",
    price: 30,
    stock:7,
    description:
      "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must",
  },
  {
    id: 2,
    author: "David Herman",
    imageLink: "../assets/book2.jpg",
    title: "Effective JavaScript: 68 Specific Ways ",
    price: 22,
    stock:5,
    description:
      "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from books structures to concurrency",
  },
  {
    id: 3,
    author: "David Flanagan",
    imageLink: "../assets/book3.webp",
    title: "JavaScript: The Definitive Guide",
    price: 40,
    stock:8,
    description:
      "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript",
  },
  {
    id: 4,
    author: " Eric Elliott",
    imageLink: "../assets/book4.jpg",
    title: "Programming JavaScript...",
    price: 19,
    stock:4,
    description:
      "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
  },
  {
    id: 5,
    author: "Addy Osmani",
    imageLink: "../assets/book5.jpg",
    title: "Learning JavaScript Design Patterns",
    price: 32,
    stock:7,
    description:
      "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
  },
  {
    id: 6,
    author: "Boris Cherny",
    imageLink: "../assets/book6.jpg",
    title: "Programming TypeScript: Application Scales",
    price: 28,
    stock:10,
    description:
      "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
  },
  {
    id: 7,
    author: "Alex Banks, Eve Porcello",
    imageLink: "../assets/book7.webp",
    title: "Learning React, 2nd Edition",
    price: 25,
    stock:6,
    description:
      "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
  },
  {
    id: 8,
    author: "Bradley Meck Alex Young and Mike Cantelon",
    imageLink: "../assets/book8.jpg",
    title: "Node.js in Action",
    price: 38,
    stock:7,
    description:
      "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
  },
  {
    id: 9,
    author: "Kyle Simpson",
    imageLink: "../assets/book9.jpg",
    title: "You Don't Know JS Yet: Scope and Closure: Get Started",
    price: 26,
    stock:10,
    description:
      "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
  },
  {
    id: 10,
    author: "John Resig and Bear Bibeault",
    imageLink: "../assets/book10.jpg",
    title: "Secrets of the JavaScript Ninja",
    price: 33,
    stock:3,
    description:
      "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
  }
];
// create div for rendering cart items

const openPopup = (id) => {
  const hiddenPoupDivforId = document.getElementById('popup'+id);
  hiddenPoupDivforId.classList.remove('hidden');
};
function closePopup(id) {
  const hiddenPoupDivforId = document.getElementById('popup'+id);
  hiddenPoupDivforId.classList.add('hidden');
}

const body = document.body;
let fragment = new DocumentFragment();

const divH2 = document.createElement("div");
const h2 = document.createElement("h2");
h2.textContent = "Our Bestselling Books";
divH2.appendChild(h2);

const section = document.createElement("section");
const seeMore = document.createElement("div");

const div = document.createElement("div");
seeMore.innerHTML += `<a><h4>Explore More</h4><i class='bx bxs-chevron-down arrow'></i></a>`;
books.forEach((book) => {
  div.innerHTML += ` <div draggable='true' id='inner-container${book.id}' class="inner-container">
  <div>
    <img class='draggable-image' src="${book.imageLink}" alt="">
  </div>
  <div class="content">
    <h4>${book.author}</h4>
    <h5>${book.title}</h5>
    <div class='price-div' >
      <h6>${book.price} $</h6>
      <button id='open-popup' onClick="openPopup('${book.id}')" class="popup-button">Show More</button>
    </div>
    <button onClick="addToCart('${book.id}')" class='btn add-to-cart'>Add to Cart</button>
  </div>
  <div id='popup${book.id}' class='popup hidden'>
    <div class='popup-content'>
      <h6>Description</h6>
      <p>${book.description}</p>
      <div onClick="closePopup('${book.id}')" class='controls'>
        <i class='bx bx-window-close close-btn'></i>
      </div>
    </div>
  </div>
</div> `;
});
const cartDiv = document.createElement('div');
cartDiv.innerHTML=`<div id ='cart-container'>
  <div class='add-item'>
    <i class='bx bx-cart icon'></i>
    <div class='total-items-in-cart'></div>
  </div>
  <div class="cart-header">
    <div class="column1">Item</div>
    <div class="column2">Unit price</div>
    <div class="column3">Units</div>
  </div>
  <div style='min-height: 50px; font-weight:bold; font-size:small; width:100%' class="cart-items">
    Cart items:
  </div>
  <div class="cart-footer">
    <div class="subtotal">
    </div>
    <form  action='../pages/form.html'>
      <input onClick='isEmpty(event)' class="checkout" type= 'submit' value = 'Proceed to checkout'/>
    </form>
  </div>
</div>`

const cartAndBook =document.createElement('div');
cartAndBook.setAttribute('id', 'cartAndBook');
cartAndBook.append(div)
cartAndBook.append(cartDiv);
section.appendChild(divH2);
section.appendChild(cartAndBook)
section.appendChild(seeMore);
fragment.append(section);
section.setAttribute("id", "main-container");
seeMore.setAttribute("id", "see-more");
body.appendChild(fragment);
div.setAttribute("id", "catalog-container");

// cart array
let cart =[];

function addToCart(id){
  // check if book already exist in cart
  if (cart.some((book)=>book.id==id)){
    changeNumberOfUnits('plus',id)
  } else{
    const item = books.find((book)=>book.id==id);
    cart.push({
      ...item, numberOfUnits: 1
    });
  }

  updateCart();
}

//update cart
function updateCart(){
  renderCartItems();
  renderSubtotal();
}

const cartItemsEl = document.querySelector('.cart-items');
const subtotalEl = document.querySelector('.subtotal');
const totalItemsInCartEl = document.querySelector('.total-items-in-cart');

//calculate and render subtotal
function renderSubtotal(){
  let totalPrice=0, toatlItems=0;

  cart.forEach((item)=>{
    totalPrice+=item.price*item.numberOfUnits;
    toatlItems+=item.numberOfUnits;
  });
  subtotalEl.innerHTML= `Subtotal (${toatlItems} books): $${totalPrice}`;
  totalItemsInCartEl.innerHTML=`${toatlItems} `
}

//render cart items
function renderCartItems(){
  cartItemsEl.innerHTML=''; //clear cart element
  cart.forEach((item)=>{
    cartItemsEl.innerHTML+= `
      <div class="cart-item">
          <div class="item-info" onclick="removeItemFromCart(${item.id})">
              <img  src="${item.imageLink}" alt="${item.title}">
              <h4>${item.author}</h4>
          </div>
          <div class="unit-price">
              <small>$</small>${item.price}
          </div>
          <div class="units">
              <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
              <div class="number">${item.numberOfUnits}</div>
              <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
          </div>
          <button onClick="removeItemFromCart(${item.id})" class='remove-item'>Remove</button>
      </div>`
  } )
};

//remove item from cart
function removeItemFromCart(id){
  cart=cart.filter((item)=>item.id !== id);
  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id){
  cart= cart.map((item)=>{
  let numberOfUnits=item.numberOfUnits;
    if(item.id==id){
      if(action==='minus' && numberOfUnits>1){
        numberOfUnits--;
      }else if (action==='plus'
      // && numberOfUnits<item.stock
      ){
        numberOfUnits++;
      }
    }
    return {...item, numberOfUnits};
  });

  updateCart();
}

const form = document.getElementsByTagName('form');

function isEmpty(event){
 if (cart.length==0){
  alert ('Your cart is empty');
  event.preventDefault();
 }
}

const dropArea = document.querySelector('.cart-items');


let draggedBook=null;

for (let i=0; i<books.length;i++){
  const book=books[i];

  const innerContainer = document.getElementById(`inner-container${book.id}`)
  innerContainer.addEventListener('dragstart',function(){
    draggedBook = book;
  });

  innerContainer.addEventListener('dragend',function(){
    setTimeout(function(){
      draggedBook=null;
    }, 0);
  });
}

dropArea.addEventListener('dragover', function(e){
  e.preventDefault();
});

dropArea.addEventListener('dragenter', function(e){
  e.preventDefault();
});

dropArea.addEventListener('drop', function(e){
  addToCart(draggedBook.id)
});

