const body = document.body;
let fragment = new DocumentFragment();
let footer = document.createElement("footer");
footer.innerHTML += `
<div class="container">
  <div class="newsletter">
    <h4>The Book Shop newsletter</h4>
    <p>10% welcome voucher for first registration (does not <br> apply to price-controlled goods)</p>
    <div class="order">
      <input type="email" placeholder="E-mail adress" name="" id="">
      <button>Order</button>
    </div>
  </div>
  <div class='sub-container'>
  <div class="cards">
      <a href=""><img src="./assets/visa.jpg" alt=""></a>
      <a href=""><img src="./assets/mastercard.jpg" alt=""></a>
      <a href=""><img src="./assets/ec.webp" alt=""></a>
     </div>
    <div class="socials">
      <a href=""><img src="./assets/face.webp" alt=""></a>
      <a href=""><img src="./assets/ins.webp" alt=""></a>
      <a href=""><img src="./assets/pinter.webp" alt=""></a>
    </div>
    </div>
</div>`;
fragment.append(footer);
body.appendChild(fragment);
