const body =document.body;
let fragment = new DocumentFragment();
const header= document.createElement('header');
fragment.append(header);
header.innerHTML+=`
<nav>
  <div class="logo">
    <i class='bx bx-book-heart book'></i>
    <h1>BOOK <br> SHOP</h1>
  </div>
  <ul>
    <li><a><i class='bx bx-cart icon'></i> <p> Cart</p></li></a>
    <li><a><i class='bx bx-book-heart icon'></i><p> Favourites</p></li></a>
    <li><a><i class='bx bx-user-pin icon'></i> <p> Account</p></a></li>
  </ul>
</nav>`
body.append(fragment);