const body = document.body;
let fragment = new DocumentFragment();
let section = document.createElement("section");
section.innerHTML += `
<div id="advert">
<div class='container'>
    <div class="advert-content">
      <h2>JONAS JONASSON</h2>
      <h3>Three friends go on a chiotic trip around the world</h3>
      <p>The new novel by the bestselling author</p>
    </div>
    </div>
</div>`;
fragment.append(section);
body.appendChild(fragment);
